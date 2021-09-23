const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const courseSchema=new Schema({
    title:String,
    duration:String,
    description:String,
    fee:String,
    lastdate:String
});
var courseData=mongoose.model("courseData",courseSchema)
module.exports=courseData;