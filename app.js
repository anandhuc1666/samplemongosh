require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const user = require('./routes/user')

const app = express()
app.use(express.json())
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('connected db'))
        .catch((err) => console.log('server not connected db', err))
app.use('/users', user)
app.get('/', (req, res) => {
    res.send('hello, man')
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`server is on running ${PORT}`))