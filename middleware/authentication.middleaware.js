const jwt=require("jsonwebtoken")

require("dotenv").config();

const authentication=(req,res,next)=>{
const token=req.headers.authorization
if(token)
{
    const decoded=jwt.verify(token,"masai")
    if(decoded)
    {
        next()
    }
    else{
        res.send("Please login")
    }
    
}
else{
    res.send("Please login")
}

}


module.exports={
    authentication
}