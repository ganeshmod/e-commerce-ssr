"use client";
import { useRouter } from "next/navigation";
import React,{useEffect, useState,} from "react";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import Search from "./Search";

function Header() {
 
  return (
    <div className=" bg-white shadow-md sticky top-0 z-50 ">
      <div className="max-w-7xl h-auto  mx-auto p-3 py-5  rounded-sm flex justify-between items-center border-b-2 border-grey-500">
      <div>
        <h2 className="md:text-3xl  sm:text-2xl text-lg text-black font-semibold">
          Ecommerce Store
        </h2>
      </div>
      <div className="flex justify-between items-center gap-2">

      {/* <div className="relative ">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className="md:w-full pl-10 pr-4 py-2  w-25 rounded-md bg-gray-100 text-black"
        />

        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      </div> */}
      <Search/>
      <div>

      <FiShoppingCart className="w-6 h-6 text-gray-700 " />
      </div>
      </div>

      </div>
    </div>
  );
}

export default Header;
