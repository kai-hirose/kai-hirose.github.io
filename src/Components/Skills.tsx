import React from 'react'
import Strings from '../Shared/Strings'

function Skills() {
    const skillList = [
        {
            id: 1,
            title: "SKILL 1",
            desc: Strings.SKILL1_DESC
        },
        {
            id: 2,
            title: "SKILL 2",
            desc: Strings.SKILL2_DESC
        },
        {
            id: 3,
            title: "SKILL 3",
            desc: Strings.SKILL3_DESC
        }
    ]
  return (
    <div className='px-12 mt-12'>
        <div className='flex items-center'>
            <div className='w-[20px] h-[7px] bg-blue-500 rounded-full'></div>
            <div className='w-full border-[1px] mx-4  mt-[-2px]'></div>
            <h2>{Strings.SKILLS}</h2>
            <div className='w-full border-[1px] mx-4  mt-[-2px]'></div>
            <div className='w-[20px] h-[7px] bg-blue-500 rounded-full'></div>
        </div>
        <div className='flex justify-around mt-16'>
            {skillList.map((item)=>(
                <div className='text-center gap-6 flex flex-col'>
                    <h2 className='mt-5 font-bold'>{item.title}</h2>
                    <h2 className='text-gray-400'>{item.desc}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills
