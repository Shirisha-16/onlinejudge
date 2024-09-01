const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv').config()
const { mongoose } = require('mongoose')
const app = express();

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('Database connected'))
.catch((err)=>console.log('Database not connected',err))

app.use(express.json())
app.use('/auth',require('./routes/authRoutes'))
app.use('/problem',require('./routes/problemRoutes'))
const port = 8000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})