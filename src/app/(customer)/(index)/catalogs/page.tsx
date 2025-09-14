import React from 'react'
import Navbar from '../_components/navbar'
import SearchBar from './_components/search-bar'
import FilterPrice from './_components/filter-price'
import FilterStock from './_components/filter-stock'
import FilterBrands from './_components/filter-brands'
import FilterLocation from './_components/filter-location'
import FilterCategories from './_components/filter-categories'
import ProductListing from './_components/product-listing'

export const metadata = {
  title: "Pick Your Faves 😋",
}

export default function CatalogPage() {
  return (
    <>
    <header className="bg-[#FFF8F0] pt-[30px] h-[351px] -mb-[181px]">
        <Navbar />
    </header>
    <SearchBar />
    <div id="catalog" className="container max-w-[1130px] mx-auto flex gap-[30px] mt-[50px] pb-[100px]">
        <form action="" className="flex flex-1 flex-col bg-white p-[30px] gap-5 h-fit border border-[#F5E6D8] rounded-[30px] shadow-sm">
            <h2 className="font-bold text-2xl leading-[34px] text-[#5C2C0C]">Filters</h2>
            <FilterPrice />
            <hr className="border-[#F5E6D8]" />
            <FilterStock />
            <hr className="border-[#F5E6D8]" />
            <FilterBrands />
            <hr className="border-[#F5E6D8]" />
            <FilterLocation />
            <hr className="border-[#F5E6D8]" />
            <FilterCategories />
        </form>
        <div className="w-[780px] flex flex-col bg-white p-[30px] gap-[30px] h-fit border border-[#F5E6D8] rounded-[30px] shadow-sm">
            <h2 className="font-bold text-2xl leading-[34px] text-[#5C2C0C]">Our Pastries</h2>
            <ProductListing />
        </div>
    </div>
</>
  )
}