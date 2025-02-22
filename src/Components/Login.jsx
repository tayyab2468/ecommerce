import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import HttpsIcon from '@mui/icons-material/Https';
import {Link} from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

  // Simulated login credentials (replace with backend authentication)
  const correctUsername = 'admin';
  const correctPassword = 'password123';

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage('Please fill in all fields');
      setMessageType('error');
      return;
    }

    if (username === correctUsername && password === correctPassword) {
      setMessage('Login successful!');
      setMessageType('success');

      // Clear fields after success
      setUsername('');
      setPassword('');

      // Redirect or perform further actions (e.g., navigate to dashboard)
    } else {
      setMessage('Incorrect username or password');
      setMessageType('error');
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-indigo-600'>
      <div className='w-full sm:w-[90%] md:w-[400px] lg:w-[450px] max-w-[90%] p-6 shadow-lg bg-white rounded-md'>

        <h1 className='text-3xl block text-center font-bold font-sans text-black'>Login</h1>
        <hr className='mt-3' />

        {/* Alert Messages */}
        {message && (
          <div className={`mt-4 p-3 text-center rounded-md ${messageType === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
            {message}
          </div>
        )}

        {/* Username Field */}
        <div className='mt-4 relative'>
          <label htmlFor='username' className='block text-base mb-2 text-black'>Username</label>
          <PersonIcon className="absolute left-3 top-10 text-black" />
          <input 
            type='text' 
            id='username' 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='pl-12 border w-full text-base px-1 py-1 focus:outline-none focus:border-gray-600 rounded-md' 
            placeholder='Enter your username'
          />
        </div>

        {/* Password Field */}
        <div className='mt-4 relative'>
          <label htmlFor='password' className='block text-base mb-2 text-black'>Password</label>
          <HttpsIcon className="absolute left-3 top-10 text-black" />
          <input 
            type='password' 
            id='password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='pl-12 border w-full text-base px-1 py-1 focus:outline-none focus:border-gray-600 rounded-md text-black' 
            placeholder='Enter your password'
          />
        </div>

        {/* Remember Me and Forgot Password */}
        <div className='mt-4 flex justify-between items-center'>
          <div>
            <input 
              type="checkbox" 
              id="rememberMe" 
              className="mr-2" 
            />
            <label htmlFor="rememberMe" className='text-black'>Remember Me?</label>
          </div>
          <div>
            <a href='#' className='text-indigo-700 font-semibold hover:text-indigo-900'>Forgot Password</a>
          </div>
        </div>

        {/* Login Button */}
        <div className='mt-4'>
          <button
            onClick={handleLogin}
            className='border-2 h-12 border-indigo-700 bg-indigo-800 text-white py-1 px-5 w-full rounded-md hover:bg-indigo-900 mt-4 text-lg font-bold'
          >
            Login
          </button>
        </div>

        {/* Sign Up Link */}
        <div className='mt-6 text-center'>
          <label className='font-sans text-sm sm:text-base text-indigo-700'>Don't have an account?</label>
          <Link to ="/signup" className='text-indigo-700 font-semibold ml-2 hover:text-indigo-900 text-sm sm:text-base'>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
