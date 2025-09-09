"use client"

import { useCart } from '@/hooks/useCart'
import { rupiahFormat } from '@/lib/utils'
import React from 'react'

export default function CartProducts() {
    const {products, decreaseQuantity, increaseQuantity, removeProduct} = useCart()

  return (
    <div id="cart" className="container max-w-[1130px] mx-auto flex flex-col gap-5 mt-[50px]">
    {products.map((cart) => (
        <div key={cart.id + cart.name} className="product-total-card bg-white flex items-center justify-between p-5 rounded-[20px] border border-[#F5E6D8] hover:shadow-md transition-shadow">
            <div className="flex items-center w-[340px] gap-5">
                <div className="w-[120px] h-[70px] flex shrink-0 overflow-hidden items-center justify-center bg-[#FFF8F0] rounded-lg">
                    <img src={cart.image_url} className="w-full h-full object-contain" alt={cart.name} />
                </div>
                <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-[22px] text-[#5C2C0C]">{cart.name}</p>
                    <p className="text-sm text-[#8D6E63]">{cart.category_name}</p>
                </div>
            </div>
            <div className="w-[150px] flex flex-col gap-1">
                <p className="text-sm text-[#8D6E63]">Price</p>
                <p className="font-semibold text-[#D27D2D] leading-[22px]">{rupiahFormat(cart.price)}</p>
            </div>
            <div className="w-[120px] flex flex-col gap-1">
                <p className="text-sm text-[#8D6E63]">Quantity</p>
                <div className="flex items-center gap-3">
                    <button 
                        type='button' 
                        onClick={() => decreaseQuantity(cart.id)} 
                        className="w-6 h-6 flex shrink-0 hover:opacity-70 transition-opacity"
                    >
                        <img src="assets/icons/minus-cirlce.svg" alt="Decrease quantity" />
                    </button>
                    <p className="text-[#D27D2D] font-semibold leading-[22px] min-w-[30px] text-center">{cart.quantity}</p>
                    <button 
                        type='button' 
                        onClick={() => increaseQuantity(cart.id)} 
                        className="w-6 h-6 flex shrink-0 hover:opacity-70 transition-opacity"
                    >
                        <img src="assets/icons/add-circle.svg" alt="Increase quantity" />
                    </button>
                </div>
            </div>
            <div className="w-[150px] flex flex-col gap-1">
                <p className="text-sm text-[#8D6E63]">Total</p>
                <p className="font-semibold text-[#D27D2D] leading-[22px]">{rupiahFormat(cart.price * cart.quantity)}</p>
            </div>
            <button 
                type='button' 
                onClick={() => removeProduct(cart.id)} 
                className="p-[12px_24px] bg-white rounded-full text-center font-semibold border border-[#F5E6D8] text-[#D27D2D] hover:bg-[#FFF3E0] transition-colors"
            >
                Remove
            </button>
        </div>
    ))}
</div>
  )
}