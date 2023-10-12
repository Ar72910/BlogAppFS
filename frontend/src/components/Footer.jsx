import React from 'react'

const Footer = () => {
  return (
    <div className='relative top-[60px] '>
    <div className='mt-8 w-full bg-black px-8 md:px-[500px] flex md:flex-row items-start space-y-4 flex-col justify-between text-sm md:text-md py-8 md:space-x-6 '>
      <div className='flex flex-col text-white'>
        <p>Featured Blogs</p>
        <p>Most viewed</p>
        <p>Readers Choice</p>

      </div>

      <div className='flex flex-col text-white'>
        <p>Forum</p>
        <p>Support</p>
        <p>Recent Post</p>

      </div>


      <div className='flex flex-col text-white'>
        <p>Privacy Policy</p>
        <p>About us</p>
        <p>Terms & Conditions</p>
        <p>Terms of Service</p>

      </div>


      </div> 
      <p className='py-2 pb-2 text-center text-white bg-black'>All rights reserved @Blog Market 2023</p>
      </div>
  )
}

export default Footer