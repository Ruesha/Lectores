import React from 'react'
import linkedin from '../assets/images/linkedin.png'
import twitter from '../assets/images/twitter.png'
import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/social.png'
import Logo from '../assets/images/lectores2.png'

const Footer = () => {
  return (
    <div>
      <footer class="bg-gray-900 text-white py-12 px-4 tracking-wide">
      <div className=' mb-2 flex justify-between '>
        <div className='flex flex-col gap-5'><img src={Logo} alt="" className='w-30'/>
        <div class="text-center">
        <h6 class="text-lg text-gray-300">Stay connected with us:</h6>
<div class="flex justify-center gap-4 mt-4 mb-3.5">
  <img src={linkedin} alt="" className='w-10' />
  <img src={twitter} alt=""  className='w-10'/>
  <img src={facebook} alt="" className='w-10' />
  <img src={instagram} alt="" className='w-10' />
</div>

        <p class="text-base text-gray-300">© Lectores. All rights reserved.</p>
      </div>
       </div>
        <div className='flex flex-col float-right w-[45%]'>
          <h1 className='text-[25px] font-semibold'>Get over a 100 free books</h1>
          <p className='mt-4'>Get access by subcribing to our newsletter. Jump start your book reading by quickly check through the popular book categories...
          </p>
          <div className='mt-10'>
            <input type="text" placeholder="Enter your email....." className='bg-white text-black px-2 w-[300px] py-3 rounded-l-sm'/>
            <button className='px-2 py-[11.42px] bg-lime-400 rounded-r-sm hover:bg-transparent border border-lime-400 text-black hover:text-lime-400 transition-all duration-300'>Get free books</button>
          </div>
        </div>
      </div> 
    
    </footer>
    </div>
  )
}

export default Footer
