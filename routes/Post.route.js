const express=require("express")
const {PostModel}=require("../models/Post.module")
const postRouter=express.Router()

// postRouter.post("/",async (req,res)=>{
//     let postData=new PostModel(req.body)
//     try{
//         await postData.find()
//         res.send(postData)
//     }
//     catch(err){
//         console.log(err)
//     }
    

// })

postRouter.get("/",async (req,res)=>{
   
    try{
        let postData;
        if(req.query.device_Mobile && req.query.device_PC){
            postData=await PostModel.find({
                device:{mobile, PC}
            })
        }
        else{
            postData=await postData.find()
        }
        res.send(postData)
        // const post =new PostModel(payload)
        // await post.save()
        // res.send("made a post")
    }
    catch(err)
    {
        console.log(err)
      res.send({"msg":"something went wrong"})
    }
})


postRouter.post("/posts",async (req,res)=>{
    // res.send("All the post")
    const payload=req.body
    try{
        const post =new PostModel(payload)
        await post.save()
        res.send("made a post")
    }
    catch(err)
    {
        console.log(err)
      res.send({"msg":"something went wrong"})
    }
})



postRouter.patch('/update/:id',async(req,res)=>{
        const payload=req.body
        const id=req.params.id
    try{
      
        await PostModel.findByIdAndUpdate({"_id":id},payload)
        res.send("Updates the post ")
    }
    catch(err){
         res.send("err")
         console.log(err)
    }
})


postRouter.delete('/delete/:id',async(req,res)=>{
 
    const id=req.params.id
try{
  
    await PostModel.findByIdAndDelete({"_id":id})
    res.send("deleted the post ")
}
catch(err){
     res.send("err")
     console.log(err)
}
})

module.exports={
    postRouter
}