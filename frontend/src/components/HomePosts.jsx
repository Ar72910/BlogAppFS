import React from 'react'

const HomePosts = () => {
  return (
    <div className=' w-full flex mt-8 space-x-6'>
      {/* left */}
      <div className='w-[35%] h-[200px] flex justify-center items-center'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUMV_54RxibIoY7I3kZWnNIAiZjz9WDixXUA&usqp=CAU" alt="Image of blog" className='h-full w-full object-cover pt-2'/>

      </div>
      {/* right */}
      <div className='flex flex-col w-[65%]'>
        <h1 className='text-xl font-bold md:mb-2 mb-1 md:text-2xl'>
          10 Users of Artificial Intelligence in Day to Day Life
        </h1>

      <div className='flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4'>
        <p>@ayushdev</p>
        <div className='flex space-x-2'>
          <p>
            16/6/23
          </p>
          <p>16.45</p>
        </div>
      </div>
      <p className='text-sm md:text-lg'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis at amet architecto et earum, voluptates aperiam eaque minus mollitia unde. Adipisci magnam numquam vitae praesentium recusandae deserunt alias dolore culpa, unde tempore provident, doloremque vel laudantium, reprehenderit minus harum deleniti ea. Vitae, aliquid distinctio? Doloribus dolor eveniet eaque unde nihil?
        </p>
      
      </div>
      
      </div>
  )
}

export default HomePosts