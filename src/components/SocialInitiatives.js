import React from 'react'
import social1 from '../assets/social1.webp'
import social2 from '../assets/social2.webp'
import social3 from '../assets/social3.webp'
import social4 from '../assets/social4.webp'

const SocialInitiatives = () => {
  return (
    <div className='pt-12'>
        <div className='text-5xl flex justify-center font-bold   text-[#FF9900]'> Social Initiatives</div>
        <div className='px-[200px] py-12 grid  gap-5'>
            <div className="col-span-2 row-span-1">
            <div className="grid-cols-2 grid gap-5">
                <div className = "flex rounded-md h-96">
                <img  alt = "b1" src={social1} className='h-full w-full aspect-video'/>
                </div>
                <div className = "flex rounded-md h-96 ">
                <img src = {social2} alt= "b2" className='w-full aspect-video'/>
                </div>
            </div>
            </div>
            <div className="col-span-2 row-span-1">
            <div className="grid-cols-2 grid gap-5">
                <div className = "flex rounded-md h-96">
                <img  alt = "b1" src={social3} className='h-full w-full aspect-video'/>
                </div>
                <div className = "flex rounded-md h-96 ">
                <img src = {social4} alt= "b2" className='w-full aspect-video'/>
                </div>
            </div>
            </div>
        </div>
        <div className='flex items-center justify-center px-[200px] '>
       <hr className='bg-black h-[2px]   justify-center w-full'/>
       </div>
    </div>
  )
}

export default SocialInitiatives