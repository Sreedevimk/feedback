import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

 const Navbar = () => {
  const navigate=useNavigate()
  let clearUser=()=>{
    localStorage.removeItem("token");
    navigate('/')
  }
  return (
    
    <Box sx={{ flexGrow: 1 }}>
    <AppBar> 
      <Toolbar style={{backgroundColor:'#7E60BF'}}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
        </IconButton>
        <Typography align='left' variant="h6" component="div" sx={{ flexGrow: 1 }}>
          FeedbackAPP
        </Typography>
        {/* <Link to={'/'}><Button color="#C75B7A">Home</Button></Link> */}
        <Link to={'/'}><Button color="#C75B7A">Home</Button></Link>
        <Link to={'/add'}><Button color="#C75B7A">Add</Button></Link>
        {/* <Link to={'/'}><Button color="#C75B7A">Home</Button></Link> */}
        
      </Toolbar>
    </AppBar>
   
  </Box>

  )
}
export default Navbar