import React from 'react'
import avatar from '../assets/images/Avatar.svg'
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa6";
const Testimonial = () => {
  return (
    <div className='mt-15 mb-20'>
      <div>
       <h1 className='text-[26px] font-semibold text-center text-gray-700 '>What our readers are saying</h1>
       <h5 className='text-center text-gray-500 text-sm mt-2'>Our Testimonial</h5>
      </div>
      <div className='flex justify-around items-center mt-10 mx-auto'>
        <div className='flex justify-center flex-col items-center ml-40'>
            <img src={avatar} alt="" className='' />
            <p>Mr. Joshua Alegbua</p>
            <p className='text-lime-500'>C.E.O Of Whales Coollection </p>
        </div>
        <div className='w-[50%] mr-50'>
          <p>"This online bookstore is a dream come true for book lovers! The selection is vast, the prices are great, and the ordering process is seamless. Shipping is always fast, and the customer service is outstanding. Whether I'm looking for new releases, rare finds, or digital editions, I know I can count on this store. Highly recommend!"</p> 
        </div>
      </div>
    </div>
  )
}

export default Testimonial
