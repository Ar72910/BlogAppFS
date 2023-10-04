import React from 'react'
import Navbar from '../components/Navbar'
import ProfilePosts from '../components/ProfilePosts'


const Profile = () => {
  return (
    <>
    <Navbar/>
    <div className='px-8 md:px-[200px] mt-8 flex  md:flex-row flex-col-reverse md:space-x-6 md:items-start '>
        <div className='flex flex-col md:w-[70%] w-full items-start'>
            <h1 className='text-xl font-bold mb-4'>Your Posts: </h1>
            <ProfilePosts/> 
            <ProfilePosts/> 
            <ProfilePosts/> 
            <ProfilePosts/> 

        </div>
        <div className=' md:sticky md:top-16 flex justify-start md:justify-end items-start md:w-[30%] w-full md:items-end'>
            <div className='flex flex-col space-y-4 '>
                 <h1 className='text-xl font-bold mb-4'>Profile </h1>
              <input className='outline-none px-4 py-2 text-gray-500' placeholder='Your username'type="text"/>
              <input className='outline-none px-4 py-2 text-gray-500' placeholder='Your email'type="emai"/>
              <input className='outline-none px-4 py-2 text-gray-500' placeholder='Your username'type="paword"/>
              <div className='flex items-center space-x-4 mt-8'>
                <button className='text-white bg-black px-3 rounded-md py-1 hover:text-black hover:bg-gray-400'>Update</button>
                <button className='text-white bg-black px-3 py-1 rounded-md hover:text-black hover:bg-gray-400'>Delete</button>
            </div>
             
              </div>
        </div>
    </div>
    </>
  )
}

export default Profile