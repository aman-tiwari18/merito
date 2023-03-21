import React from 'react'

const About = () => {
  return (
    <div className=''>
        <hr className='h-2.5 bg-[#FF9900]'/>
        <div className='text-5xl flex justify-center font-bold py-10 text-[#FF9900]'>About Us</div>
        <div className='flex justify-center items-center py-5 text-lg text-gray-500 px-2'>
            <p>Career Corner is a career services platform founded by COEP and IIM Ahmedabad alumnus with the goal of equipping students and professionals for their career development. Since its inception in 2011 as DISHA, Career Corner has assisted over 50,000 students and professionals in choosing the RIGHT career for them. </p>
        </div>
        <div className='flex justify-center items-center text-lg text-gray-500 px-2 pb-10'>
            <p>We have launched career-oriented programs alongside social initiatives geared towards helping people gain professional excellence.</p>
        </div>
        <hr className='bg-black h-[2px]'/>
    </div>
  )
}

export default About