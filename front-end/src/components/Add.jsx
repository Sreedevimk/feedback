import { Box, Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = () => {
    const [course,setCourse]=useState({
          CourseId:'C101',
          CourseName:'FSD',
          CourseDuration:'4 months',
          Feedbackrating:'5'
        })
        const fetchValue=(e)=>{
            setCourse({...course,[e.target.name]:e.target.value})
          }

const location=useLocation()
const navigate=useNavigate()
let sendData=()=>{
  if (location.state!=null) {
    axios.put('http://localhost:4000/feedback/edit/'+location.state.course._id,course).then((res)=>{
      alert('data updated');
      navigate('/')
    }).catch((error)=>{
      console.log(error)
    })
   }
   else{
    axios.post('http://localhost:4000/feedback/addCourse',course).then((res)=>{
      navigate('/')
   }).catch((error)=>{
    console.log(error)
   })
   }
}
useEffect(()=>{
  if(location.state!=null){
    setCourse({...course,
      CourseName:location.state.course.CourseId,
      CourseId:location.state.course.CourseName,
      CourseCategorry:location.state.course.CourseDuration,
      CourseDescription:location.state.course.Feedbackrating,
    })
  }
},[])

  return (<div>
    
      <h2>Add Course</h2> 
      <Box
      
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >

        <TextField id="outlined-basic"
         label="Courseid" 
         variant="outlined" 
         name='Courseid'
         value={course.CourseName}
         onChange={fetchValue} /><br />
  
        <TextField id="filled-basic" 
         label="CourseName" 
         variant="outlined" 
         name='CourseName'
        value={course.CourseName}
         onChange={fetchValue}/><br />
  
        <TextField id="standard-basic"
          label="CourseDuration" 
          variant="outlined" 
          name='CourseDuration' 
          value={course.CourseDuration}
          onChange={fetchValue}   /><br />
  
        <TextField id="outlined-basic"
         label="Feedbackrating" variant="outlined"  
         name='Feedbackrating'
         value={course.Feedbackrating}
         onChange={fetchValue}   /><br />
  
  
        <Button variant="contained" onClick={sendData}>Submit</Button>
        
     
      </Box>
     
    
    </div>
  )

}
export default Add