'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import React, { useState } from 'react'
import { FiMinusCircle } from "react-icons/fi";
import { GoPlusCircle } from "react-icons/go";

import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { addQuantity, addToCart, reduceQuantity, removeFromCart } from '../redux/slice'
import dynamic from 'next/dynamic'

const DeleteModal =dynamic(()=>import('@/components/DeleteModal'))



function page() {
 const router =useRouter()
 const dispatch=useDispatch();

 
  const [openModal, setOpenModal] = useState(false);
const [deleteId, setDeleteId] = useState(null);
const cart = useSelector((state) => state.users);


function handleSubtotal() {
  return cart.reduce((total, item) => {
    return total + item.price * item.itemQuantity;
  }, 0.00);
}
function handleTaxtotal() {
  return cart.reduce((total, item) => {
    return total + item.tax * item.itemQuantity;
  }, 0.00);
}
var shippingCharge=50;
function Total(){
  
   return handleSubtotal()-handleTaxtotal()-shippingCharge;
}




function handleDelete() {
  dispatch(removeFromCart(deleteId)); // ✅ Redux update
  setOpenModal(false);                // ✅ Modal close
  setDeleteId(null);                  // ✅ Reset
}

 function handleRating(rate, count) {
     const fullStars = Math.floor(rate);
     const hasHalfStar = rate % 1 >= 0.5;
     const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
 
     return (
       <div className="flex items-center gap-1">
       
         {[...Array(fullStars)].map((_, i) => (
           <FaStar key={`full-${i}`} className="text-yellow-400" />
         ))}
 
       
         {hasHalfStar && (
           <FaStarHalfAlt className="text-yellow-400" />
         )}
 
       
         {[...Array(emptyStars)].map((_, i) => (
           <FaRegStar
             key={`empty-${i}`}
             className="text-gray-300"
           />
         ))}
 
         
         <span className="text-gray-600 text-sm ml-1">
           ({count})
         </span>
       </div>
     );
   }

 
  return (
    <>

     <Header/>

    
    <div className="max-w-7xl mx-auto px-3 py-6 ">
  <div className="grid grid-cols-12 gap-4">
    <div className="col-span-12 lg:col-span-8 border rounded-md p-4 bg-white">
  <h2 className="text-lg font-semibold mb-4 text-black">Cart Items</h2>

  {/* Cart Item */}
  { cart.length==0 ?<h2  className='text-bold text-4xl  text-center pt-5 text-black'>
    No Items In the Cart 
  </h2>: 
    cart.map((item,index)=>(
      
        <div className="border rounded-md p-4 mb-4 cursor-pointer" key={index}
      onClick={() => router.push(`/products/${item?.id}`)}>
    <div className="flex flex-col sm:flex-row gap-4">
      
      {/* Image */}
      <div className="w-20 h-20 border rounded-md flex items-center justify-center">
        <Image
          src={item?.image}
          width={60}
          height={60}
          alt="product"
          className="object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-800 line-clamp-1">
         {item?.title}
        </p>
        <p className="text-sm text-gray-500 line-clamp-1">
         {item?.description}
        </p>

        <div className="flex items-center gap-2 mt-2 text-sm">
          <span className="bg-gray-200 px-2 py-0.5 rounded text-black">{item?.category}</span>
         {handleRating(item?.rating?.rate,item?.rating?.count)}
        </div>
      </div>

      {/* Price + Quantity */}
      <div className="flex flex-col items-end justify-between">
        <p className="font-semibold text-gray-800">${item?.price}</p>

        <div className="flex items-center gap-3 mt-3 ">
          <button
  className="border-2 rounded px-2 py-1 cursor-pointer"
  onClick={(e) => {
    e.stopPropagation();
    dispatch(reduceQuantity(item?.id));
  }}
>
  <FiMinusCircle className="text-gray-400" />
</button>

          <span className="font-medium  text-black">{item?.itemQuantity}</span>

          <button className="border-2 rounded px-2 py-1 cursor-pointer"
          onClick={(e)=>
          {
            e.stopPropagation();
            dispatch(addQuantity(item?.id))
          }
            
          } >
           
                 <GoPlusCircle className='text-gray-400' /> 
          </button>
        </div>

        <button
  className="text-sm text-red-500 mt-2 cursor-pointer"
  onClick={(e) => {
   e.stopPropagation()
    setDeleteId(item.id);   // ✅ id save
    setOpenModal(true);     // ✅ modal open
  }}
>
  Remove
</button>
      </div>


    </div>
  </div>
    ))
  }
 
  
</div>



<div className="col-span-12 lg:col-span-4">
  <div className="border rounded-md p-4 bg-white sticky top-24">
    <h2 className="text-lg font-semibold mb-4  text-black">Order Summary</h2>

    <div className="space-y-2 text-sm">
      <div className="flex justify-between">
        <span className='text-black'>Subtotal</span>
        <span className='text-black'> ${handleSubtotal()}</span>
      </div>
      <div className="flex justify-between">
        <span className='text-black'>Shipping</span>
        <span className='text-black'>${shippingCharge}</span>
      </div>
      <div className="flex justify-between">
        <span className='text-black'>Tax</span>
      <span className='text-black'>${handleTaxtotal()} </span>
      </div>

      <hr />

      <div className="flex justify-between font-semibold">
        <span className='text-black'>Total</span>
        <span className='text-black'>${Total()}</span>
      </div>
    </div>

    <button className="w-full bg-black text-white py-2 rounded mt-4 cursor-pointer">
      Proceed to Checkout
    </button>

    <button onClick={()=>router.push("/")} className="w-full border py-2 rounded mt-2 text-gray-400 cursor-pointer">
      Continue Shopping
    </button>
  </div>
</div>
</div>
</div>


     
    
 <Footer/>
 <DeleteModal
  isOpen={openModal}
  onClose={() => {
    setOpenModal(false);
    setDeleteId(null);
  }}
  onDelete={handleDelete}
/>
    </>
  )
}

export default page