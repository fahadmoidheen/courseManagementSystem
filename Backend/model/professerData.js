const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/tcsDB');
const Schema=mongoose.Schema;
const professerSignup=new Schema({
    uname:String,
    email:String,
    qual:String,
    exp:String,
    password:String
})
var professerData=mongoose.model("professerData",professerSignup)
module.exports=professerData