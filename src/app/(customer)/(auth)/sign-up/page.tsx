"use client"

import { ActionResult } from '@/types';
import React, { useActionState } from 'react'
import { useFormStatus } from 'react-dom';
import { signUp } from '../lib/actions';
import Link from 'next/link';

const initialFormState: ActionResult = {
	error: "",
};

function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<button
			disabled={pending}
			type="submit"
			className="p-[12px_24px] bg-[#0D5CD7] rounded-full text-center font-semibold text-white"
		>
			{pending ? "Loading..." : "Sign In to My Account"}
		</button>
	);
}

export default function SignUpPage() {

    const [state, formAction] = useActionState(signUp, initialFormState);


  return (
    <div id="signin" className="bg-[#FFF8F0] min-h-screen pt-[30px] pb-[50px] flex flex-col">
    <div className="container max-w-[1130px] mx-auto flex flex-1 items-center justify-center py-5">
        <form action={formAction} className="w-[500px] bg-white p-[50px_30px] flex flex-col gap-5 rounded-3xl border border-[#F5E6D8] shadow-sm">
            <h1 className="font-bold text-2xl leading-[34px] text-[#5C2C0C] text-center">Join Our Pastry Family</h1>

            {state.error !== "" && (
                <div className="border border-red-300 text-red-500 p-3 rounded-lg bg-red-50">
                    <h4 className="font-semibold">Error</h4>
                    <p className="text-sm">{state.error}</p>
                </div>
            )}

            <div className="flex items-center gap-[10px] rounded-full border border-[#F5E6D8] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#D27D2D] transition-all duration-300">
                <div className="flex shrink-0">
                    <img src="assets/icons/profile-circle.svg" alt="icon" />
                </div>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="appearance-none outline-none w-full placeholder:text-[#8D6E63] placeholder:font-normal font-semibold text-[#5C2C0C]" 
                    placeholder="Write your complete name" 
                />
            </div>
            <div className="flex items-center gap-[10px] rounded-full border border-[#F5E6D8] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#D27D2D] transition-all duration-300">
                <div className="flex shrink-0">
                    <img src="assets/icons/sms.svg" alt="icon" />
                </div>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="appearance-none outline-none w-full placeholder:text-[#8D6E63] placeholder:font-normal font-semibold text-[#5C2C0C]" 
                    placeholder="Write your email address" 
                />
            </div>
            <div className="flex flex-col gap-[10px]">
                <div className="flex items-center gap-[10px] rounded-full border border-[#F5E6D8] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#D27D2D] transition-all duration-300">
                    <div className="flex shrink-0">
                        <img src="assets/icons/lock.svg" alt="icon" />
                    </div>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        className="appearance-none outline-none w-full placeholder:text-[#8D6E63] placeholder:font-normal font-semibold text-[#5C2C0C]" 
                        placeholder="Create your password" 
                    />
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <SubmitButton />
                <Link 
                    href="/sign-in" 
                    className="p-[12px_24px] bg-white rounded-full text-center font-semibold border border-[#F5E6D8] text-[#D27D2D] hover:bg-[#FFF3E0] transition-colors"
                >
                    Already have an account? Sign In
                </Link>
            </div>
        </form>
    </div>
</div>
  )
}
