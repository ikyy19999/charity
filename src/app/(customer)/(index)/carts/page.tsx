import React from 'react'
import Navbar from '../_components/navbar'
import CartProducts from './_components/cart-products'
import CheckoutForm from './_components/checkout-form'

export default function CartsPage() {
  return (
    <>
    <header className="bg-[#FFF8F0] pt-[30px] h-[480px] -mb-[310px]">
        <Navbar />
    </header>
    <div id="title" className="container max-w-[1130px] mx-auto flex items-center justify-between">
        <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-center">
                <a className="page text-sm text-[#8D6E63] last-of-type:text-[#5C2C0C]">Shop</a>
                <span className="text-sm text-[#8D6E63]">/</span>
                <a className="page text-sm text-[#8D6E63] last-of-type:text-[#5C2C0C]">Browse</a>
                <span className="text-sm text-[#8D6E63]">/</span>
                <a className="page text-sm text-[#8D6E63] last-of-type:text-[#5C2C0C]">Cart</a>
            </div>
            <h1 className="font-bold text-4xl leading-9 text-[#5C2C0C]">My Pastry Cart</h1>
        </div>
    </div>
    <CartProducts />
    <CheckoutForm />
</>
  )
}