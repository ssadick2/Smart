/* eslint-disable no-unused-vars */

import React from 'react'
import Be from '../assets/Be.png';
import StarRating from './StarRating';

const Card = () => {
  return (
    <div className='bg-white drop-shadow-md overflow-hidden rounded-2xl mr-4 my-4'>
        <img src={Be}
        className='h-40 w-full object-cover'/>

        <div className='p-5 border border-b'>
            <h1 className='py-2'>Bentley Car Parts </h1>
            <StarRating rating={3}/>
        </div>
        <h3 className='p-5 text-xl'>$500</h3>

        <div className='absolute top-0 bg-[#0f0f] m-3 px-2 py-1 rounded font-bold'>
            AWD
        </div>
    </div>
  )
}

export default Card