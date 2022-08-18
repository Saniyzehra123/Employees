import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Employees from './Employees'
import Employeescreate from './Employeescreate'
import Home from './Home'
import Login from '../Page/Login'
 import Navbar from './Navbar'
import Register from './Register'

export default function AllRoutes() {
  return (
    <div>
     <div>
    <Navbar />
     </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/employees" element={<Employees/>} />
        <Route path="/employees/create" element={<Employeescreate/>} />
        {/* <Route path="/employees/:id" element={<Employees/>} /> */}



         
      </Routes>
      
    </div>
  )
}
