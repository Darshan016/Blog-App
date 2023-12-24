const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const multer = require('multer')

dotenv.config()
const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Connected to the Database')
}).catch((err)=>{
    console.log(err)
})

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port: ${process.env.PORT}`)
})

