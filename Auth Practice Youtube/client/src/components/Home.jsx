import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate()
  const [userInfo , setUserInfo] = useState('')

  const fetchUserDetails = async () => {
    try{
      const response = await fetch('http://localhost:3000/api/v1/getUserInfo')
      const data = await response.json();
      setUserInfo(data)
    }catch(error) {
      console.log(error.message);
    }
  }

  console.log(userInfo)
useEffect(() => {
  fetchUserDetails()
}, [])

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

    <div className='w-full h-full  items-center py-10'>
        <div className='flex justify-center items-center '><br /><br />
            <h1 className='text-8xl poppins-bold text-blue-500'>Hello Hilal</h1>
        </div><br />
        <div className='poppins-extralight px-10 text-lg text-center'>
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam veniam veritatis cupiditate perferendis! Sit veniam explicabo ut. Labore et voluptatibus, aliquid expedita quae beatae ipsum! Odio quas labore odit unde</p>
        </div>
    </div>


    </div>
  )
}

export default Home