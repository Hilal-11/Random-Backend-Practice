import { useState } from 'react'
import { Routes , Route , Router } from 'react-router-dom'
import Home from './components/Home'
import Registration from './components/Registration'
import Login from './components/Login'
function App() {

  return (
    <div className='bg-slate-950 w-full h-screen text-white poppins-regular'> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
