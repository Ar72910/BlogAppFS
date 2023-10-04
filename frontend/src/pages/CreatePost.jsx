import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import {ImCross} from 'react-icons/im'

const CreatePost = () => {
    const [cat,setCat] = useState("");
    const [cats,setCats] = useState([]);

    const addCategory=()=>{
        let updatedCats= [...cats];
        updatedCats.push(cat);
        setCat("");
        setCats(updatedCats);
        

    }
    const deteCategory = (i)=>{
        let updatedCats = [...cats];
        updatedCats.splice(i);
        setCats(updatedCats);



        
        
    }
  return (
    <div>
        <Navbar/>
        <div className='px-6 md:px-[200px] mt-8'>
            <h1 className='font-bold md:text-2xl text-xl mt-8'>Create a post</h1>
            <form className='w-full flex flex-col space-y-4 md:space-x-8 mt-4'>
                <input className='px-4 py-2 border-black border-2 rounded-md mt-4 ' type="text" placeholder="Enter post title..." input/>
                 <input className=' py-2  mt-4 ' type="file" placeholder="Enter post title..." input/>

                 <div className='flex flex-col'>
                    <div className='flex items-center space-x-4 md:space-x-8'>
                        <input value={cat} onChange={(e)=>{setCat(e.target.value)}} className='px-4 py-2  border-black border-2 rounded-md mt-4' placeholder='Enter post category' type='text' />
                        <div onClick = {addCategory} className='bg-black text-white px-4 py-2 font-semibold cursor-pointer mt-3 '>Add</div>
                    </div>
                    {/* category names */}
                    <div className='flex px-4 mt-3'>
                        {cats?.map((c,i)=>(
                              <div key= {i} className=' flex justify-center items-ceter space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md mt-3'>
                            <p>{c}</p>
                            <p onClick={()=>deteCategory(i)} className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'><ImCross/></p>
                        </div>


                        ))}
                

                        <div className=' flex justify-center items-ceter space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md mt-3'>
                            <p>Tech</p>
                            <p className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'><ImCross/></p>
                        </div>


                    </div>
                    


                 </div>

                <textarea rows={15} cols={30} className='px-4 py-2 outline-none'placeholder='Enter post description'></textarea>
                <div className='flex'>
                <button className=' bg-black w-full md:w-[20%] mx-auto text-white rounded-md font-semibold px-4 py-2 md:text-xl text-lg'>Create</button>
                </div>
                {/* <button>Create</button> */}


            </form>
        </div>
    </div>
  )
}

export default CreatePost