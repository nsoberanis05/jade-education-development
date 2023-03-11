import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/Jade-logos/Jade-logos_transparent.png'

function Signup() {
  const userEmail = useRef()
  const userUsername = useRef()
  const userPassword = useRef()
  const userConfirmPassword = useRef()
  const [errorMessage, setErrorMessage] = useState('')
  const [passwordMismatch, setPasswordMismatch] = useState(false)
  const [usernameMismatch, setUsernameMismatch] = useState(false)
  const [emailMismatch, setEmailMismatch] = useState(false)
  const [loading, setLoading] = useState(false)
  const { signup } = useAuth()
  const navigate = useNavigate()

  function usernameValidation(e){
    if (e.target.validity.patternMismatch) {
      return setUsernameMismatch(true)
    }
    else{
      return setUsernameMismatch(false)
    }
  }

  function emailValidation(e){
    if (e.target.validity.patternMismatch) {
      return setEmailMismatch(true)
    }
    else{
      return setEmailMismatch(false)
    }
  }

  function passwordValidation(e){
    if (e.target.validity.patternMismatch) {
      return setPasswordMismatch(true)
    }
    else{
      return setPasswordMismatch(false)
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if(loading) return
    if (userPassword.current.value !== userConfirmPassword.current.value) {
      return setErrorMessage('Passwords do not match')
    }

    try {
      setErrorMessage('')
      setLoading(true)
      await signup(userEmail.current.value, userPassword.current.value, userUsername.current.value)
      navigate("/")
    } catch {
      setErrorMessage('Failed to create account')
    }
    setLoading(false)
  }

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
        <img
            className="mx-auto h-28 w-auto"
            src={
              logo
            }
            alt="Jade"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign up for a new account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">or <Link
            to={'/login'}
            className="font-medium text-emerald-600 hover:text-teal-500"
          >
            log in to existing account
          </Link>
          </p>
        </div>
        {errorMessage ? <p className='text-red-500 font-semibold'> {errorMessage} </p> : null}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          <div className=" rounded-md shadow-sm">

            {emailMismatch ? <p className='text-red-500 text-sm my-1'> Please insert valid email</p> : null}
            <div className='mb-4'>
              <label htmlFor="email-address" className=""> Email Address </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`relative block w-full appearance-none rounded-none my-1 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm`}
                placeholder="Email Address"
                onBlur={emailValidation}
                ref={userEmail}
              />
            </div>

            {usernameMismatch ? <p className='text-red-500 text-sm my-1'>Username should be 3-16 characters and only include letters and numbers </p>: null}
            <div className='mb-4'>
              <label htmlFor="Username" className=""> Username </label>
              <input
                id="username"
                name="username"
                title="Username should be 3-16 characters and only include letters and numbers" 
                type="text"
                required
                className={`relative block w-full appearance-none rounded-none my-1 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm ${usernameMismatch ? 'border-red-500' : ''}`}
                placeholder="Username"
                pattern="^[A-Za-z0-9]{3,16}$"
                onBlur={usernameValidation}
                ref={userUsername}
              />
            </div>

            {passwordMismatch ? <p className='text-red-500 text-sm my-1'> Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character </p>: null}
            <div className='mb-4'>
              <label htmlFor="password" className="">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                title="Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character"
                autoComplete="current-password"
                required
                pattern={`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&?*])[a-zA-Z0-9!@#$%^&?*]{8,20}$`}
                className="relative block w-full appearance-none rounded-none my-1 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                placeholder="Password"
                onBlur={passwordValidation}
                ref={userPassword}
              />
            </div>

            <div className='mb-4'>
              <label htmlFor="password" className="">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none my-1 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                placeholder="Confirm Password"
                pattern={`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`}
                ref={userConfirmPassword}
              />
            </div>
          </div>


          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-none border border-transparent bg-emerald-600 py-2 px-4 text-sm font-medium text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              disabled={loading}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup