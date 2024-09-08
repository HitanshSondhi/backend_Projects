const { timeStamp } = require('console');
const mongoose=require('mongoose');
const { type } = require('os');
 
const UrlSchema=new mongoose.Schema({
    ShortId:{
        type:String,
        required:true,
        unique:true
   },
   redirectUrl:{
    type:String,
    required:true,
   },
   visitHistory:[{timeStamp:{type:Number}}],
},{timestamps:true});

const URL=mongoose.Schema('url',UrlSchema);

module.exports=URL;