import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default function Naxbar() {
  return (
    <div className='navcon'>
 <Link to="/" > <h1>Home</h1> </Link>

 <Link to="/login" >  <h1>Login</h1> </Link>
  <Link to="/register" >  <h1>Register</h1> </Link>
  <Link to="/employees" >  <h1>Employees</h1> </Link>
    

 
 
  <button className='logoutbtn'>Logout</button>

      
    </div>
  )
}
