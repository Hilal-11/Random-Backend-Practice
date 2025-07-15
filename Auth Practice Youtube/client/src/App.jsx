import { useState } from 'react'
import { Routes , Route , Router } from 'react-router-dom'
import Home from './components/Home'
import Registration from './components/Registration'
import Login from './components/Login'
function App() {

  return (
    <div> 

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/login' element={<Login />} />
      </Routes>
     
    </div>
  )
}

export default App
