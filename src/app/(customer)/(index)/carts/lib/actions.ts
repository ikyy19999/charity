"use server"

import { getUser } from "@/lib/auth";
import { schemaShippingAddress } from "@/lib/schema";
import { ActionResult, TCart } from "@/types";
import { redirect } from "next/navigation";
import { generateRandomString } from "@/lib/utils";
import { Prisma } from "@prisma/client";
import prisma from "../../../../../../prisma/lib/prisma";
import { snap } from "@/lib/midtrans";

export async function storeOrder(
    _: unknown,
    formData: FormData,
    total: number,
    products: TCart[]
): Promise<ActionResult> {

    const {session, user} = await getUser()

    if (!session) {
        return redirect('/')
    }

    const parse = schemaShippingAddress.safeParse({
        name: formData.get('name'),
        address: formData.get('address'),
        city: formData.get('city'),
        postal_code: formData.get('postal_code'),
        notes: formData.get('notes'),
        phone: formData.get('phone'),
    })

    if (!parse.success) {
        return {
            error: parse.error.errors[0].message
        }
    }

    let redirectPaymentUrl = '/'

    try {
        const order = await prisma.order.create({
            data: {
                total: total,
                status: 'pending',
                user_id: user.id,
                code: generateRandomString(15)
            }
        })

        // Create Midtrans transaction parameters
        const parameter = {
            transaction_details: {
                order_id: order.code, // Use order code as transaction ID
                gross_amount: total,
            },
            customer_details: {
                first_name: parse.data.name,
                phone: parse.data.phone,
                shipping_address: {
                    address: parse.data.address,
                    city: parse.data.city,
                    postal_code: parse.data.postal_code,
                }
            },
            callbacks: {
                finish: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/status`,
                error: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/status`,
                pending: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/status`
            }
        };

        // Create Midtrans transaction
        const transaction = await snap.createTransaction(parameter);
        redirectPaymentUrl = transaction.redirect_url; // Midtrans redirect URL

        const queryCreateProductOrder: Prisma.OrderProductCreateManyInput[] = []

        for (const product of products) {
            queryCreateProductOrder.push({
                order_id: order.id,
                product_id: product.id,
                quantity: product.quantity,
                subtotal: product.price
            })
        }

        await prisma.orderProduct.createMany({
            data: queryCreateProductOrder
        })

        await prisma.orderDetail.create({
            data: {
                address: parse.data.address,
                city: parse.data.city,
                name: parse.data.name,
                phone: parse.data.phone,
                postal_code: parse.data.postal_code,
                notes: parse.data.notes,
                order_id: order.id
            }
        })

    } catch (error) {
        console.log(error);
        return {
            error: "Failed to checkout"
        }
    }

    return redirect(redirectPaymentUrl)
}