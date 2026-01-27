"use client";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

function CartIcon() {
  const router = useRouter();
  const selector = useSelector((state) => state.users.length);
  return (
    <>
      <div className="relative inline-block">
        <FiShoppingCart
          className="w-6 h-6 text-gray-700 cursor-pointer"
          onClick={() => router.push("/shopingcart")}
        />

        <span
          className="absolute -top-3 -right-2 bg-red-500 text-white text-xs font-bold 
                   w-5 h-5 flex items-center justify-center rounded-full"
        >
          {selector}
        </span>
      </div>
    </>
  );
}

export default CartIcon;
