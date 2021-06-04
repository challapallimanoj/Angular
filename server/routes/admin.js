const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const Admin = require('../models/admin')
const mongoose = require('mongoose')
const db = "mongodb+srv://admin:admin@cluster0.74g7s.mongodb.net/test"

mongoose.connect(db,err => {
    if (err ){
        console.error('Error!' +err )
    } else {
        console.log('Sucessfully Connected to Admin Database by client "MONGODB cloud AWS connected"')
    }
})

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('unauthorized token')
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token === 'null') {
        return res.status(401).send('unauthorized token')
    } 
    let payload = jwt.verify(token, 'secretkey')
    if(!payload) {
        return res.status(401).send('unauthorized token')
    }
    req.adminId = payload.subject
    next()
}

router.get('/', (req,res) => {
    res.send('From Admin route')
})

router.post('/register', (req,res) => {
    let adminData = req.body
    let admin = new Admin(adminData)
    admin.save((error, registeredAdmin) =>{
        if (error){
            console.log(error)
        } else {
            let payload = { subject: registeredAdmin._id}
            let token = jwt.sign(payload, 'secretkey')
            res.status(200).send({token})
        }
    })
})

router.post('/login', (req,res) => {
    let adminData = req.body

    Admin.findOne({email: adminData.email}, (error, admin) => {
        if (error) {
            console.log(error)
        } else {
            if(!admin) {
                res.status(401).send('Invalid email')
            } else
            if ( admin.password !== adminData.password){
                res.status(401).send('Invalid password')
            } else
            if(admin == null | admin.password == null)
            {
              res.status(401).send('Enter credentials')
            } 
            else {
                let payload = { subject: admin._id}
                let token = jwt.sign(payload, 'secretKey')
                res.status(200).send({token})
            }
        }
    })
})

module.exports = router