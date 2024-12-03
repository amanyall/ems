import React from 'react'

const Tasklist = () => {
  return (
    <div id='tasklist'className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'> 
      <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'>
        <div className='flex justify-between px-3 mt-2 items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
          <h4 className='text-sm'>11 nov 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold px-3'>Make a youtube video</h2>
        <p className='text-sm mt-2 px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eos, id at perferendis ea nesciunt?</p>
      </div>
      <div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl'>
        <div className='flex justify-between px-3 mt-2 items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
          <h4 className='text-sm'>11 nov 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold px-3'>Make a youtube video</h2>
        <p className='text-sm mt-2 px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eos, id at perferendis ea nesciunt?</p>
      </div>
      <div className='flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl'>
        <div className='flex justify-between px-3 mt-2 items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
          <h4 className='text-sm'>11 nov 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold px-3'>Make a youtube video</h2>
        <p className='text-sm mt-2 px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eos, id at perferendis ea nesciunt?</p>
      </div>
      <div className='flex-shrink-0 h-full w-[300px] bg-purple-400 rounded-xl'>
        <div className='flex justify-between px-3 mt-2 items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
          <h4 className='text-sm'>11 nov 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold px-3'>Make a youtube video</h2>
        <p className='text-sm mt-2 px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eos, id at perferendis ea nesciunt?</p>
      </div>
     
    </div>
  )
}

export default Tasklist
