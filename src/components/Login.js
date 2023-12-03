import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  // Use array destructuring to get the state value and the state update function
  const [isSignInForm, setisSignInForm] = useState(true);

  const toggleSignInForm = () => {
    // Use the correct state update function
    setisSignInForm(!isSignInForm);
  };

  return (
    <div className='App-logo'>
      <Header />
      <div className='absolute bg-opacity-70'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='backGroun_img' />
      </div>

      <div>
        <form className='w-[27.33rem] absolute my-32 mx-auto left-0 right-0 p-12 bg-black text-white bg-opacity-90'>
          <h1 className='text-3xl font-bold py-2 '>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm &&
          <input type='text' placeholder='Enter Your Name' className='p-2 my-2 w-full h-14 rounded-lg bg-gray-800'></input>
          }
          <input type='text' placeholder='Email or phone number' className='p-2 my-2 w-full h-14 rounded-lg bg-gray-800'></input>
          <input type='password' placeholder='Passowrd' className='p-2 my-2 w-full h-14 rounded-lg bg-gray-800'></input>
          <button className='p-2 my-6 bg-red-600 w-full h-14 rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign up Now" : "Already Register? Sign in Now"}</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
