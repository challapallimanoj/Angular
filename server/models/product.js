const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    productname :{
       type: String,
       required :true,
       unique :true

    },
    productprice :{
        type: Number,
        required :true,
        unique :true
 
     },
     image:{
        type:String,
        required:true
     },
     minprice: {
        type: Number,
        required: true
    },
    maxprice:{
        type:Number,
        require:true
    },
    
});

module.exports = mongoose.model('product', productSchema, 'product');