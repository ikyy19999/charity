"use client"

import { useCart } from '@/hooks/useCart'
import { rupiahFormat } from '@/lib/utils'
import React, { useActionState, useMemo } from 'react'
import { useFormStatus } from 'react-dom'
import { storeOrder } from '../lib/actions'
import { ActionResult } from '@/types'

const initialState: ActionResult = {
    error: ''
}

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button
            type='submit'
            disabled={pending}
            className="p-[12px_24px] bg-[#0D5CD7] rounded-full text-center font-semibold text-white"
        >
            {pending ? 'Checkout with xendit...' : 'Checkout Now'}
        </button>
    )
}

export default function CheckoutForm() {
    const { products } = useCart()

    // Hitung subtotal
    const grandTotal = useMemo(() => {
        return products.reduce((prev, curr) => prev + curr.price * curr.quantity, 0)
    }, [products])

    // Hitung biaya tambahan (tanpa PPN)
    const insurance = grandTotal * 0.12 // 12%
    const shipping = 5000 // Flat shipping
    const warranty = grandTotal * 0.05 // 5%

    const finalTotal = grandTotal + insurance + shipping + warranty

    const storeOrderParams = (_: unknown, formData: FormData) =>
        storeOrder(_, formData, grandTotal, products)
    const [state, formAction] = useActionState(storeOrderParams, initialState)

    return (
        <form action={formAction} id="checkout-info" className="container max-w-[1130px] mx-auto flex justify-between gap-5 mt-[50px] pb-[100px]">
    {/* Delivery Address */}
    <div className="w-[650px] flex flex-col shrink-0 gap-4 h-fit">
        <h2 className="font-bold text-2xl leading-[34px] text-[#5C2C0C]">Your Delivery Address</h2>
        <div className="flex flex-col gap-5 p-[30px] rounded-3xl border border-[#F5E6D8] bg-white shadow-sm">
            {/* Name */}
            <div className="flex items-center gap-[10px] rounded-full border border-[#F5E6D8] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#D27D2D] transition-all duration-300">
                <div className="flex shrink-0">
                    <img src="assets/icons/profile-circle.svg" alt="name icon" />
                </div>
                <input 
                    type="text" 
                    name="name" 
                    className="appearance-none outline-none w-full placeholder:text-[#8D6E63] placeholder:font-normal font-semibold text-[#5C2C0C]" 
                    placeholder="Write your complete name" 
                    required 
                />
            </div>
            {/* Address */}
            <div className="flex items-center gap-[10px] rounded-full border border-[#F5E6D8] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#D27D2D] transition-all duration-300">
                <div className="flex shrink-0">
                    <img src="assets/icons/house-2.svg" alt="address icon" />
                </div>
                <input 
                    type="text" 
                    name="address" 
                    className="appearance-none outline-none w-full placeholder:text-[#8D6E63] placeholder:font-normal font-semibold text-[#5C2C0C]" 
                    placeholder="Write your complete delivery address" 
                    required 
                />
            </div>
            {/* City & Postal */}
            <div className="flex items-center gap-[30px]">
                <div className="flex items-center gap-[10px] rounded-full border border-[#F5E6D8] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#D27D2D] transition-all duration-300">
                    <div className="flex shrink-0">
                        <img src="assets/icons/global.svg" alt="city icon" />
                    </div>
                    <input 
                        type="text" 
                        name="city" 
                        className="appearance-none outline-none w-full placeholder:text-[#8D6E63] placeholder:font-normal font-semibold text-[#5C2C0C]" 
                        placeholder="City" 
                        required 
                    />
                </div>
                <div className="flex items-center gap-[10px] rounded-full border border-[#F5E6D8] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#D27D2D] transition-all duration-300">
                    <div className="flex shrink-0">
                        <img src="assets/icons/location.svg" alt="postal icon" />
                    </div>
                    <input 
                        type="number" 
                        name="postal_code" 
                        className="appearance-none outline-none w-full placeholder:text-[#8D6E63] placeholder:font-normal font-semibold text-[#5C2C0C]" 
                        placeholder="Post code" 
                        required 
                    />
                </div>
            </div>
            {/* Notes */}
            <div className="flex items-start gap-[10px] rounded-[20px] border border-[#F5E6D8] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#D27D2D] transition-all duration-300">
                <div className="flex shrink-0">
                    <img src="assets/icons/note.svg" alt="notes icon" />
                </div>
                <textarea 
                    name="notes" 
                    className="appearance-none outline-none w-full placeholder:text-[#8D6E63] placeholder:font-normal font-semibold text-[#5C2C0C] resize-none" 
                    rows={6} 
                    placeholder="Special delivery instructions or notes" 
                    required 
                />
            </div>
            {/* Phone */}
            <div className="flex items-center gap-[10px] rounded-full border border-[#F5E6D8] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#D27D2D] transition-all duration-300">
                <div className="flex shrink-0">
                    <img src="assets/icons/call.svg" alt="phone icon" />
                </div>
                <input 
                    type="tel" 
                    name="phone" 
                    className="appearance-none outline-none w-full placeholder:text-[#8D6E63] placeholder:font-normal font-semibold text-[#5C2C0C]" 
                    placeholder="Write your phone number or whatsapp" 
                    required 
                />
            </div>
        </div>
    </div>

    {/* Order Summary */}
    <div className="flex flex-1 flex-col shrink-0 gap-4 h-fit">
        <h2 className="font-bold text-2xl leading-[34px] text-[#5C2C0C]">Order Summary</h2>
        <div className="w-full bg-white border border-[#F5E6D8] flex flex-col gap-[30px] p-[30px] rounded-3xl shadow-sm">
            {/* Quality Note */}
            <a href="">
                <div className="w-full bg-white border border-[#F5E6D8] flex items-center justify-between gap-2 p-5 rounded-3xl hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-[10px]">
                        <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#FFC736] items-center justify-center overflow-hidden">
                            <img src="assets/icons/cake.svg" alt="quality icon" />
                        </div>
                        <div className="flex flex-col gap-[2px]">
                            <p className="font-semibold text-[#5C2C0C]">100% Fresh Ingredients</p>
                            <p className="text-sm text-[#8D6E63]">We use only the finest ingredients</p>
                        </div>
                    </div>
                    <div className="flex shrink-0">
                        <img src="assets/icons/arrow-right.svg" alt="arrow icon" />
                    </div>
                </div>
            </a>

            {/* Cost Breakdown */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <p className="text-[#5C2C0C]">Sub Total</p>
                    <p className="font-semibold text-[#D27D2D]">{rupiahFormat(grandTotal)}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-[#5C2C0C]">Delivery Fee</p>
                    <p className="font-semibold text-[#D27D2D]">{rupiahFormat(15000)}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-[#5C2C0C]">Eco Packaging</p>
                    <p className="font-semibold text-[#D27D2D]">{rupiahFormat(5000)}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-[#5C2C0C]">Quality Guarantee</p>
                    <p className="font-semibold text-[#D27D2D]">{rupiahFormat(0)}</p>
                </div>
            </div>

            {/* Grand Total */}
            <div className="flex flex-col gap-1">
                <p className="font-semibold text-[#5C2C0C]">Grand Total</p>
                <p className="font-bold text-[32px] leading-[48px] text-[#D27D2D]">
                    {rupiahFormat(grandTotal + 20000)}
                </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3">
                <SubmitButton />
                <a href="" className="p-[12px_24px] bg-white rounded-full text-center font-semibold border border-[#F5E6D8] text-[#D27D2D] hover:bg-[#FFF3E0] transition-colors">
                    Contact Support
                </a>
            </div>
        </div>
    </div>
</form>
    )
}
