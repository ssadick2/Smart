/* eslint-disable no-unused-vars */
import React from 'react'
import Be from '../assets/Be.png';
import bm from '../assets/bm.jpg';
import ja from '../assets/ja.png';
import ty from '../assets/ty.jpg';


const Companies = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className='md:max-w-screen-xl m-auto max-w-[600px]'>

            <h1 className='py-5 text-center text-2xl font-bold text-[#536E96]'>Created to tend to your needs </h1>
            <p className='py-3 text-center text-xl text-[#536E96]'>Leading Companies use this platform for all their issues</p>
            

            <div className='flex justify-center md:gap-8'>
                <img
                className='size-24' 
                src={Be}/>
                <img 
                className='size-24'
                src={bm}/>
                <img 
                className='size-24'
                src={ja}/>

                <img
                className='size-24' 
                src={ty}/>
            </div>
            </div>
        </div>
  )
}

export default Companies