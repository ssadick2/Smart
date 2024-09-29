/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import serd from '../assets/serd.jpg';
import { AiOutlineSearch } from 'react-icons/ai';

const Hero = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className='md:max-w-screen-xl m-auto grid md:grid-cols-2 max-w-[600px]'>

            <div className='flex flex-col justify-start gap-4'>
                <p className='py-2 text-2xl text-[#20B486] font-medium'>LET'S DO IT !!!.</p>
                <h1 className='md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold'>Welcome to the Future
                    let's bridge the Gap together
                    Edofy 
                </h1>
                <p className='py-2 text-lg text-gray-600'>Your sight is your wealth, help us keep yours Healthy </p>

                <form className='bg-white border max-w-[700px] p-4 input-box-shadow rounded-md flex justify-between'>
                    <input
                    className='bg-white'
                    type='text'
                    placeholder='How may we be of help ?'
                    />
                    <button>
                        <AiOutlineSearch
                        size={20}
                        className='icon'
                        style={{color:'#000' }}
                        />
                    </button>
                </form>
            </div>

            <img className='md:order-last order-first'
            src={serd}/>

        </div>

    </div>
  )
}

export default Hero