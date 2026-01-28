"use client";

import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function WishlistButton() {
  const [liked, setLiked] = useState(false);
  

  return (
    <button onClick={() => setLiked(!liked)} className="my-2">
      {liked ? (
        <div className="flex gap-2 ">
        <FaHeart className="text-black text-2xl cursor-pointer" />
        <span className="text-black">WishList</span>
        </div>
      )  : (
        <div className="flex gap-2">

            <FaRegHeart className="text-gray-400 text-2xl cursor-pointer" />
            <span className="text-black">WishList</span>
        </div>
      )}
    </button>
  );
}