// import { useParams } from 'next/navigation'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import React, { use } from 'react'

 function page({params}) {
   const {id}= use(params)
  
  return (
    <div>
      <Header/>
        <div className='max-w-7xl mx-auto p-3 py-5 gap-2  '>

        <div className="grid grid-cols-2">
          <div className=' bg-yellow-300   '>
             <Image 
             src={"/image/women1.png"}
             alt={"image"}
             width={300}
             height={300}
          
             className='object-contain mx-auto'
             />
             
          </div>
          <div className='bg-red-400 border-8 '>
             <div className='bg-gray-600 p-2'>
              <p className='text-black bg-red-200'>product Category</p>
             </div>
          </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default page