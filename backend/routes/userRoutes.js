const express=require("express")
const router=express.Router();
const jwt=require("jsonwebtoken")
require('../db/connection');
const feedbackModel = require("../model/feedbackData");
router.use(express.json())

router.get('/',async(req,res)=>{
    try {
        const data=await feedbackModel.find()
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send('data not found')
    }
})

router.post('/feedback',async(req,res)=>{
    const user=await feedbackModel.findOne({feedbacklist:req.body.feedbacklist
        
    })
    if(!user){
        res.json({message:"data not found"})
    }
    // try{
    //     if 
    // }
    // catch(error){
    //     console.log(error)
    // }
})


router.put('/edit/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await feedbackModel.findByIdAndUpdate(id,req.body)
        res.status(200).send('update successful')

    } catch (error) {
        res.status(404).send('update unsucessful')
    }
})
//delete operation
router.delete('/delete/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await feedbackModel.findByIdAndDelete(id)
        res.status(200).send('delete successful')
    } catch (error) {
        res.status(404).send('delete unsuccessful')
    }
})
module.exports=router





