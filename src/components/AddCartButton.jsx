"use client";
import { addToCart } from "@/app/redux/slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function AddCartButton({ product }) {
  const [flag, setFlag] = useState(true);
  const dispatch = useDispatch();

  function handleAddToCart() {
    if (!flag) return;        

    dispatch(addToCart(product)); 
    setFlag(false);                
  }

  return (
    <button
      onClick={handleAddToCart}
      disabled={!flag}   
      className={`p-2 px-3 rounded-md text-white cursor-pointer
        ${flag ? "bg-black" : "bg-gray-400 cursor-not-allowed"}`}
    >
      {flag ? "ADD TO CART" : "ADDED"}
    </button>
  );
}

export default AddCartButton;