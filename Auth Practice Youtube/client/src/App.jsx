import { useState } from 'react'
import { Routes , Route , Router } from 'react-router-dom'
import Home from './components/Home'
import Registration from './components/Registration'
import Login from './components/Login'
function App() {

  return (
    <div className='bg-slate-950 w-full h-screen text-white poppins-regular '> 
      <div className='max-w-[80%] mx-auto'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
