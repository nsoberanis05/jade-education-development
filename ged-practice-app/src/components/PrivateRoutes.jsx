import React, { useContext, useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Outlet, Navigate, useLocation } from 'react-router-dom'

function userLoggedIn(){
    const { currentUser } = useAuth()
    return currentUser
}  

function PrivateRoutes(){
    const user = userLoggedIn()
    if(!user) return <Navigate to="/login"/>
    return (
      <Outlet />
    )

}

export default PrivateRoutes