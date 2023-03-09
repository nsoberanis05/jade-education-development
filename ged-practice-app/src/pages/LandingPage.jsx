import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Navbar from '../components/Navbar'
import heroBackground from '../assets/onlineLearning.svg'
function LandingPage() {

  const navigate = useNavigate()
  
  return (
    <>
      <Navbar/>
      <main className='px-8 bg-slate-50'>

          <div className="lg:w-full lg:py-12 py-8 flex flex-col lg:flex-row items-center" >

              {/*  Left Section */}
              <div className='mb-2 text-center'>
                <div>
                  <h1 className='mb-4 text-4xl '> Continue your education with us</h1>
                  <p className='text-md text-slate-600'> Jade provides you an easy way to access all the content you need to pass the GED test.</p>
                </div>

                <div className='w-full flex flex-row justify-center items-center mt-4'>
                  <button 
                    onClick={() => {navigate('/dashboard')}} 
                    className='rounded-lg bg-emerald-600 px-8 py-3 text-white focus:outline-slate-900'> Get Started </button>
                </div>
              </div>

              {/* Right Section */}
              <div className='mb-8 -order-1 lg:order-2 lg:w-[45%]'>
                <img className='m-auto ' src={heroBackground} />
              </div>

          </div>

          <div className='my-4'>
            <div className='text-center rounded-lg bg-slate-300 w-48'>
              <div className='p-6'>
                <h1 className='text-xl mb-4'>Math</h1>
                <p> Study math topics like algebra, geometry, and more to get ready to pass the math section.</p>
              </div>
              <div className= 'bg-slate-900 w-full h-12 rounded-lg'> </div>
            </div>
          </div>

      </main>
    </>
  )
}

export default LandingPage