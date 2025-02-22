import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

  const handleSignup = (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setMessage('Please fill in all fields');
      setMessageType('error');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      setMessageType('error');
      return;
    }

    setMessage('Registration successfully done!');
    setMessageType('success');

    // Reset fields after successful registration
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className='flex justify-center items-center h-screen bg-indigo-600'>
      <div className='w-full sm:w-[90%] md:w-[400px] lg:w-[450px] max-w-[90%] p-6 shadow-lg bg-white rounded-md'>
        <h1 className='text-3xl text-center font-bold font-Poppins text-black'>Signup</h1>
        <hr className='mt-3' />

        {/* Alert Messages */}
        {message && (
          <div className={`mt-4 p-3 text-center rounded-md ${messageType === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
            {message}
          </div>
        )}

        {/* Username Field */}
        <div className='mt-4 relative'>
          <label className='block text-base mb-2 text-black'>Username</label>
          <PersonIcon className="absolute left-3 top-10 text-black" />
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}d
            className='pl-12 border w-full text-base px-1 py-1 focus:outline-none focus:border-gray-600 rounded-md text-black'
            placeholder='Enter your username'
          />
        </div>

        {/* Email Field */}
        <div className='mt-4 relative'>
          <label className='block text-base mb-2 text-black'>Email Address</label>
          <EmailIcon className="absolute left-3 top-10 text-black" />
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='pl-12 border w-full text-base px-1 py-1 focus:outline-none focus:border-gray-600 rounded-md text-black'
            placeholder='Enter your email'
          />
        </div>

        {/* Password Field */}
        <div className='mt-4 relative'>
          <label className='block text-base mb-2 text-black'>Password</label>
          <HttpsIcon className="absolute left-3 top-10 text-black" />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='pl-12 border w-full text-base px-1 py-1 focus:outline-none focus:border-gray-600 rounded-md text-black'
            placeholder='Enter your password'
          />
        </div>

        {/* Confirm Password Field */}
        <div className='mt-4 relative'>
          <label className='block text-base mb-2 text-black'>Confirm Password</label>
          <HttpsIcon className="absolute left-3 top-10 text-black" />
          <input
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='pl-12 border w-full text-base px-1 py-1 focus:outline-none focus:border-gray-600 rounded-md text-black'
            placeholder='Confirm your password'
          />
        </div>

        {/* Signup Button */}
        <div className='mt-4'>
          <button
            onClick={handleSignup}
            className='border-2 h-12 border-indigo-700 bg-indigo-800 text-white py-1 px-5 w-full rounded-md hover:bg-indigo-900 mt-4 text-lg'
          >
            Create Account
          </button>

          {/* Already have an account */}
          <div className='mt-6 text-center'>
            <label className='font-sans text-sm sm:text-base'>Already have an account?</label>
           
          </div>
        </div>

      </div>
    </div>
  );
};

export default Signup;
