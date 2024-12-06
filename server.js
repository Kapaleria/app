const express = require('express')
require('dotenv/config')
const mongoose = require('mongoose')

// creating an express app
const app = express()

//HTTP - Hyper Text Markup Protocol
// GET method

// app.get('path', fxn)

app.get('/', (req,res)=>{
    res.send('Hey Code Queen');
})

// CONNECT TO THE DATABASE
mongoose.connect(process.env.MONGODB_LINK)
.then(()=>{console.log('Connected to the database')})
.catch(err=>{console.log('ERROR',err)})


app.listen(process.env.PORT, ()=>{console.log('connected to the port')});

// NODEMON
// CTRL + C