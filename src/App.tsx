import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import SideBar from './Components/SideBar'

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
          Profile Pic
        </div>
      </div>
    </>
  )
}

export default App
