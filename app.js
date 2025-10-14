require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')

const app = express()
mongoose
.connect(process.env.MONGODB_URL)
.then(()=>console.log('connected db'))
.catch((err)=>console.log('server not connected db',err))


const PORT = process.env.PORT || 3001

app.listen(PORT,()=>console.log(`server is on running ${PORT}`))