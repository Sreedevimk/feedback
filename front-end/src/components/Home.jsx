import React, { useEffect, useState } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the server
    axios.get('http://localhost:4000/feedback')
      .then((res) => {
        setRows(res.data); // Assuming res.data is an array of courses
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const deleteCourse = (id) => {
    // Delete course by ID
    axios.delete(`http://localhost:4000/feedback/delete/${id}`)
      .then(() => {
        alert('Course deleted');
        setRows(rows.filter(row => row.CourseId !== id)); // Remove deleted course from state
      })
      .catch((error) => {
        console.error('Error deleting course:', error);
      });
  };

  const updateCourse = (course) => {
    // Navigate to the update page with course data
    navigate('/add', { state: { course } });
  };

  return (
    <Grid container spacing={4}>
      {rows.map((row) => (
        <Grid item xs={12} sm={6} md={4} key={row.CourseId}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              width: 400,
              marginTop: '6%',
              borderRadius: 1,
              boxShadow: '0 0 10px rgba(0,0,0,0.2)',
              '&:hover': { boxShadow: '0 0 10px rgba(0,0,0,0.5)' }
            }}
          >
            
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {row.CourseName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <b>Course ID:</b> {row.CourseId}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <b>Course Duration:</b> {row.CourseDuration} hours
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <b>Feedback Rating:</b> {row.Feedbackrating} stars
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => updateCourse(row)} variant="outlined" color="success">
                Update
              </Button>
              <Button onClick={() => deleteCourse(row.CourseId)} variant="outlined" color="error">
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;