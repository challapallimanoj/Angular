const express =require('express')
const  bodyParser =require('body-parser')
const cors=require('cors')

const PORT =3000

const api= require('./routes/api')

const admin = require('./routes/admin')

const product = require('./routes/product')

const app =express()

app.use(cors())

app.use(bodyParser.json())

app.use('/api',api)
app.get('/',function(req,res){
    res.send('Hello from server')
})

app.use('/admin', admin)
app.get('/', function(req,res){
    res.send('Hello from server')
})

app.use('/product', product)
app.get('/', function(req,res){
    res.send('Hello from server')
})

app.listen(PORT ,function(){
    console.log('Server running on localhost:' + PORT)
})