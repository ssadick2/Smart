/* eslint-disable no-unused-vars */
import React from 'react'
import sii from '../assets/sii.png';
import quotationMark from '../assets/quotationMark.png';

const Feedbackcard = () => {
  return (
    <div className='bg-white p-8 shadow-xl my-8 mx-2 rounded-3xl'>
      <div className='flex justify-between'>
        <div className='flex gap-4'>
            <img src={sii}/>
            <div>
              <h1>Asare Bediako</h1>
              <p>Human Resource</p>
            </div>
            
        </div>
        <img className='h-8' src={quotationMark}/>
        </div>
        <div className='py-8'>
          <h3 className='text-lg'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</h3>
        </div>
    </div>
  )
}

export default Feedbackcard