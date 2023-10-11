import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Menu = () => {
    const {user} = useContext(UserContext)
      
  return (
    <div className='bg-black w-[150px]  flex flex-col  absolute top-6 right-0 gap-3 p-3 rounded-md'>
        {!user && <h3 className='text-white text-lg hover:bg-gray-500  cursor-pointer w-full '>Login</h3>}
        {!user && <h3 className='text-white text-lg hover:bg-gray-500 cursor-pointer w-full '>Register</h3>}

        {user && <h3 className='text-white text-lg hover:bg-gray-500 w-full cursor-pointer'>Profile</h3>}
        {user && <h3 className='text-white text-lg hover:bg-gray-500 cursor-pointer w-full '>Write</h3>}
        {user && <h3 className='text-white text-lg hover:bg-gray-500 cursor-pointer w-full '>My Blogs</h3>}
        {user && <h3 className='text-white text-lg hover:bg-gray-500 cursor-pointer w-full '>Logout</h3>}

    </div>
  )
}

export default Menu