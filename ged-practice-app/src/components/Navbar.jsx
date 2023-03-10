import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import Logo from '../assets/Jade-logos/Jade-logos_transparent.png'
import { useNavigate, Link } from 'react-router-dom'

function Navbar() {
  // Variables ------------------------------------------

  const { currentUser, logout } = useAuth()
  const [errorMessage, setErrorMessage] = useState('')
  const menuRef = useRef()
  // false closed, true open
  const [menuState, changeMenuState] = useState(false) 
  const navigate = useNavigate('')

  // Functions -----------------------------------------
  async function handleLogout(e) {
    setErrorMessage('')
    try {
      await logout()
    } catch (error) {
      setErrorMessage('Failed to log out')
    }
  } 

  // Listens to click outside of the dropdown while its active to de-activate it.
  useEffect(() => {
    const handler = (e) => {
      if(!menuRef.current?.contains(e.target)) changeMenuState(false)
    }
    document.addEventListener('mousedown', handler)

    return document.removeEventListener('mousedown', handler)
  },[])
  
  return (
    <>
    <nav className='flex items-center p-4 border border-b-1'>
        <img onClick={() => {navigate('/')}} className='h-11 mr-1 cursor-pointer' src={Logo}/>

        <p onClick={() => {navigate('/')}} className='cursor-pointer'>Jade <span className='text-emerald-600'>EDU</span></p>

        <div className='ml-auto'>
            {!currentUser ? 
            <>  <button className='text-sm rounded-lg mr-2 px-6 py-2 border-2 border-slate-900 focus:outline-emerald-500' 
                  onClick={() => {navigate('/login')}}>Log In</button>
                <button className='text-sm rounded-lg mr-2 px-6 py-2 border-2 border-emerald-600 bg-emerald-600 text-white focus:outline-emerald-500' 
                  onClick={() => {navigate('/signup')}}>Sign Up</button>
            </>
            :
            <div ref={menuRef} className="relative inline-block text-left">
              <div>
                <button 
                type="button"
                onClick={() => {changeMenuState(!menuState)}}
                className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none">
                  Menu
                </button>
              </div>
            
      
              <div className={!menuState ?  "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transform opacity-0 scale-95 hidden" : "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transform opacity-100 scale-100"}>
                <div className="py-1">
                  <Link to='/dashboard' className="text-gray-700 block px-4 py-2 text-sm" >Dashboard</Link>
                  <Link to='/profile' className="text-gray-700 block px-4 py-2 text-sm">Profile</Link>
                  <Link onClick={handleLogout} className="text-gray-700 block px-4 py-2 text-sm">Log out</Link>
                </div>
              </div>
              
          </div>


            }
        </div>
    </nav>
    </>
  )
}

export default Navbar