import React from 'react'
import Strings from '../Shared/Strings'
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";



function About() {
  return (
    <div className='mt-12 px-44 text-center flex flex-col items-center'>
        <h2 className='text-[40px] font-bold'>{Strings.ABOUT_HEADING}</h2>
        <RiDoubleQuotesL className='bg-blue-500 p-3 text-[44px] rounded-full mt-6'/>
        <h2 className='my-5 text-gray-400 text-[14p]'>{Strings.ABOUT_DESC}</h2>
        <RiDoubleQuotesR className='bg-blue-500 p-3 text-[44px] rounded-full mt-6'/>
    </div>
  )
}

export default About
