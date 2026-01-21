'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'
import { FiMinusCircle } from "react-icons/fi";
import { GoPlusCircle } from "react-icons/go";
import { AiOutlineDelete } from "react-icons/ai";
function page() {
  return (
    <>
     <Header/>
    {/* <div className='max-w-7xl h-auto mx-auto p-2 py-5 '>
      <div className='grid grid-cols-12 gap-4'>
        <div className='sm:col-span-9  border-2 rounded-md p-7 '>
           <h5 className='text-semibold text-black'>
            Cart Items
           </h5>
           <div className='border-2 rounded-md  flex  align-center justify-between  my-3'>
            <div className='flex justify-start items-center '>
            <div className='border-2 inline-block  rounded-md p-2 m-2'>

             <Image

             src={"/image/mens2.png"}
             height={35}
             width={35}
             className='object-cover'
             alt='ddj'
             />
            </div>
            <div className='w-[430px]  '>
              <div>
               <p className=' text-gray-500 line-clamp-1 text-md '>  wkdnwdnwkd kqjnidqiodmqkd jjjjjjjjjjjjjjjjjjjjjqlodqkjdnoqdopqw</p>
               <p className=' text-gray-500 line-clamp-1  text-md '>  wkdnwdnwkd kqjnidqiodmqkd jjjjjjjjjjjjjjjjjjjjjqlodqkjdnoqdopqw</p>

              </div>
              <div>

               <div className='bg-gray-200 inline-block rounded-lg px-3'>
                <p className='text-black'>
                  categroy
                </p>
                
               </div>
               <span>⭐⭐⭐</span>
               <span className='text-gray-500'>3.5</span>
               <span className='text-gray-500'>(120)</span>
              </div>

            </div>

            </div>
            <div className='px-2'>
              <p className='text-semibold text-center'>$ 284.30</p>
              <div className='flex items-center  gap-3 '>

              <div className='border-2 p-2 bg-gray-400 inline-block rounded-lg'>
                <button><FiMinusCircle /> </button>
                

              </div>
              <p className='text-black '>2</p>
              <div className='border-2 p-2 bg-gray-400 inline-block rounded-lg'>
                 <button><GoPlusCircle /> </button>
              </div>
              <div className=''>
                <AiOutlineDelete  className='bg-red-500 rounded-md  w-[25px] h-[25px]'/> 
              </div>
              </div>
            </div>
            
           </div>
           
        </div>
        <div className='col-span-3 border-2 h-[300px]'>
 
        </div>
      </div>

    </div> */}
    <div className="max-w-7xl mx-auto px-3 py-6 ">
  <div className="grid grid-cols-12 gap-4">
    <div className="col-span-12 lg:col-span-8 border rounded-md p-4 bg-white">
  <h2 className="text-lg font-semibold mb-4 text-black">Cart Items</h2>

  {/* Cart Item */}
  <div className="border rounded-md p-4 mb-4">
    <div className="flex flex-col sm:flex-row gap-4">
      
      {/* Image */}
      <div className="w-20 h-20 border rounded-md flex items-center justify-center">
        <Image
          src="/image/mens2.png"
          width={60}
          height={60}
          alt="product"
          className="object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-800 line-clamp-1">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </p>
        <p className="text-sm text-gray-500 line-clamp-1">
          Perfect pack for everyday use and walks in the forest
        </p>

        <div className="flex items-center gap-2 mt-2 text-sm">
          <span className="bg-gray-200 px-2 py-0.5 rounded">Category</span>
          <span>⭐ 3.9</span>
          <span className="text-gray-500">(120)</span>
        </div>
      </div>

      {/* Price + Quantity */}
      <div className="flex flex-col items-end justify-between">
        <p className="font-semibold text-gray-800">$439.80</p>

        <div className="flex items-center gap-3 mt-3">
          <button className="border-2 rounded px-2 py-1">
            <FiMinusCircle />
          </button>

          <span className="font-medium  text-black">2</span>

          <button className="border-2 rounded px-2 py-1">
            <GoPlusCircle />
          </button>
        </div>

        <button className="text-sm text-red-500 mt-2">Remove</button>
      </div>

    </div>
  </div>
  <div className="border rounded-md p-4 mb-4">
    <div className="flex flex-col sm:flex-row gap-4">
      
      {/* Image */}
      <div className="w-20 h-20 border rounded-md flex items-center justify-center">
        <Image
          src="/image/mens2.png"
          width={60}
          height={60}
          alt="product"
          className="object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-800 line-clamp-1">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </p>
        <p className="text-sm text-gray-500 line-clamp-1">
          Perfect pack for everyday use and walks in the forest
        </p>

        <div className="flex items-center gap-2 mt-2 text-sm">
          <span className="bg-gray-200 px-2 py-0.5 rounded">Category</span>
          <span>⭐ 3.9</span>
          <span className="text-gray-500">(120)</span>
        </div>
      </div>

      {/* Price + Quantity */}
      <div className="flex flex-col items-end justify-between">
        <p className="font-semibold text-gray-800">$439.80</p>

        <div className="flex items-center gap-3 mt-3">
          <button className="border-2 rounded px-2 py-1">
            <FiMinusCircle />
          </button>

          <span className="font-medium  text-black">2</span>

          <button className="border-2 rounded px-2 py-1">
            <GoPlusCircle />
          </button>
        </div>

        <button className="text-sm text-red-500 mt-2">Remove</button>
      </div>

    </div>
  </div>
  <div className="border rounded-md p-4 mb-4">
    <div className="flex flex-col sm:flex-row gap-4">
      
      {/* Image */}
      <div className="w-20 h-20 border rounded-md flex items-center justify-center">
        <Image
          src="/image/mens2.png"
          width={60}
          height={60}
          alt="product"
          className="object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-800 line-clamp-1">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </p>
        <p className="text-sm text-gray-500 line-clamp-1">
          Perfect pack for everyday use and walks in the forest
        </p>

        <div className="flex items-center gap-2 mt-2 text-sm">
          <span className="bg-gray-200 px-2 py-0.5 rounded">Category</span>
          <span>⭐ 3.9</span>
          <span className="text-gray-500">(120)</span>
        </div>
      </div>

      {/* Price + Quantity */}
      <div className="flex flex-col items-end justify-between">
        <p className="font-semibold text-gray-800">$439.80</p>

        <div className="flex items-center gap-3 mt-3">
          <button className="border-2 rounded px-2 py-1">
            <FiMinusCircle />
          </button>

          <span className="font-medium  text-black">2</span>

          <button className="border-2 rounded px-2 py-1">
            <GoPlusCircle />
          </button>
        </div>

        <button className="text-sm text-red-500 mt-2">Remove</button>
      </div>

    </div>
  </div>
</div>


<div className="col-span-12 lg:col-span-4">
  <div className="border rounded-md p-4 bg-white sticky top-24">
    <h2 className="text-lg font-semibold mb-4  text-black">Order Summary</h2>

    <div className="space-y-2 text-sm">
      <div className="flex justify-between">
        <span className='text-black'>Subtotal</span>
        <span className='text-black'> $798.04</span>
      </div>
      <div className="flex justify-between">
        <span className='text-black'>Shipping</span>
        <span className='text-black'>$0.00</span>
      </div>
      <div className="flex justify-between">
        <span className='text-black'>Tax</span>
        <span className='text-black'>$63.84</span>
      </div>

      <hr />

      <div className="flex justify-between font-semibold">
        <span className='text-black'>Total</span>
        <span className='text-black'>$861.88</span>
      </div>
    </div>

    <button className="w-full bg-black text-white py-2 rounded mt-4">
      Proceed to Checkout
    </button>

    <button className="w-full border py-2 rounded mt-2 text-gray-400">
      Continue Shopping
    </button>
  </div>
</div>
</div>
</div>


     
    
 <Footer/>
    </>
  )
}

export default page