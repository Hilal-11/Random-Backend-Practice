import React from 'react'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {

    const [employes , setEmployes] = useState();
    const navigate = useNavigate('')
    const getAllData = async () => {
        try{
            const employees = await fatch(`
            http://localhost:3000/api/v1/getAllEmployees`,
            {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            })
        const response = await employees.json();
        setEmployes(response.data)
        }catch(error) {
            console.log(error.message)
            console.log("Failed to get the data from API")
        }
    }

useEffect(() => {
    getAllData()
}, [])

    console.log(employes)

     
  return (
    <div>
        <div className='w-[80%] mx-auto py-6'>
        {/* HEADER */}
        <div className='flex justify-between flex-wrap gap-0'>
          <div className=''>
            <h1 className='font-bold text-4xl text-center lg:text-left'>Employees</h1> <br />
            <p className='text-md '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur ipsa unde magni deleniti labore <br /> nihil sapiente quisquam blanditiis porro quod mollitia tempore debitis explicabo iure quia aperiam...</p>
          </div>
          <div className='w-full lg:w-auto py-4'>
            <button className='w-full bg-blue-500 rounded-md lg:px-10 py-3 font-bold cursor-pointer'
                onClick={() => navigate('/createEmployee')}
            >Add Employee</button>
          </div>
        </div>
        {/* EMPLOYEES SECESSION */}
        {/* bg-slate-900 shadow-sm shadow-gray-300 */}
        <div className='w-full h-auto  my-10 rounded-2xl'> 
          {/* FIXED HEADER OF DATA */}
          <div className='flex justify-between  bg-slate-700 px-10 py-5 font-medium rounded-tl-2xl rounded-tr-2xl'>
            <div>Employee</div>
            <div>Title</div>
            <div>Role</div>
          </div>

        {/*  Regestered Users */}
         <div className='space-y-2'>
        
         </div>


        </div>
      </div>
    </div>
  )
}

export default Home