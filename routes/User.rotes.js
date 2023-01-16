const express=require("express")
const {UserModel}=require("../models/User.module")
const userRouter=express.Router()
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
// require("dotenv").config()



userRouter.post('/register',async(req,res)=>{
    const {email,name,gender,password}=req.body
    try{
    bcrypt.hash(password,5,async(err,secret)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            const user=new UserModel({email,name,gender,password:secret})
            await user.save()
            res.send("registered sucess")
        }
    })
    }
    catch(err){
         res.send("err")
         console.log(err)
    }
})


userRouter.post('/login',async(req,res)=>{
    const {email,password}=req.body
    try{
        const user=await UserModel.find({email})
        console.log(user)
        if(user.length>0)
        {
            bcrypt.compare(password,user[0].password,(err,result)=>{
                if(result)
                {
                    const tok=jwt.sign({ eval: 'socialmedia' }, "masai")
                    res.send({"msg":"login sucess","token":tok})
                }
                else{
                    res.send("Invalid credential")
                    console.log(err)
                }
            })
        }
        else{
            res.send("IC")
        }
    }
    catch(err){
         res.send("err")
         console.log(err)
    }
})

module.exports={
    userRouter
}