import React from 'react'

const Impact = () => {
  return (
    <div className=' pt-12 px-[200px]'>
        <div>
            <div className='text-5xl flex justify-center font-bold  pb-2 text-[#FF9900]'> Our Impact</div>
        </div>
        <div className='flex justify-around px-8 py-12'>
                <div className='flex flex-col'>
                    <div className='text-7xl flex justify-center font-bold py-2 text-[#FF9900]'>300</div>
                    <div className='text-xl text-gray-600'>Career Guidance Sessions</div>
                </div>
                <div className='flex flex-col' > 
                    <div className='text-7xl flex justify-center font-bold py-2 text-[#FF9900]'>10</div>
                    <div className='text-xl text-gray-600'>Years in Action</div>
                </div>
                <div className='flex flex-col'>
                    <div className='text-7xl flex justify-center font-bold py-2 text-[#FF9900]'>50,000</div>
                    <div className='text-xl text-gray-600'>Students & Professionals</div>
                </div>
        </div>
       <div className='flex items-center justify-center  '>
       <hr className='bg-black h-[2px]   justify-center w-full'/>
       </div>
    </div>
  )
}

export default Impact