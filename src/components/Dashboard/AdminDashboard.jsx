import React from 'react'
import Header from '../others/Header'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full; p-10'>
      <Header/>
      <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form className='flex flex-wrap w-full   items-start justify-between'>
            <div className='w-1/2'>
            <div>
            <div> 
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
           <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
           </div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
            </div>
            <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
            </div>
            <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input  className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />
            </div>
            </div>
          
            <div className='w-2/5 flex flex-col items-start'>
            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea name="" id="" cols="30" rows="10">
            </textarea>
            </div>
            
            <button>Create task </button>
        </form>
      </div>
    </div>
  )
}

export default AdminDashboard
