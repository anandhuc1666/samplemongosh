import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import route from "./router/userRoute.js"

const app = express()
app.use(express.json())
dotenv.config()

app.use("/user",route)

mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("mongoDB connected"))
.catch((err)=>console.log(err))

const PORT = process.env.PORT || 3001
app.listen(PORT,()=>console.log(`server is running on ${PORT}`))