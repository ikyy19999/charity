import React, { Suspense } from "react";
import Navbar from "./_components/navbar";
import ListCategory from "./_components/list-category";
import ListProducts from "./_components/list-products";
import ListBrands from "./_components/list-brands";

export default function LandingPage() {
	return (
		<>
    <header className="bg-[#FFF8F0] pt-[30px] pb-[50px]">
        <Navbar />
        <div className="container max-w-[1130px] mx-auto flex items-center justify-between gap-1 mt-[50px]">
            <div className="flex flex-col gap-[30px]">
                <div className="flex items-center gap-[10px] p-[8px_16px] rounded-full bg-white w-fit shadow-sm">
                    <div className="w-[22px] h-[22px] flex shrink-0">
                        <img src="assets/icons/crown.svg" alt="icon" />
                    </div>
                    <p className="font-semibold text-sm text-[#5C2C0C]">
                        Most Popular Pastry of the Month
                    </p>
                </div>
                <div className="flex flex-col gap-[14px]">
                    <h1 className="font-bold text-[55px] leading-[55px] text-[#5C2C0C]">
                        Delicious Pastries <br /> Made With Love
                    </h1>
                    <p className="text-lg leading-[34px] text-[#8D6E63]">
                        Indulge in our handcrafted pastries made from the finest ingredients. 
                        Freshly baked daily with traditional techniques and a modern twist.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <a
                        href="/catalogs"
                        className="p-[18px_24px] rounded-full font-semibold bg-[#D27D2D] text-white hover:bg-[#B56A23] transition-colors"
                    >
                        Order Now
                    </a>
                    <a
                        href="/about"
                        className="p-[18px_24px] rounded-full font-semibold bg-white border border-[#D27D2D] text-[#D27D2D] hover:bg-[#FFF3E0] transition-colors"
                    >
                        View Menu
                    </a>
                </div>
            </div>
            <div className="w-[588px] h-[360px] flex shrink-0 overflow-hidden relative">
                <img
                    src="https://i.pinimg.com/736x/bf/41/aa/bf41aa06c779b8e46de8c784de052b49.jpg"
                    className="object-contain"
                    alt="Fresh pastries display"
                />
                <div className="absolute top-[60%] bg-white p-[14px_16px] rounded-3xl flex items-center gap-[10px] shadow-md">
                    <div className="w-12 h-12 flex shrink-0 rounded-full items-center justify-center bg-[#FFC736] overflow-hidden">
                        <img
                            src="assets/icons/code-circle.svg"
                            className="w-6 h-6"
                            alt="icon"
                        />
                    </div>
                    <p className="font-semibold text-sm text-[#5C2C0C]">
                        Free Delivery <br /> On First Order
                    </p>
                </div>
                <div className="absolute right-0 top-[30%] bg-white p-[14px_16px] rounded-3xl flex flex-col items-center gap-[10px] shadow-md">
                    <div className="w-12 h-12 flex shrink-0 rounded-full items-center justify-center bg-[#FFC736] overflow-hidden">
                        <img
                            src="assets/icons/star-outline.svg"
                            className="w-6 h-6"
                            alt="icon"
                        />
                    </div>
                    <p className="font-semibold text-sm text-center text-[#5C2C0C]">
                        Freshly Baked <br /> Daily
                    </p>
                </div>
            </div>
        </div>
        <div className="container max-w-[1130px] mx-auto flex items-center justify-center gap-10 mt-[50px]">
            <div className="flex items-center gap-[10px]">
                <div className="w-[50px] h-[50px] flex shrink-0 rounded-full border-[5px] border-white overflow-hidden">
                    <img
                        src="assets/photos/p1.png"
                        className="w-full h-full object-cover"
                        alt="Customer photo"
                    />
                </div>
                <div className="flex flex-col gap-[2px]">
                    <p className="font-semibold text-sm leading-[22px] text-[#5C2C0C]">
                        Best croissants ever!
                    </p>
                    <p className="text-xs leading-[18px] text-[#8D6E63]">
                        Jemmie Pemilia
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-[10px]">
                <div className="w-[50px] h-[50px] flex shrink-0 rounded-full border-[5px] border-white overflow-hidden">
                    <img
                        src="assets/photos/p2.png"
                        className="w-full h-full object-cover"
                        alt="Customer photo"
                    />
                </div>
                <div className="flex flex-col gap-[2px]">
                    <p className="font-semibold text-sm leading-[22px] text-[#5C2C0C]">
                        Perfect for events
                    </p>
                    <p className="text-xs leading-[18px] text-[#8D6E63]">
                        Angga Risky
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-[10px]">
                <div className="w-[50px] h-[50px] flex shrink-0 rounded-full border-[5px] border-white overflow-hidden">
                    <img
                        src="assets/photos/p3.png"
                        className="w-full h-full object-cover"
                        alt="Customer photo"
                    />
                </div>
                <div className="flex flex-col gap-[2px]">
                    <p className="font-semibold text-sm leading-[22px] text-[#5C2C0C]">
                        So flaky & buttery
                    </p>
                    <p className="text-xs leading-[18px] text-[#8D6E63]">
                        Petina Malaka
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-[10px]">
                <div className="w-[50px] h-[50px] flex shrink-0 rounded-full border-[5px] border-white overflow-hidden">
                    <img
                        src="assets/photos/p4.png"
                        className="w-full h-full object-cover"
                        alt="Customer photo"
                    />
                </div>
                <div className="flex flex-col gap-[2px]">
                    <p className="font-semibold text-sm leading-[22px] text-[#5C2C0C]">
                        My daily breakfast!
                    </p>
                    <p className="text-xs leading-[18px] text-[#8D6E63]">
                        Udin Sarifun
                    </p>
                </div>
            </div>
        </div>
    </header>
    <section
        id="content"
        className="container max-w-[1130px] mx-auto flex flex-col gap-[50px] pt-[50px] pb-[100px]"
    >
        <Suspense fallback={<span>Loading...</span>}>
            <ListCategory />
        </Suspense>
        <Suspense fallback={<span>Loading...</span>}>
            <ListProducts
                title={
                    <>
                        Our Most Popular <br /> Pastry Selection
                    </>
                }
            />
        </Suspense>
        <Suspense fallback={<span>Loading...</span>}>
            <ListBrands />
        </Suspense>
        <Suspense fallback={<span>Loading...</span>}>
            <ListProducts
                title={
                    <>
                        New Seasonal <br /> Specialties
                    </>
                }
            />
        </Suspense>
    </section>
</>
	);
}