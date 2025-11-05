import express from "express"
import dotenv from "dotenv"
import route from "./router/userRoute.js"
import Newmongoose from "./mongoose.js"

const app = express()
app.use(express.json())
dotenv.config()

app.use("/user",route)
Newmongoose()

const PORT = process.env.PORT || 3001
app.listen(PORT,()=>console.log(`server is running on ${PORT}`))