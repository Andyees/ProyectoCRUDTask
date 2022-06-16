const express= require("express")
const morgan = require("morgan")
const mongoose=require("mongoose")
const path = require("path")
const app=express()

//Connecting to DB

mongoose.connect('mongodb://localhost/crud-mongo').then(db=>console.log("Base de datos Conectada")).catch(err=>console.log(err))



//Importing Routes
const indexRoutes=require("./routes/index")
//settings
app.set("port",3000)
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")

//middlewares

app.use(morgan("dev"))
app.use(express.urlencoded({extended:false})) 
app.use("/",indexRoutes)






app.listen("3000",()=>{

    console.log("Sever on port 3000")
})

