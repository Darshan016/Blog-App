const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const multer = require('multer')
const authRoute = require('./routes/AuthRoute')
const userRoute = require('./routes/UserRoute')
const postRoute = require('./routes/PostRoute')
const categoryRoute = require('./routes/CategoryRoute')
const cors = require('cors')
const path = require('path')

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
app.use("/images", express.static(path.join(__dirname,"/images")))
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/posts', postRoute)
app.use('/api/v1/categories', categoryRoute)

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images")
    },
    filename:(req,file,cb)=>{
        cb(null,req.body.name)
        // cb(null,"hello.jpg")
    }
})

const upload = multer({storage:storage})
app.post('/api/v1/upload', upload.single('file'), (req,res)=>{
    res.status(200).json('File has been uploaded successfully.')
})

mongoose.connect(process.env.MONGO_URL,{
    // useFindAndModify:true
}).then(()=>{
    console.log('Connected to the Database')
}).catch((err)=>{
    console.log(err)
})

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port: ${process.env.PORT}`)
})

