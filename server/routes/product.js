const express =require('express')
const  router =express.Router()
const Product =require('../models/product')
const mongoose =require('mongoose')
const db= "mongodb+srv://admin:admin@cluster0.74g7s.mongodb.net/test"

mongoose.connect(db,err=>{
    if(err){
        console.error('Error!'+err)
    }
    else
    {
        console.log('Sucessfully Connected to Product Database by client "MONGODB cloud AWS connected" ')
    }
})

router.get('/',(req,res)=>{
    res.send('From PRODUCT route')
})

router.post('/register',(req,res)=>{
    let productData =req.body
    let product=new Product(productData)
    product.save((error,registeredProduct)=>{
        if(error){
            console.log(error)
        }
        else{
            res.status(200).send(registeredProduct)
        }
    })
})

module.exports = router