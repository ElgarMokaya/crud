const mongoose=require('mongoose')

const connection=require('../db/student')


const Schema=mongoose.Schema;
const Student=new Schema({
    name:{
        type:String
    },
    course:{
        type:String
    },
    regno:{
        type:String
    },
    email:{
        type:String
    }
})
module.exports=mongoose.model('Student',Student)