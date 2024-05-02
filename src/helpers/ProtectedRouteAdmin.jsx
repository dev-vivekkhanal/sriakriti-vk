import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRouteAdmin = () => {
  return localStorage.getItem("user_type" ) === 'admin' || localStorage.getItem("status") ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRouteAdmin