/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import yui from '../assets/yui.jpg';
import { MdOutlineHouse } from "react-icons/md";
import { PiUsersThreeBold } from "react-icons/pi";
import { LuConstruction } from "react-icons/lu";
import { TfiPrinter } from "react-icons/tfi";


const Achievement = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className='md:max-w-screen-xl m-auto grid md:grid-cols-2 max-w-[600px]'>

            <div className='flex flex-col justify-start'>
                <h1 className='md:leading-[72px] text-3xl font-bold'>
                    Our <span className='text-[#20B486]'>Achievements .</span> 
                </h1>
                <p className=' text-lg text-gray-600'>Your sight is your wealth, help us keep yours Healthy </p>


                <div className='grid grid-cols-2 '>
                  <div className='py-6 flex'>
                    <div className='p-4 bg-[#E9F8F3] rounded-xl'>
                    <MdOutlineHouse 
                    size={30}
                    style={{ color:'#1A906B' }}
                    />
                    </div>
                    <div className='px-3 '>
                      <h1 className='text-2xl font-semibold'>300</h1>
                      <p className='text-[#6D737A]'>Housing Units</p>
                    </div>

                  </div>
                  <div className='py-6 flex'>
                    <div className='p-4 bg-[#FFFAF5] rounded-xl'>
                        <PiUsersThreeBold 
                    size={30}
                    style={{ color:'#FFC27A' }}
                    />
                    </div>
                    <div className='px-3 '>
                      <h1 className='text-2xl font-semibold'>300 +</h1>
                      <p className='text-[#6D737A]'>Customers</p>
                    </div>

                  </div>
                  <div className='py-6 flex'>
                    <div className='p-4 bg-[#FFEEF0] rounded-xl'>
                    <LuConstruction 
                    size={30}
                    style={{ color:'#ED4459' }}
                    />
                    </div>
                    <div className='px-3 '>
                      <h1 className='text-2xl font-semibold'>1,000</h1>
                      <p className='text-[#6D737A]'>Construction Services</p>
                    </div>

                  </div>
                  <div className='py-6 flex'>
                    <div className='p-4 bg-[#E9F8F3] rounded-xl'>
                    <TfiPrinter
                    size={30}
                    style={{ color:'#1A906B' }}
                    />
                    </div>
                    <div className='px-3 '>
                      <h1 className='text-2xl font-semibold'>2,500</h1>
                      <p className='text-[#6D737A]'>Repair & Maintenance</p>
                    </div>

                  </div>

                </div>

                
            </div>


          
            <img className='m-auto md:order-last order-first'
            src={yui}/>

        </div>

    </div>
  )
}

export default Achievement