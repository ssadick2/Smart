/* eslint-disable no-unused-vars */
import React from 'react'
import { FaBehance, FaDribbble, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className='md:max-w-screen-xl m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2 max-w-[600px]'>
            <div className='col-span-2'>
            <img 
          className='h-15 w-20'
          src='/src/assets/log.png'/>
          <h3 className='text-2xl font-bold mt-10'>Contact Us</h3>
          <h3 className='py-2 text-[#6D737A]'>+233 265004174</h3>
          <h3 className='py-2 text-[#6D737A]'>vhvbvihbvhh kCBIOrbhrihvrr ijgjgjjgjvvmn</h3>
          <h3 className='py-2 text-[#6D737A]'>Email: email@mail.com</h3>
          <div className='flex gap-4 py-4'>
          <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaFacebookF size={20} style={{ color:'#4DC39E' }}/></div>
          <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaDribbble size={20} style={{ color:'#4DC39E' }}/></div>
          <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaLinkedinIn size={20} style={{ color:'#4DC39E' }}/></div>
          <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaInstagram size={20} style={{ color:'#4DC39E' }}/></div>
          <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaBehance size={20} style={{ color:'#4DC39E' }}/></div>
          </div> 

            </div>

            <div className=''>
                <h3 className='text-2xl font-bold'>Explore</h3>
                <ul className='py-6 text-[#6D737A]'>
                    <li className='py-2'>Home</li>
                    <li className='py-2'>Support</li>
                    <li className='py-2'>Pricing</li>
                    <li className='py-2'>About</li>
                    <li className='py-2'>Contact Us</li>
                </ul>
            </div>

            <div className=''>
                <h3 className='text-2xl font-bold'>Category</h3>
                <ul className='py-6 text-[#6D737A]'>
                    <li className='py-2'>Design</li>
                    <li className='py-2'>Development</li>
                    <li className='py-2'>Marketing</li>
                    <li className='py-2'>Lifestyle</li>
                    <li className='py-2'>Photography</li>
                    <li className='py-2'>Music</li>
                </ul>
            </div>
            <div className='max-[780px]:col-span-2'>
                <h3 className='text-2xl font-bold'>Subscribe</h3>
                <h3 className='py-2 text-[#6D737A]'>vhvbvihbvhh kCBIOrbhrihvrr ijgjgjjgjvvmn</h3>
                <form className='py-4'>
                    <input className='bg-[#F2F3F4] p-4 w-full rounded'
                    placeholder='Email here'
                    />
                    <button className='max-[780px]:w-full bg-[#20B486] my-4 px-5 py-3 rounded-md font-medium text-white'>Subscribe Now</button>
                </form>
            </div>

            </div>
        </div>
  )
}

export default Footer