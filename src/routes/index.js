const { Router }=require("express")
const express=require("express")
const router=express.Router()

const Task=require("../models/task")

router.get("/", async(req,res)=>{
    console.log("Ingresando a la ruta raiz")
    const tasks = await Task.find()
    console.log(tasks)
    res.render("index",{tareas:tasks})
})


module.exports=router