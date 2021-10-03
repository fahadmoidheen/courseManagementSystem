const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const applySchema=new Schema({
    fname:String,
    lname:String,
    email:String,
    DOB:String,
    address:String,
    qual:String,
    course:String,
    status:String
});
var applyData=mongoose.model("applyData",applySchema)
module.exports=applyData; 