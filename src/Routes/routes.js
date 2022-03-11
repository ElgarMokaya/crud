const { json } = require("body-parser");
const express = require("express");
const Student = require("../models/student");

const router=express.Router()



router.route('/students').get((req,res)=>{
    Student.find((err,students)=>{
        if(err){
return res.json('no student data found')
        }
        else{
            res.json(students)
        }
    })

    
})

router.route('/students/add').post((req,res)=>{
    const student=new Student(req.body)
    student.save()
    .then(student=>{
        return res.status(200).json('student added successfully')
    })
    .catch(err=>{
        return res.json ('err :',err)
    })
})

router.route('/students/:id').get((req,res)=>{
    Student.findById(req.params.id,(err,student)=>{
   if(err){
    return res.json('Error:',err)
   }
   else 
   return res.json (student)
    })
})
   
router.route('/students/delete/:id').delete((req,res)=>{
    Student.findByIdAndDelete({_id:req.params.id},(err,student)=>{
        if(err){
            return res.json('Error:',err)
        }
        else
        return res.json('student deleted successfully')
    })
})



router.route('/students/update/:id').put((req,res)=>{
    Student.findByIdAndUpdate({_id:req.params.id},req.body)
    .then(()=>{
        Student.findOne({_id:req.params.id})
        .then((student)=>{
            return res.json(student)
        })
    })
})


module.exports=router
