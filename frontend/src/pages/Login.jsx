import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div className='flex items-center justify-between px-6 md:px-[200px] py-4' >
       <h1 className='text-lg md:text-xl font-extrabold'><Link to="/">Blog Market</Link></h1>
       <h3><Link to="/register">Register</Link></h3>
    </div>
    <div className= "w-full flex justify-center items-center h-[70vh]">
      <div className='flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%] '>
        <h1 className='text-xl font-bold text-left '>Login to your account</h1>
        <input className='w-full p-4 h-9 font-bold border-2' type='email' placeholder='Enter your Email'/>
        <input className='w-full p-4 h-9 font-bold border-2' type='password' placeholder='Enter your Password'/>
        <button className='w-full p-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-green-900'>Login </button>

         <div className='flex justify-center items-center space-x-3'>
         <p>New here?</p>
         <p className='text-gray-500 hover:text-red-800 font-bold'><Link to="/register">Register</Link></p>

        </div> 
      
      </div>
      </div>
      </>
  )
}

export default Login