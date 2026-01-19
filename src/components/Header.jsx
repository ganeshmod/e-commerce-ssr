"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import Search from "./Search";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  const hideSearch = pathname.startsWith("/products/");


  return (
    <div className=" bg-white shadow-md sticky top-0 z-50 ">
      <div className="max-w-7xl h-auto  mx-auto p-3 py-5  rounded-sm flex justify-between items-center border-b-2 border-grey-500">
        <div>
          <h2 className="md:text-3xl  sm:text-2xl text-lg text-black font-semibold">
            Ecommerce Store
          </h2>
        </div>
        <div className="flex justify-between items-center gap-2">
          {!hideSearch && <Search />}
          <div>
            <FiShoppingCart className="w-6 h-6 text-gray-700 " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
