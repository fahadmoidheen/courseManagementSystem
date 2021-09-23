const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const studentSchema=new Schema({
    uname:String,
    email:String,
    phone:String,
    password:String
});
var studentData=mongoose.model("studentData",studentSchema)
module.exports=studentData;