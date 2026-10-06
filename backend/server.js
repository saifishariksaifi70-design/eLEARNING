const express = require('express')
const cors = require('cors')
const path = require('path')
const fs = require('fs')
const { json } = require('stream/consumers')
const console = require('console')

const app = express()

app.use(cors())
app.use(express.json())

app.post('/api/contact',(req,res)=>{
    const {name,email,number,message} = req.body
    const filePath = path.join(__dirname,"Data","contact.json")
      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, "[]")
    }
    const users = JSON.parse(fs.readFileSync(filePath,"utf-8"))

    const newUser = {
        name,
        email,
        number,
        message
    }
    users.push(newUser)

    fs.writeFileSync(filePath, JSON.stringify(users, null, 2))
    res.status(200).json({
        message:"Message Successfully"
    })
})

app.post('/api/review',(req,res)=>{
    const {review,name,rating} = req.body
    const filePath = path.join(__dirname,"Data","review.json")
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, "[]")
    }
    const user = JSON.parse(fs.readFileSync(filePath,"utf-8"))

    const newUser = {
        review,
        name,
        rating,
        
    }
    user.push(newUser)
    fs.writeFileSync(filePath,JSON.stringify(user, null, 2))

    res.json({
  message: "your Review successfully"
})
})

app.get('/api/review',(req,res)=>{
    const filePath = path.join(__dirname, "Data","review.json")

    const reviews = JSON.parse(
        fs.readFileSync(filePath,"utf-8")
    )
    res.json(reviews)
})

app.get('/',(req,res)=>{
    res.send('Home page')
})

app.listen(3000, ()=>{
    console.log('http://localhost:3000')
})