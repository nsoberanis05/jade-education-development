import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Navbar from '../components/Navbar'
import heroBackground from '../assets/heroBackground.svg'
function LandingPage() {

  const navigate = useNavigate()
  
  return (
    <>
      <Navbar/>
      <div className="w-full h-96 px-8 py-60 flex items-center bg-slate-50" >

        {/*  Left Section */}
        <div className=''>
          <div>
            <h1 className='mb-2 text-4xl '> Continue your education with us</h1>
            <p className='text-md text-slate-600'> Jade provides you an easy way to access all the content you need to pass the GED test.</p>
          </div>
          <div className='w-full flex items center mt-8'>
            <button onClick={() => {navigate('/dashboard')}} className='rounded-lg bg-emerald-600 px-8 py-3 text-white focus:outline-slate-900'> Get Started </button>
          </div>
        </div>

        {/* Right Section */}
        <div className=''>
          <img className='m-auto w-5/6' src={heroBackground} />
        </div>

      </div>
    </>
  )
}

export default LandingPage