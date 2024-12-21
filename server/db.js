const mongoose= require('mongoose')



const link="mongodb+srv://sonu:sonu12345@cluster0.wx0ph.mongodb.net/"
const MongoConnect= async()=>{
    try{
         await mongoose.connect(link)
        console.log("db connected")

    }
    catch(err){
        console.log(err)
    }


}

module.exports= MongoConnect


