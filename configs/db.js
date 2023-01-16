const mongoose=require("mongoose")
const connection=mongoose.connect("mongodb+srv://harshank:harshank@cluster0.cgmkvqi.mongodb.net/?retryWrites=true&w=majority")

module.exports={
    connection
}