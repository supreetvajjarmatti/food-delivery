//basic express package*
import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"





// app congif
const app = express()
const port = 4000


//middleware
app.use(express.json()) //connect with frontend to backend
app.use(cors())

//DB connection
connectDB();

//http method to request the data
app.get("/",(req,res)=>{
    res.send("API Working")
}) 

//run the express server

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})


//mongodb+srv://supreet:<password>@cluster0.oix2q7c.mongodb.net/?
