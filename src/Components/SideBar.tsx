import React from 'react'
import { IoLogoLinkedin  } from "react-icons/io5";

function SideBar() {
  return (
    <div className='w-[90px] h-screen border-r-[1px] fixed flex flex-col justify-around items-center'>
      <h2 className='-rotate-90 tracking-widest'>
        Home
      </h2>

      <div className='flex flex-col gap-7 mb-10 text-[20px]'>
        <IoLogoLinkedin className='cursor-pointer hover:scale-110 transition-all ease-in-out'/>
      </div>
    </div>
  )
}

export default SideBar
