import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from '../context/AuthContext';

function Register() {
    const [message, setMessage] = useState("");
    const { registerUser,signInWithgoogle  } = useAuth();

    const {
        register,
        handleSubmit, // using react hook form for better consoling to check email and password in right way also it will help to
                     // build onclick function of registation button you have to just defind in right way  also usefull when using firebase for global managment
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {   
        try {
            await registerUser(data.email, data.password);
            alert("User registered successfully");
        } catch (e) {
            alert("Please provide a valid email and password");
        }
    };

    
  const handleGoogleSignIn =async()=>{
    try{
     await signInWithgoogle()
     alert("Register successfull with google")
     navigate("/")
    }
    catch(e){
     alert("Google register failed")
    }
   }
    return (
        <div className="h-[calc(100vh-120px)] flex justify-center items-center">
            <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8">
                <h1 className="text-2xl font-semibold">Please Register</h1>
                <form onSubmit={handleSubmit(onSubmit)}>   
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Email
                        </label>
                        <input
                            {...register("email", { required: true })}
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Password
                        </label>
                        <input
                            {...register("password", { required: true })}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
                        />
                    </div>
                    {message && (
                        <p className="text-red-500 text-xs italic mb-3">{message}</p>
                    )}
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none">
                        Register
                    </button>
                </form>
                <p className="pt-2">
                    Have an account? Please
                    <Link to="/login" className="text-blue-500 hover:text-blue-700 p-1">
                       Login
                    </Link>
                </p>
                <div className="pt-2">
                    <button
                        onClick={handleGoogleSignIn}
                        className="w-full flex items-center justify-center gap-1 bg-secondary hover:bg-blue-500 hover:text-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                    >
                        <FaGoogle className="mr-2 mt-1" />
                        Register with Google
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Register;
