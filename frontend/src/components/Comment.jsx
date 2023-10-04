import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'

const Comment = () => {
  return (
      <div className='px-2 py-2 bg-gray-200 rounded-lg '>
                    <div className='flex items-center justify-between'>
                        <h3 className='font-bold text-gray-600'>@ayushraj</h3>
                  
                    <div className='flex space-x-4 justify-center items-center'>
                        <p className='text-gray-500'>16/6/23</p>
                        <p className='text-gray-500'>16.45</p>
                        <div className='flex items-center justify-center space-x-2 '>
                            <p><BiEdit/></p>
                            <p><MdDelete/></p>
                        </div>
                    </div>
                    </div>


                    {/* actual comment */}
                    <p className='p-4 mt-2'>Nice Information</p>
                    
                </div>
    

  )
}

export default Comment