require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')

const app = express()
mongoose
.connect(process.env.MONGODB_URL)
.then(()=>console.log('connected db'))
.catch(()=>console.log('server not connected db'))
