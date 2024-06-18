import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import ProfilePic from './Components/ProfilePic'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <SideBar/>
      <div className='ml-[90px] grid grid-cols-1 md:grid-cols-3'>
        <div className='col-span-2'>
          User Data
        </div>
        <div>
        <ProfilePic/>
        </div>
      </div>
    </>
  )
}

export default App
