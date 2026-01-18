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
    <div className=" flex gap-2">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={handleChange}
        className="md:w-full w-25 pl-10 pr-4 py-2 rounded-md bg-gray-100 text-black"
      />
      
      <button type="submit" className="bg-yellow-400 p-2 rounded-lg"><FiSearch /></button>
    </div>
  );
}

export default Search;
