const express=require("express")
const {connection}=require("./configs/db")
const app=express()
const {userRouter}=require("./routes/User.rotes")
const {postRouter}=require("./routes/Post.route")
const {authentication}=require("./middleware/authentication.middleaware")
require("dotenv").config()
const cors=require("cors")
// import * as dotenv from 'dotenv'

app.use(express.json())

app.use(cors({
    origin:"*"
}))

app.get("/",(req,res)=>{
console.log("welcome to homepage")
res.send("welcome to homepage")
})

app.use("/users",userRouter)
app.use(authentication)
app.use("/post",postRouter)



app.listen(process.env.port,async()=>{
    try{
   await connection
   console.log("Connection successfull") 
   }
    catch(err){
     console.log({"msg:err":"Something went wrong"})
     console.log(err)
    }
})