import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRouteUnderDev = () => {
    // This route is used for hiding components from the ui that have incomplete or no backend data. These components need to configured and integrated properly with new or existing modified APIs before releaseing into the ui.
  return  <Navigate to='/dev' />
}

export default ProtectedRouteUnderDev