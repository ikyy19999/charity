import { getUser } from '@/lib/auth'
import Link from 'next/link'
import React from 'react'
import { logout } from '../../(auth)/lib/actions'

export default async function Navbar() {
    const {session, user} = await getUser()

    // Fungsi untuk handle logout
    async function handleLogout() {
        'use server'
        // Implementasi logout logic di sini
    }

    return (
        <>
    {/* Demo Version Banner */}
    <div className="w-full bg-[#FFC736] py-2">
        <div className="container max-w-[1130px] mx-auto">
            <p className="text-center text-[#5C2C0C] font-semibold text-sm">
                🚀 DEMO VERSION - For Testing Purposes Only
            </p>
        </div>
    </div>
    
    {/* Navbar */}
    <nav className="container max-w-[1130px] mx-auto flex items-center justify-between bg-[#D27D2D] p-5 rounded-3xl mt-3">
        <div className="flex shrink-0">
            <img src="/assets/logos/logo.svg" alt="Pastry Shop Logo" />
        </div>
        <ul className="flex items-center gap-[30px]">
            <li className="hover:font-bold hover:text-[#FFF8F0] transition-all duration-300 font-bold text-[#FFF8F0]">
                <Link href="/catalogs">Menu</Link>
            </li>
            <li className="hover:font-bold hover:text-[#FFF8F0] transition-all duration-300 text-white">
                <Link href="/">Categories</Link>
            </li>
            <li className="hover:font-bold hover:text-[#FFF8F0] transition-all duration-300 text-white">
                <Link href="/">Testimonials</Link>
            </li>
            <li className="hover:font-bold hover:text-[#FFF8F0] transition-all duration-300 text-white">
                <Link href="/">Loyalty Program</Link>
            </li>
        </ul>
        <div className="flex items-center gap-3">
            <Link href="/carts">
                <div className="w-12 h-12 flex shrink-0 hover:opacity-80 transition-opacity">
                    <img src="/assets/icons/cart.svg" alt="Shopping Cart" />
                </div>
            </Link>
            {session && user.role === "customer" ? (
                <div className="flex items-center gap-3">
                    <p className="text-white">Hi, {user.name}</p>
                    {/* Tombol Logout */}
                    <form action={logout}>
                        <button 
                            type="submit"
                            className="p-[10px_18px] bg-[#B56A23] text-white rounded-full font-semibold hover:bg-[#9A5720] transition-colors duration-300"
                        >
                            Logout
                        </button>
                    </form>
                </div>
            ) : (
                <div className="flex items-center gap-3">
                    <Link href="/sign-in" className="p-[12px_20px] bg-white rounded-full font-semibold text-[#D27D2D] hover:bg-[#FFF3E0] transition-colors">
                        Sign In
                    </Link>
                    <Link href="/sign-up" className="p-[12px_20px] bg-white rounded-full font-semibold text-[#D27D2D] hover:bg-[#FFF3E0] transition-colors">
                        Sign Up
                    </Link>
                </div>
            )}
        </div>
    </nav>
</>
    )
}