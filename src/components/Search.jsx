"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();


  const handleChange = (e) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    if (value.trim()) {
      params.set("search", value.trim());
    } 
    else {
      params.delete("search");
    }

    // to preserve other params  like category and  sort
    router.push(`/?${params.toString()}`);
  };
  //how back naviagtion or on refresh works here ...as the url changes on back navigation or on refresh
  //  then it directly read the data from the url and component re render 
   const search=searchParams.get("search")||""

  return (
    <div className="relative ">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={handleChange}
              className="md:w-full pl-10 pr-4 py-2  w-25 rounded-md bg-gray-100 text-black"
            />
    
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
  );
}

export default Search;
