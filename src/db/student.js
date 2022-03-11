const mongoose=require('mongoose')
require('dotenv').config()
const DB_URL=process.env.MONGO_URL


const connection=mongoose.connect(DB_URL)
.then(()=>{
    console.log('database connected successfully');
})
.catch((err)=>{
    console.log('database error',err);
})
module.exports=connection