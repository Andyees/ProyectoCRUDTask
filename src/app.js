const express= require("express")
const morgan = require("morgan")
const mongoose=require("mongoose")

const app=express()

//Connecting to DB

mongoose.connect('mongodb://localhost/crud-mongo').then(db=>console.log("Base de datos Conectada")).catch(err=>console.log(err))



//Importing Routes
const indexRoutes=require("./routes/index")
const path = require("path")

//middlewares
app.use("/",indexRoutes)
app.use(morgan)
app.use(express.urlencoded({extended:false}))

//settings
app.set("port",3000)
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")


app.listen("3000",()=>{

    console.log("Sever on port 3000")
})

