import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Navbar from '../components/Navbar'
function Dashboard() {

  // Variables
  const [errorMessage, setErrorMessage] = useState('')
  const { currentUser } = useAuth()
  const navigate = useNavigate()

  return (
    <>
      <Navbar/>
      <div className='p-4'>
        <div>
          Welcome to the dashboard.
        </div>
        <button 
                  className='text-sm rounded-md px-6 py-2 text-white bg-emerald-600'
                  onClick={() => {navigate('/ged')}}>GED</button>
      </div>

    </>
  )
}

export default Dashboard