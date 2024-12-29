const express=require('express')
const app=new express();
const morgan=require('morgan')
app.use(morgan('dev'))
const cors=require('cors')
app.use(cors())
const user_route=require('./routes/userRoutes')

// app.use('/todo',userRoutes);
require('dotenv').config();
const PORT=process.env.PORT
require('./db/connection');

app.use("/feedback",user_route)





app.listen(PORT,()=>{
    console.log("server listening on the PORT")
})