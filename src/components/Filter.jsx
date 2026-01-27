'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

function Filter() {
     const router = useRouter();
  const searchParams = useSearchParams();
    function handleSortChange(e){
        const params=new URLSearchParams(searchParams.toString());
        const value=e.target.value;
        if(value==='default'){
            params.delete('sort')
        }
        else{
            params.set('sort',value);
        }
        router.push(`/?${params.toString()}`);

    }
    function handleCategoryChange(e){
        const params=new URLSearchParams(searchParams.toString());
        const value=e.target.value;
        if(value==='all'){
            params.delete("category")
        }
        else{
            params.set("category",value);
        }
        router.push(`/?${params.toString()}`);
    }
    //get cuurent value from url
    const currentCategory = searchParams.get('category') || 'all';
  const currentSort = searchParams.get('sort') || 'default';
  return (
  <div className="max-w-7xl h-auto  mx-auto p-3 py-5 sm:flex justify-between items-center    ">
    <div className="mb-1 sm:mb-0">
      <label htmlFor="filter" className="form-label text-black" >
        Filter
      </label>
      <br />
      <select name="category" id="filter" className=" sm:w-75 w-full  px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-grey-500"
       value={currentCategory}
       onChange={handleCategoryChange}
       >
        
          <option value="all" className="text-black">All </option>
          <option value="men's clothing"className="text-black" >Men's Clothing</option>
          <option value="women's clothing"className="text-black">Women's Clothing</option>
          <option value="jewelery"className="text-black">Jewelery</option>
          <option value="electronics"className="text-black">Electronics</option>
      </select>
    </div>
    <div>
      <label htmlFor="sort-filter" className="form-label text-black" >
        Sort By
      </label>
      <br />
      <select name="sort" id="sort-filter" className="sm:w-75 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-grey-500"
      value={currentSort}
      onChange={handleSortChange}>
         <option value="default">Default</option>
                <option value="price-low" className="text-black">Price - Low to High</option>
                <option value="price-high" className="text-black">Price - High to Low</option>
                <option value="rating" className="text-black">Highest Rated</option>
                <option value="name-asc" className="text-black">Name - A to Z</option>
                <option value="name-desc" className="text-black">Name - Z to A</option>
      </select>
    </div>
        

     </div>
  )
}

export default Filter