const express =require('express')
const  router =express.Router()
const User =require('../models/user')
const mongoose =require('mongoose')
const db= "mongodb+srv://admin:admin@cluster0.74g7s.mongodb.net/test"

mongoose.connect(db,err=>{
    if(err){
        console.error('Error!'+err)
    }
    else
    {
        console.log('Sucessfully Connected to Forms Database by client "MONGODB cloud AWS connected" ')
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
    req.userId = payload.subject
    next()
}
router.get('/',(req,res)=>{
    res.send('From API route')
})

router.post('/register',(req,res)=>{
    let userData =req.body
    let user=new User(userData)
    user.save((error,registeredUser)=>{
        if(error){
            console.log(error)
        }
        else{
            res.status(200).send(registeredUser)
        }
    })
})

router.post('/login',(req,res)=>{
    let userData =req.body

    User.findOne({email:userData.email},(error,user)=>{
        if(error)
        {
            console.log(error)
        }
        else{
            if(!user){
                res.status(401).send('Invalid email')
            }
            else
            {
                if(user.password!==userData.password){
                    res.status(401).send('Invalid password')
                }
                else{
                    res.status(200).send(user)
                }
            }
        }
    })

})


module.exports = router