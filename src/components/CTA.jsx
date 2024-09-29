/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import mjli from '../assets/mjli.jpg';

const CTA = () => {
  return (
    <div className='w-full bg-[#E9F8F3] py-24'>
        <div className='md:max-w-screen-xl m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center'>
        <img className='w-[650px] mx-auto '
            src={mjli}/>

            <div className=''>
                <h1 className='py-2 text-3xl font-semibold'>Welcome to the Future
                    let's bridge the Gap together 
                </h1>
                <p className='py-2 text-lg text-gray-600'>Your sight is your wealth, help us keep yours Healthy </p>

                <button className='max-[780px]:w-full bg-[#20B486] my-4 px-8 py-5 rounded-md font-bold text-white'>Sign Up</button>
            </div>

            

        </div>

    </div>
  
  )
}

export default CTA