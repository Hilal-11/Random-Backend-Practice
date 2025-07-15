import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate()

  return (
    <div className='py-2'> 
        <nav className="flex items-center justify-between px-6 py-4 bg-slate-950 shadow-md">
      {/* Logo */}
      <div className="text-2xl  text-white poppins-bold cursor-pointer" onClick={() => navigate('/')}>
        authO
      </div>
      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={() => navigate('/register')}
          className=" shadow-sm shadow-zinc-700 cursor-pointer hover:bg-slate-800 duration-300 rounded-full px-10 py-2 poppins-semibold  "
        >
          Register
        </button>
        <button
          onClick={() => navigate('/login')}
          className=" shadow-sm shadow-zinc-700 cursor-pointer hover:bg-slate-800 duration-300 rounded-full px-10 poppins-semibold py-2 "
        >
          Login
        </button>
      </div>
    </nav>
    </div>
  )
}

export default Home