import React, { useState } from 'react'
import Navbar from '../../../components/Navbar'
import { useNavigate } from 'react-router-dom'
/**
 *  Todo
 *  - Start working in UI
 *    * Study By Topics {
 *        - Number Operations and Number Sense
 *        - Measurement and Geometry
 *        - Data Analysis, Statistics, and Probability
 *        - Algebra, Functions, and Patterns (Working on it)
 *     }
 *    * Study Test (All topics combined to simulate test)
 *    
 */

function Math_Category() {
  const navigate = useNavigate()
  return (
   <> 
    <Navbar/>
    <div className='p-4'>
    <h1 className='text-lg my-2'> Reinforce the basics </h1>
      <div 
        className='p-4 select-none rounded-md border-gray-300 border mb-8 cursor-pointer w-3/4'
        onClick={() => {navigate('/ged/math/times-tables')}}>
        Times tables
      </div>

      <h1 className='text-lg my-2'> Study by topic </h1>
      <div 
      className='p-4 select-none rounded-md border-gray-300 border mb-2 cursor-pointer w-3/4'
      onClick={() => {navigate('/ged/math/algebra-functions-patterns')}}>
       Algebra, Functions, and Patterns
      </div>

      <div 
      className='p-4 select-none rounded-md border-gray-300 border mb-2 cursor-pointer w-3/4'
      onClick={() => {navigate('/ged/math/measurement-geometry')}}>
       Measurement and Geometry
      </div>
      
    </div>

    
    
   </>
  )
}

export default Math_Category