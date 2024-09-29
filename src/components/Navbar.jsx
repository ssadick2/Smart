/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import menu from '../assets/menu.png'
import clo from '../assets/clo.png'







const Navbar = () => {
  const [toggle,setToggle] = useState(false)
  const handleClick =()=> setToggle(!toggle)


  return (
    <div className='w-full h-[80px] bg-white border-b'>
        <div className='md:max-w-screen-xl max-w-[600px] m-auto w-full h-full flex justify-between'>
          <img 
          className='h-15 w-20'
          src='/src/assets/log.png'/>
          <div className='hidden md:flex items-center'>
          <ul className='flex gap-4'>
            <li>Home</li>
            <li>Support</li>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact US</li>
          </ul>
        </div>

        <div className='hidden md:flex'>
          <button className='flex justify-between items-center bg-transparent px-6 gap-2'> <img
          className='' 
          src='/src/assets/lock.png'/>Login</button>
          <button className='bg-[#20B486] px-4 py-2 m-4 rounded-md font-bold text-white'>Sign Up</button>
        </div>

        <div className='md:hidden' onClick={handleClick}>
              <img
              className='py-4' 
              src={toggle?clo:menu}/>
        </div>

        
        
        </div>

        <div className={toggle?'absolute z-10 p-4 bg-white w-full px-8 md:hidden': 'hidden'}>
          <ul>
            <li className='p-4 hover:bg-gray-500'>Home</li>
            <li className='p-4 hover:bg-gray-500'>Support</li>
            <li className='p-4 hover:bg-gray-500'>Pricing</li>
            <li className='p-4 hover:bg-gray-500'>About</li>
            <li className='p-4 hover:bg-gray-500'>Contact US</li>
              
          <div className='flex flex-col my-4 gap-4'>
          <button className='border rounded-md border-[#20B486] flex justify-center items-center bg-transparent px-6 gap-2 py-3'> <img
          className='' 
          src='/src/assets/lock.png'/>Login</button>
          <button className='bg-[#20B486] px-4 py-3 m-4 rounded-md font-bold text-white'>Sign Up</button>
        </div>
            
          </ul>
        </div>

        
        </div>
  )
}

export default Navbar;