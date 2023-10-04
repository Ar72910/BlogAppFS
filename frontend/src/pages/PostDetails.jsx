import React from 'react'
import Navbar from '../components/Navbar'
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import Comment from '../components/Comment'

const PostDetails = () => {
  return (
    <div>    
        <Navbar/>
        <div className='px-8 md:px-[200px] mt-8'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-bold text-black md:text-3xl'>10 Users of Artificial Intelligence in Day to Day Life</h1>
                <div className='flex items-center justify-center space-x-2 '>
                    <p><BiEdit/></p>
                    <p><MdDelete/></p>
                </div>
            </div>

            <div className='flex items-center justify-between mt-2 md:mt-4'>
            <div className='flex space-x-2'>
                <p>16/6/23 </p>
                <p>16.45</p>
            </div>
            </div>

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUMV_54RxibIoY7I3kZWnNIAiZjz9WDixXUA&usqp=CAU" className='w-full mx-auto mt-8' alt=''/>
            <p className='mx-auto mt-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Doloremque cumque iure non molestiae nemo enim corrupti.
                  Iure recusandae enim excepturi harum quod aliquid doloribus
                   odit aliquam id, obcaecati natus magni quia quo. Itaque quia 
                   natus debitis quidem quasi. Ratione illum quia inventore adipisci
                    tempora fuga harum aspernatur sunt maiores, libero ipsum
                     quo asperiores in, rem, ducimus corporis. Aliquam, eos 
                     voluptate, cupiditate nihil quia 
                     repellat corporis quidem dolorem provident sit commodi.
            </p>
            <div className='flex items-center mt-8 space-x-4 font-semibold'>
                <p>Categories:</p>
                <div className=' flex justify-center items-center space-x-2 '>
                    <div className='bg-gray-300 rounded-lg px-3 py-1'>Tech</div>
                    <div className='bg-gray-300 rounded-lg px-3 py-1'>Ai</div>
                </div>
            </div>


            <div className='flex flex-col mt-4 gap-y-3'>
                <h3 className='mt-6 mb-4 font-semibold'>Comments: </h3>
                {/* comment  */}
                 <Comment/> 
                <Comment/>
                <Comment/>
                <Comment/>

                
            </div>

            {/* write a comment */}
            <div className='flex flex-col mt-4 md:flex-row'>
                <input type="text" placeholder='Write a comment...' className=' border-gray-500 border-2 md:w-[90%] outline-none px-4 mt-4 md:mt-0'/>
                <button className='bg-black text-white  px-2 py-1 hover:bg-slate-400 hover:text-black' >Add Comment</button>
            </div>

        </div>
        

    </div>

  )
}

export default PostDetails