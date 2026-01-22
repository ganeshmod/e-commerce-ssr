"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";

import { usePathname } from "next/navigation";
import CartIcon from "./CartIcon";
import dynamic from "next/dynamic";
const Search=dynamic(()=>import("./Search"))

function Header() {
  const pathname = usePathname();
  const hideSearch = pathname.startsWith("/products/");
  const hideHeaderName=pathname.startsWith("/shopingcart");
  return (
    <div className=" bg-white shadow-md sticky top-0 z-50 ">
      <div className="max-w-7xl h-auto  mx-auto p-3 py-5  rounded-sm flex justify-between items-center border-b-2 border-grey-500">
        <div>
          <h2 className="md:text-3xl  sm:text-2xl text-lg text-black font-semibold">
            {
          hideHeaderName?" Shopping Cart":"Ecommerce Store"

          }
          </h2>

          {
            hideHeaderName && <h2 className='text-black p-0 mt-2 text-'>Review and Manage your cart items </h2>

          }
        </div>
        <div className="flex justify-between items-center gap-2">
          {!hideSearch && !hideHeaderName&& <Search />}
          <div>

         { !hideHeaderName && <CartIcon/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
