/* eslint-disable no-unused-vars */
import React from 'react'
import CategoryCard from './CategoryCard'
import { BsVectorPen } from 'react-icons/bs'
import { TiHtml5 } from 'react-icons/ti'

const Categories = () => {
  return (
    <div className='w-full bg-[#F0FBF7] py-24'>
        <div className='md:max-w-screen-xl m-auto grid max-w-[600px]'>
        <h1 className='md:leading-[72px] text-3xl font-bold'>
                   Most <span className='text-[#20B486]'>Popular</span> Categories 
                </h1>
                <p className=' text-lg text-gray-600'>Your sight is your wealth, help us keep yours Healthy </p>

                <div className='grid lg:grid-cols-4 grid-cols-2 py-12 gap-4'>
                    <CategoryCard 
                    icons={<BsVectorPen size={30}/>}
                    title={'Design'}
                    />
                    <CategoryCard 
                    icons={<TiHtml5 size={30}/>}
                    title={'Development'}
                    />
                    <CategoryCard 
                    icons={<BsVectorPen size={30}/>}
                    title={'Design'}
                    />
                    <CategoryCard 
                    icons={<TiHtml5 size={30}/>}
                    title={'Development'}
                    />

                    <CategoryCard 
                    icons={<TiHtml5 size={30}/>}
                    title={'Development'}
                    />
                    <CategoryCard 
                    icons={<BsVectorPen size={30}/>}
                    title={'Design'}
                    />
                    <CategoryCard 
                    icons={<TiHtml5 size={30}/>}
                    title={'Development'}
                    />
                    <CategoryCard 
                    icons={<BsVectorPen size={30}/>}
                    title={'Design'}
                    />

                    <CategoryCard 
                    icons={<BsVectorPen size={30}/>}
                    title={'Design'}
                    />
                    <CategoryCard 
                    icons={<TiHtml5 size={30}/>}
                    title={'Development'}
                    />
                    <CategoryCard 
                    icons={<BsVectorPen size={30}/>}
                    title={'Design'}
                    />
                    <CategoryCard 
                    icons={<TiHtml5 size={30}/>}
                    title={'Development'}
                    />
                </div>

        </div>
        </div>
  )
}

export default Categories