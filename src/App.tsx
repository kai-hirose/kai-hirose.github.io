import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import ProfilePic from './Components/ProfilePic'
import Introduction from './Components/Introduction'
import About from './Components/About'
import Skills from './Components/Skills'
import ProgressBar from './Components/ProgressBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <SideBar/>
      <div className='ml-[90px] grid grid-cols-1 md:grid-cols-3'>
        <div className='col-span-2 p-5 mt-90[px]'>
          <Introduction/>
          <About/>
          <Skills/>
        </div>
        <div className='hidden md:block'>
        <ProgressBar/>
        <ProfilePic/>
        </div>
      </div>
    </>
  )
}

export default App
