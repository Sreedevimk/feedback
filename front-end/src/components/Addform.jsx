import React, { useState } from 'react'
import {Button,Card,CardActions,CardContent,CardMedia,Grid2,TextField,Typography} from '@mui/material'
import { useNavigate } from 'react-router-dom'


// const  = () => {
    const Addform = () => {
    const [course,setCourse]=useState({
      CourseId:'',
      CourseName:'',
      CourseDuration:'',
      Feedbackrating:''
    })
    
  const fetchValue=(e)=>{
    setCourse({...course,[e.target.name]:e.target.value})
  }
// const Addform = () => {


    const [rows,setRows]=useState([])
 useEffect(()=>{
  axios.get('http://localhost:4000/feedback/').then((res)=>{
    setRows(res.data)

 })

 
 },[])
  const deleteCourse=(p)=>{
     axios.delete('http://localhost:4000/feedback/delete/'+p).then((res)=>{
      alert('deleted');
      window.location.reload();
    })
 }
const navigate=useNavigate()
function updateCourse(feedback){
  navigate('/add',{state:{course}})
}

  return (
    <div>
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
    
export default Addform