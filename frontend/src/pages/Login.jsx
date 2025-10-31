import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginImg from '../assets/login.webp'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
        const handleSubmit = (e) => {
        e.preventDefault()
        console.log("user Login: " ,{email, password })
      
    }
    return (
        <div className='flex'>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
                <form
                onSubmit={handleSubmit} 
                className="w-full max-w-md bg-green-50 p-8 rounded-lg border shadow-sm">
                    <div className="flex justify-center mb-6">
                        <h2 className="text-xl font-medium ">Rabbit</h2>
                    </div>
                    <h2 className="txt-2xl font-bold text-center mb-6">
                        Hey there!
                    </h2>
                    <p className='text-center mb-6'>
                        Enter your username and password
                    </p>
                    <div className="m-4">
                        <label htmlFor="" className='font-semibold mb-2 block text-lg'>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full p-2 border rounded '
                            placeholder='Enter your email address' />
                    </div>
                    <div className="m-4">
                        <label htmlFor="" className='font-semibold mb-2 block text-lg '>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='w-full p-2 border rounded '
                            placeholder='Enter your password' />
                    </div>
                    <button type='submit'
                        className='w-full bg-black text-white rounded-lg font-semibold p-2 hover:bg-gray-800 transition'>
                        SIGN IN
                    </button>
                    <p className="mt-6 text-center text-sm font-semibold">
                        Dont have an Account ?{' '}
                        <Link
                            to='/register'
                            className='text-blue-500'>
                            Register
                        </Link>
                    </p>


                </form>
            </div>

            {/* right side image  */}
            <div className="hidden md:block w-1/2 ">
                <div className="h-full flex flex-col justify-center items-center">
                    <img 
                    src={LoginImg} 
                    alt="Login to Account"
                    className='h-[600px] object-cover' />
                </div>
            </div>

        </div>
    )
}

export default Login
