import React, { useEffect } from 'react'
import { useSelector, } from 'react-redux/es/exports'
import {Navigate,useLocation } from 'react-router-dom'

export default function AuthWraper({children}) {
    const authStatus = useSelector((store) => store.authReducer.auth)
    console.log(authStatus)
 const location=useLocation()
   

    if(authStatus) {
        return children
    }
 
  return (
   <Navigate to="/login" state={location} replace={true}/>
  )
}
