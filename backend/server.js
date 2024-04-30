const express = require('express')
const dotenv = require('dotenv').config()

const PORT = process.env.PORT
const app = express()

app.get('/', (req,res)=> {
    res.send('from / route')
})

app.get('/new/route', (req,res)=> {
    res.status(202).json({message:"from new route"})
})

app.listen(PORT, ()=> console.log(`Server started in ${PORT}`))
