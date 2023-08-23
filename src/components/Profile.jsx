import React from 'react'
import Manoj from '../assets/manoj.jpg'
import Typed from 'react-typed';
 
export default function profile() {
  return (
    <div className=' w-full py-16 px-4  bg-white dark:bg-[#0f172a] text-black dark:text-white'>
        <div className='max-w-[1240px] mx-auto grid justify-center items-center md:grid-cols-2 '>
            <img className='md:max-w-[400px] mx-auto  my-6 rounded-full lg:ml-[230px]' src={Manoj} alt="/"  />
       
        <div className=' flex flex-col justify-center items-center md:pl-[16px]'>
            <p className='text-2xl'>Hello,I'm</p>
            <h1 className='text-5xl font-bold-md pt-1'>MANOJ PM</h1>
            <Typed className='text-4xl  font-bold-md pt-3'
            strings={["Fullstack Developer"]}
            typeSpeed={120}
            backSpeed={100}
            loop
            />
            <div className='flex pt-4 '>
            <button className='bg-transparent border-2 border-black dark:border-white text-black dark:text-white rounded-3xl py-2 px-3 mr-2'>Download CV</button>
            <button className='bg-black dark:bg-white  text-white dark:text-black dark:border-white rounded-3xl py-2 px-4 mr-2'>Contact info</button>
            </div>
           </div>
        </div>

    </div>
  )
}
