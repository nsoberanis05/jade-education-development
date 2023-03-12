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

          {/* Hero Section */}
          <div className="lg:w-full lg:h-[80vh] py-8 flex flex-col lg:flex-row items-center" >

              {/*  Left Section */}
              <div className='mb-2 text-center'>
                <div>
                  <h1 className='mb-4 text-4xl '> Continue your education with us</h1>
                  <p className='text-md text-slate-600'> Jade EDU provides you an easy way to access all the content you need to pass the GED test</p>
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

          {/* Topics Section */}
          <section className='flex flex-col gap-16 lg:flex-row lg:flex-wrap p-4 lg:p-16'>
            <section className='flex flex-col gap-12 lg:flex-row'>
              <div className='text-center lg:text-left flex-1'>
                <span class="material-icons-outlined !text-8xl text-red-500 !-ml-2 select-none">calculate</span> 
                <p className='text-2xl font-semibold my-2'>Mathematical Reasoning</p>
                <p className='text-md text-slate-600 leading-7'> Learn math concepts to solve real-life problems. Topics include basic math, geometry, algebra, and graphs & functions. </p>
              </div>

              <div className='text-center lg:text-left flex-1'>
                <span class="material-icons-outlined !text-8xl text-slate-900 !-ml-2 select-none">auto_stories</span> 
                <p className='text-2xl font-semibold my-2'>Reasoning Thourgh Language Arts</p>
                <p className='text-md text-slate-600 leading-7'> Improve your reading and writing skills, including grammar. Practice reading different types of texts and improve your understanding. You'll also learn how to analyze two passages, decide which argument is stronger, and explain why. </p>
              </div>
            </section>

            <section className='flex flex-col gap-12 lg:flex-row'>
              <div className='text-center lg:text-left flex-1'>
                <span class="material-icons-outlined !text-8xl text-emerald-400 !-ml-2 select-none">science</span> 
                <p className='text-2xl font-semibold my-2'>Science</p>
                <p className='text-md text-slate-600 leading-7'> Learn science concepts, interpret graphs and charts with scientific data, and learn to reason through science information. </p>
              </div>

              <div className='text-center lg:text-left flex-1'>
                <span class="material-icons-outlined !text-8xl text-cyan-600 !-ml-2 select-none">travel_explore</span> 
                <p className='text-2xl font-semibold my-2'>Social Studies</p>
                <p className='text-md text-slate-600 leading-7'> Learn American social studies concepts, interpret graphs and charts displaying social studies data, and use reasoning to interpret information.  </p>
              </div>
            </section>

          </section>
          
      </main>
    </>
  )
}

export default LandingPage