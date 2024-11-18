import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import axios from "axios"

function AdminLogin() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  
  const onSubmit = async (data) => {   
    try {
      console.log(data);
      const response = await axios.post("http://localhost:3000/api/auth/admin",data,{
        headers: {
          'Content-Type': 'application/json',
      }
      })     //The 'Content-Type': 'application/json' header is a way of labeling your data. It explicitly tells the server, "Expect JSON data in this request body      
      const auth = response.data;
          console.log(auth)
      if(auth){
        localStorage.setItem("token",auth.token)
        setTimeout(()=>{
          localStorage.removeItem("token")
          alert("Token has been expired,Please login again")
          navigate("/")
        },3600*1000)
      }
      alert("Admin login successfull !")
      navigate("/dashboard")
    } catch (e) {
      setMessage('Please provide a valid email and password');
    }
  };

  return (
    <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
      <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8'>
        <h1 className='text-2xl font-semibold'>Admin Dashboard Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2 mt-2' htmlFor="email">
              Username
            </label>
            <input 
              {...register("username", { required: "username is required" })}
              type="text"
              id="email"
              placeholder='Username'
              className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'
            />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">
              Password
            </label>
            <input 
              {...register("password", { required: "Password is required" })}
              type="password"
              id="password"
              placeholder='Password'
              className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'
            />
            {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
          </div>

          {message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>}
          
          <div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none'>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
