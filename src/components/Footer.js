import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black flex items-center text-white font-bold px-[200px] py-10'>
        <div className='flex text-gray-400 font-normal gap-28'>
            <div className='flex flex-col gap-2 font-semibold'>
                <div className='text-white  text-lg py-4'>CONTACT US</div>
                <div>Phone</div>
                <div>+91 72766-30705</div>
                <div>Email</div>
                <div>admin@merito.in</div>
                <div>Address</div>
                <div>Baner, Pune, Maharashtra 411045</div>
            </div>
            <div className='flex flex-col gap-2 font-semibold'>
                <div className='text-white  py-4 text-lg'>CAREER CORNER</div>
                <div className='hover:text-[#FF9900]'>Our Programs</div>
                <div className='hover:text-[#FF9900]'>Our Story</div>
                <div className='hover:text-[#FF9900]'>Our Brands</div>
                <div className='hover:text-[#FF9900]'>Social Initiatives</div>
                <div className='hover:text-[#FF9900]'>Contact Us</div>
            </div>
            <div className='flex flex-col gap-2 font-semibold'>
                <div className='text-white  py-4 text-lg' >OUR BRANDS</div>
                <div className='hover:text-[#FF9900]'>Merito.ai</div>
                <div className='hover:text-[#FF9900]'>Merito Academy</div>
                <div className='hover:text-[#FF9900]'>Helppad</div>
            </div>  
        </div>
        {/* <hr className='h-[10px] pb-2 bg-white'/> */}
    </div>
  )
}

export default Footer