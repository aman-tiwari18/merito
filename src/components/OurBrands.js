import React from 'react'

import brand1 from '../assets/brand1.webp'
import brand2 from '../assets/brand2.webp'
const OurBrands = () => {
  return (
    <div className='pt-12'>
        <div className='text-5xl flex justify-center font-bold text-[#FF9900]'> Our Brands</div>
        <div className='px-[200px] py-12'>
        <div className="col-span-2 row-span-1">
          <div className="grid-cols-2 grid gap-4">
            <div className = "flex rounded-md h-96">
              <img  alt = "b1" src={brand1} className='h-full w-full aspect-video'/>
            </div>
            <div className = "flex rounded-md h-96 ">
              <img src = {brand2} alt= "b2" className='w-full aspect-video'/>
            </div>
          </div>
        </div>
        </div>
        <div className='flex items-center justify-center  px-[200px] '>
       <hr className='bg-black h-[2px]   justify-center w-full'/>
       </div>
        
    </div>
  )
}

export default OurBrands