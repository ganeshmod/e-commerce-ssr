"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize search from URL (on refresh / back navigation)
  useEffect(() => {
    const searchQuery = searchParams.get("search") || "";
    setSearch(searchQuery);
  }, [searchParams]);

  // Update URL immediately on each change
  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    const params = new URLSearchParams(searchParams.toString());

    if (value.trim()) {
      params.set("search", value.trim());
    } else {
      params.delete("search");
    }

    // Preserve other params (category, sort)
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="relative ">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              className="md:w-full pl-10 pr-4 py-2  w-25 rounded-md bg-gray-100 text-black"
            />
    
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
  );
}

export default Search;
