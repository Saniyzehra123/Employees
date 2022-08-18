import React, { useEffect } from 'react'
import "./Employees.css"
import { useDispatch ,useSelector} from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import { fetchData } from './Redux/action';



export default function Employees() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const employees = useSelector(state => state. employeesreducer.employees);
 
 useEffect(() => {
  dispatch(fetchData());
}, [dispatch.employees?.length]);
console.log("denims",  employees)
 
  return (
    <div className='emplocont'>
      hello from employees
      <div className='employdata'>
        {employees.map((employee,index) => {
          return(
            <div key={index}>
              <table>
              <tr>
    <th> Name</th>
    <th> Age</th>
    <th> Salary</th>
    <th> Department</th>
  </tr>
        <tr>
          <th>{employee.name}</th>
          <th>{employee.age}</th>
          <th>Salary{employee.salary}</th>
          <th>{employee.department}</th>

        </tr>
      </table>
            </div>
          )
        } )}
      </div>
      </div>


  )
      }            


  

         






    