import React, { useState } from 'react'


function From() {

  const [formData, setFormData] = useState({
    fullName:'',
    email:'',
    password:'',
    confirmPassword:'',
  })
  const [error, setError] =  useState({
    fullName:'',
    email:'',
    password:'',
    confirmPassword:'',
  })
  const [users, setUsers] =  useState([])

  const handler = (e) =>{

    const {name, value} = e.target;

    setFormData((prevData)=>({
        ...prevData,
        [name]: value,
    }))

  }

  const submitHandler = (e) =>{0
    e.preventDefault()

    if(formData.password.length < 4){
        setError({password: "password must be 4 character long"})
        return;
    }
    if(!/[@#$%^&*]/.test(formData.password)){
      setError({password: "password must contacin special character"})
      return;
    }
    if(formData.password != formData.confirmPassword){
      setError({confirmPassword: "password and confirm password must be same"})
      return;
    }

    setUsers((prevUser)=>[
      ...prevUser,
      formData
    ])
    
    setError('')
    setFormData({
      fullName:'',
      email:'',
      password:'',
      confirmPassword:'',
    })

  }

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={submitHandler} className="bg-gray-100 p-6 rounded shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="fullName"
              type="text"
              placeholder="Name"
              value={formData.fullName}
              onChange={handler}
            />

          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handler}
            />

          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handler}
            />
            {error.password && ( <p className='text-center text-red-500 mt-1'>{error.password}</p> )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handler}
            />
            {error.confirmPassword && ( <p className='text-center text-red-500 mt-1'>{error.confirmPassword}</p> )}
          </div>

          

          <div className="flex items-center justify-center ">
            <button
              className="bg-blue-500 hover:bg-blue-700 mt-8 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">Register</button>
          </div>

        </form>
      </div>

      {users.map((ele, idx)=>{
        return <p key={idx} className='text-white'>{ele.fullName}</p>
      })}

    </>
  )
}

export default From
