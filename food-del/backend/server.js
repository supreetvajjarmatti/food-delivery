//basic express package*
import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"





// app congif
const app = express()
const port = 4000


//middleware
app.use(express.json()) //connect with frontend to backend
app.use(cors())

//DB connection
connectDB();

//API endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)

//http method to request the data
app.get("/",(req,res)=>{
    res.send("API Working")
}) 

//run the express server

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})


//mongodb+srv://supreet:<password>@cluster0.oix2q7c.mongodb.net/?
