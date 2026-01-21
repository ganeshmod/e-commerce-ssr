"use client"
import { addCount } from "@/app/redux/slice";
import React,{useState} from "react";
import { useDispatch } from "react-redux";


function AddCartButton() {
  const[count,setCount]=useState(0);
  const dispatch=useDispatch();
  function handleClick(){
    setCount((prev)=>prev+1)
    dispatch(addCount(count))
  }
 

  return (
    <button
      onClick={handleClick}
      type="button"
      className="bg-black text-white p-2 px-3 rounded-md  cursor-pointer "
    >
      {" "}
      ADD TO CART
    </button>
  );
}

export default AddCartButton;
