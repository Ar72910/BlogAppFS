import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import {URL} from '../url';
import axios from 'axios'

const Menu = () => {
  const {setUser} = useContext(UserContext);
    const {user} = useContext(UserContext);

    const handleLogout = async()=>{
      try{
        const res = await axios.get(URL +'/api/auth/logout',{withCredentials:true})
        console.log(res);
        setUser(null)

      }
      catch(err){
        console.log(err);

      }
    }
      
  return (
    <div className='bg-black w-[150px]  flex flex-col  absolute top-6 right-0 gap-3 p-3 rounded-md'>
        {!user && <h3 className='text-white text-lg hover:bg-gray-500  cursor-pointer w-full '>Login</h3>}
        {!user && <h3 className='text-white text-lg hover:bg-gray-500 cursor-pointer w-full '>Register</h3>}

        {user && <h3 className='text-white text-lg hover:bg-gray-500 w-full cursor-pointer'>Profile</h3>}
        {user && <h3 className='text-white text-lg hover:bg-gray-500 cursor-pointer w-full '>Write</h3>}
        {user && <h3 className='text-white text-lg hover:bg-gray-500 cursor-pointer w-full '>My Blogs</h3>}
        {user && <h3  onClick = {handleLogout} className='text-white text-lg hover:bg-gray-500 cursor-pointer w-full '>Logout</h3>}

    </div>
  )
}

export default Menu