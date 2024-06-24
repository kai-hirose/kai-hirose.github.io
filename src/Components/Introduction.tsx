import React from 'react'

function Introduction() {
  return (
    <div className='flex justify-center flex-col items-center'>
      <div className='h-[120px] border-r-[1px]'></div>
      <div className='w-[5px] h-[5px] bg-blue-500 rounded-full'></div>
      <h2 className='mt-5 font-medium text-[13px] tracking-widest'> Hello! My name is</h2>
      <h2 className='text-[70px] font-bold tracking-widest'> Kai Hirose</h2>
    </div>
  )
}

export default Introduction
