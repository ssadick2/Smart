/* eslint-disable no-unused-vars */
import React from 'react'
import Card from './Card'
import Slider from "react-slick"


const Programs = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: false,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        
        
      };
  return (
    <div className='w-full bg-[#E9F8F3B2] py-32'>
        <div className='md:max-w-screen-xl m-auto max-w-[600px]'>
          <h1 className='py-3 text-3xl font-bold'>Most Popular <span className='text-[#20B486]'>Programs</span></h1>
          <p className='text-[#6D737A] '>Offering variety of Programs & services.</p>

            <Slider {...settings}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                
            </Slider>

            </div>
        </div>
  )
}

export default Programs