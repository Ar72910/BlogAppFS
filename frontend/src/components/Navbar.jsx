import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'
import Menu from './Menu'
import { UserContext } from '../context/UserContext'

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [prompt, setPrompt] = useState("");
  const navigate = useNavigate()
  console.log(prompt);


  const showMenu = ()=>{
    menu?setMenu(false):setMenu(true);
  }
  const {user} = useContext(UserContext);
  console.log(user);
  return (
    <div className='flex items-center justify-between px-6 md:px-[200px] py-4' >
       <h1 className='text-lg md:text-xl font-extrabold'><Link to="/">Blog Market</Link></h1>
  


 {/* search bar*/}
    <div className='flex justify-center items-center space-x-2  '>
      <p  onClick = {()=>navigate(prompt?"?search="+prompt:navigate("/"))}className='cursor-pointer'><BsSearch/></p>
      <input onChange={(e)=>setPrompt(e.target.value)} className=' px-3 w-[200px] rounded-md' placeholder='Search a post' type ="text"></input>
    </div>

       {/* login and register */}
       <div className=' hidden md:flex items-center justify-center space-x-2 md:space-x-4'>
        {user? <h3><Link to="/write">Write </Link></h3>:<h3><Link to="/login">Login</Link></h3>}
       {user? <div  onClick= {showMenu}  className='relative'>
        <p className='cursor-pointer '><FaBars/></p>
        {menu && <Menu/>}
        </div>:<h3><Link to="/register">Register</Link></h3>}
      </div>

      <div onClick= {showMenu} className='md:hidden text-lg right-6 relative'>
        <p className='cursor-pointer relative '  ><FaBars/></p>
        {menu&&<Menu/>}

      </div>
    </div>
  )
}

export default Navbar