"use client"

import { useCart } from '@/hooks/useCart'
import { rupiahFormat } from '@/lib/utils'
import { TCart, TProduct } from '@/types'
import { useRouter } from 'next/navigation'
import React from 'react'

interface PriceInfoProp {
    item: TProduct
    isLogIn: boolean
}

export default function PriceInfo({item, isLogIn}: PriceInfoProp) {
    const {addProduct} = useCart()

    const router = useRouter()



    const checkout = () => {
        const newCart: TCart = {
            ...item,
            quantity: 1
        }

        addProduct(newCart)

        router.push('/carts')
    }

  return (
    <div className="w-[302px] flex flex-col shrink-0 gap-5 h-fit">
    <div className="w-full bg-white border border-[#F5E6D8] flex flex-col gap-[30px] p-[30px] rounded-3xl shadow-sm">
        <div className="flex flex-col gap-1">
            <p className="font-semibold text-[#5C2C0C]">Freshly Baked</p>
            <p className="font-bold text-[28px] leading-[48px] text-[#D27D2D]">{rupiahFormat(item.price)}</p>
        </div>
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
                <div className="flex shrink-0">
                    <img src="/assets/icons/tick-circle.svg" alt="Eco packaging icon" />
                </div>
                <p className="font-semibold text-[#5C2C0C]">Eco-friendly packaging</p>
            </div>
            <div className="flex items-center gap-2">
                <div className="flex shrink-0">
                    <img src="/assets/icons/tick-circle.svg" alt="Recipe icon" />
                </div>
                <p className="font-semibold text-[#5C2C0C]">Recipe card included</p>
            </div>
            <div className="flex items-center gap-2">
                <div className="flex shrink-0">
                    <img src="/assets/icons/tick-circle.svg" alt="Customer service icon" />
                </div>
                <p className="font-semibold text-[#5C2C0C]">Customer service 24/7</p>
            </div>
            <div className="flex items-center gap-2">
                <div className="flex shrink-0">
                    <img src="/assets/icons/tick-circle.svg" alt="Delivery icon" />
                </div>
                <p className="font-semibold text-[#5C2C0C]">Free delivery in city area</p>
            </div>
            <div className="flex items-center gap-2">
                <div className="flex shrink-0">
                    <img src="/assets/icons/tick-circle.svg" alt="Quality icon" />
                </div>
                <p className="font-semibold text-[#5C2C0C]">100% quality guarantee</p>
            </div>
        </div>
        <div className="flex flex-col gap-3">
            <button 
                disabled={!isLogIn} 
                type='button' 
                onClick={checkout} 
                className="p-[12px_24px] bg-[#D27D2D] rounded-full text-center font-semibold text-white disabled:opacity-60 hover:bg-[#B56A23] transition-colors"
            >
                Add to Cart
            </button>
            <a href="" className="p-[12px_24px] bg-white rounded-full text-center font-semibold border border-[#F5E6D8] text-[#D27D2D] hover:bg-[#FFF3E0] transition-colors">
                Save to Wishlist
            </a>
        </div>
    </div>
    <a href="">
        <div className="w-full bg-white border border-[#F5E6D8] flex items-center justify-between gap-2 p-5 rounded-3xl hover:shadow-md transition-shadow">
            <div className="flex items-center gap-[10px]">
                <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#FFC736] items-center justify-center overflow-hidden">
                    <img src="/assets/icons/cake.svg" alt="Gift icon" />
                </div>
                <div className="flex flex-col gap-[2px]">
                    <p className="font-semibold text-[#5C2C0C]">Buy as a Gift</p>
                    <p className="text-sm text-[#8D6E63]">Free Ribbon Wrap</p>
                </div>
            </div>
            <div className="flex shrink-0">
                <img src="/assets/icons/arrow-right.svg" alt="Arrow icon" />
            </div>
        </div>
    </a>
</div>
  )
}