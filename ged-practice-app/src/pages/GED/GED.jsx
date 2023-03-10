import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import { useAuth } from '../../contexts/AuthContext'
function GED() {
  const navigate = useNavigate()
  const {currentUser} = useAuth()

  return (
    <>
    <Navbar/>
    <div className='p-6'>
      <h1 className='mb-2'>Welcome {currentUser.displayName} !</h1>
      <div className='grid gap-4 grid-cols-2 grid-rows-2'> 

        <div onClick={() => {navigate('/ged/math')}} className='card bg-red-400 cursor-pointer text-white text-xl'>
          Mathematical Reasoning
        </div>

        <div className='card text-white bg-slate-900 cursor-pointer text-xl'>
          Language Arts
        </div>

        <div className='card bg-lime-600 cursor-pointer text-white text-xl'>
         Science
        </div >

        <div className='card bg-cyan-600 cursor-pointer text-white text-xl'>
          Social Studies
        </div>

      </div>
    </div>
    </>
  )
}

export default GED