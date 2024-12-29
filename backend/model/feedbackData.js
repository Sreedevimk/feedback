const mongoose=require('mongoose')


feedbackSchema={

    CourseID:String,
    CourseName:String ,
    CourseDuration:Number,
    Feedbackrating:Number
}

const feedbackModel=mongoose.model('feedback',feedbackSchema);
module.exports=feedbackModel