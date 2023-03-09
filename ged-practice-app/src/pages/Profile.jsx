import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useAuth } from '../contexts/AuthContext'
import Navbar from '../components/Navbar'

function Profile() {

  // Variables
  const {currentUser, changeDisplayName} = useAuth()
  const userDisplayName = useRef()
  const [errorMessage, setErrorMessage] = useState('')
  // Functions
  function handleLogging(){
    console.log(currentUser)
  }

  async function handleChangeDisplayName(){
    setErrorMessage('')
    try {
      await changeDisplayName(userDisplayName.current.value);
    } catch (error) {
      setErrorMessage('Failed to change name')
      console.log(error)
      console.log(userDisplayName.current.value)
    }
  }

  return (
    <>
    <Navbar/>
    <div className='p-2'>
      {errorMessage ? <h1> {errorMessage} </h1> : null}
      <label htmlFor="displayName" className=""> Name </label>
                <input
                  id="displayName"
                  name="displayName"
                  className="relative block w-half appearance-none border border-gray-300 p-1 text-gray-900 placeholder-black focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder={currentUser.displayName}
                  ref={userDisplayName}
                />
      <button 
          className='text-sm rounded-full px-6 py-2 text-white bg-emerald-600 mt-2'
          onClick={handleChangeDisplayName}>Change</button>
    </div>
    </>
    
  )
}

export default Profile