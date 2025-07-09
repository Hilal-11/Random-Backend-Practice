import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function CreateEmployee() {
  const navigate = useNavigate('')
  const [formData , setFormData] = useState({
      employee_name : '',
      employee_email : '',
      employee_title : '',
      employee_department : '',
      employee_role : '',
      employee_phone : '',

  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/createEmployee', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      }
    ).then((res) => {
      res.json()
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log("failed to post the data on DB")
      console.log(err.message)
    })


    setFormData({
      employee_name : '',
      employee_email : '',
      employee_title : '',
      employee_department : '',
      employee_role : '',
      employee_phone : '',
    })
    navigate('/')
    window.location.reload()
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Employee Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Employee Name:</label>
            <input
              type="text"
              name="employee_name"
              value={formData.employee_name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Employee Email:</label>
            <input
              type="email"
              name="employee_email"
              value={formData.employee_email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Title:</label>
            <input
              type="text"
              name="employee_title"
              value={formData.employee_title}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Department:</label>
            <input
              type="text"
              name="employee_department"
              value={formData.employee_department}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Role:</label>
            <input
              type="text"
              name="employee_role"
              value={formData.employee_role}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone:</label>
            <input
              type="tel"
              name="employee_phone"
              value={formData.employee_phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateEmployee