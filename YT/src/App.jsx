import './index.css'
import Home from './Components/Home.jsx'
import React, { useEffect, useState } from 'react'
import axios from "axios";


function App() 
{
  const [student , setStudent] = useState([]);

  useEffect(()=>{
    async function getall()
    {
      try 
      {
        const student = await axios.get("http://127.0.0.1:8000/api/student");  
        console.log(`Student Data :` , student.data)
        setStudent(student.data);
      } 
      catch (error) 
      {
        console.log(`Error :` , error)
      }
    }

    getall();
  } , []);

  return (
    <div>
      <h1>Data</h1>

      {
        student.map((i , index)=>{
          return(
            <h1 key={index}> {i.stuname}  : {i.email} </h1>
          )
        })
      }
    </div>
  )
}

export default App
