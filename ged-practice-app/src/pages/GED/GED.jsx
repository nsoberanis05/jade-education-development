import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
function GED() {
  const navigate = useNavigate()

  return (
    <>
    <Navbar/>
    <div className='p-4'>
      <h1 className=''>Welcome</h1>
      <div className='grid gap-2 grid-cols-2 grid-rows-2'> 

        <div onClick={() => {navigate('/ged/math')}} className='card bg-red-500 cursor-pointer'>
          Practice Math
        </div>

        <div className='card text-white bg-slate-900 cursor-pointer'>
          Practice English
        </div>

        <div className='card bg-emerald-400 cursor-pointer'>
          Practice Science
        </div >

        <div className='card bg-blue-900 cursor-pointer'>
          Practice Social Studies
        </div>

      </div>
    </div>
    </>
  )
}

export default GED