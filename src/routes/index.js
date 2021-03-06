const { Router } = require("express")
const express =require("express")
const router = express.Router()

const Task= require("../models/task")

router.get("/", async(req,res)=>{
 const tasks=  await Task.find();

    res.render("index",{tareas:tasks})
})

router.post("/add",async(req,res)=>{
const task= new Task(req.body);
await task.save()
res.redirect("/")
})

router.get("/delete/:id",async(req,res)=>{
const {id}= req.params
await Task.deleteOne({_id:id})
res.redirect("/")
})

router.get("/cambiarEstado/:id",async(req,res)=>{
    const {id}= req.params
    const task=await Task.findById(id)
    task.status=!task.status
    await task.save()
    res.redirect("/")
    })



module.exports=router;