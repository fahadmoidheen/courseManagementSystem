const express = require('express');
const app = express();
const cors=require('cors');
const bodyparser=require('body-parser');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

require('./db/connect')
const port=3000;


app.use(cors());
app.use(bodyparser.json());

//Model are here

const studentdata=require('./model/studentData');
const professerdata=require('./model/professerData');
const coursedata=require('./model/courseData')


rolestudent="#";
roleprofesser="@"

//token verification--------------------start
function verifyToken(req, res, next) {
  
    if(!req.headers.authorization) {
      
  
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }



//token verification--------------------ends

//Students 

app.post('/stdSignup',(req,res)=>{
    console.log(req.body)
    var item={
        uname:req.body.item.uname,
        email:req.body.item.email,
        phone:req.body.item.phone,
        password:req.body.item.password
    }
    console.log("1st")
    var student= new studentdata(item);
    console.log("2st")
    student.save();
    console.log("3st")

})

app.get('/studentID/:id',(req,res)=>{
    const studentuname =req.params.id
    studentdata.find({uname:studentuname}).then((data)=>{
        res.send(data)
    })
    
})

app.post('/stdLogin',async(req,res)=>{
    const uname =req.body.uname;
    const password=req.body.password;

    let stddata=await studentdata.findOne({uname:uname})

    if(stddata==null){
        console.log("null")
        return res.status(404).send("userdata does not present") 
    }else if(stddata.uname===uname && stddata.password===password){
        let payload = {subject: uname+rolestudent}
        let token = jwt.sign(payload, 'secretKey')
        console.log(token)
         return res.status(200).send({token})
    }else{
        
        return res.status(401).send("Something went wrong..Try again")
    }
})



//Professer starts here

app.post('/prfsrSignup',(req,res)=>{
    console.log(req.body)
    var item={
        uname:req.body.item.uname,
        email:req.body.item.email,
        qual:req.body.item.qual,
        exp:req.body.item.exp,
        password:req.body.item.password
    }
    var data= new professerdata(item)
    data.save();

})

app.get('/professerID/:id',(req,res)=>{
    const professeremail =req.params.id;
    professerdata.find({email:professeremail}).then((data)=>{
        res.send(data)
    })
    
})

app.post('/prfsrLogin',async(req,res)=>{
    const uname =req.body.uname;
    const password=req.body.password;

    let prfsrdata=await professerdata.findOne({uname:uname})

    if(prfsrdata==null){
        console.log("null")
        return res.status(404).send("userdata does not present") 
    }else if(prfsrdata.uname===uname && prfsrdata.password===password){
        let payload = {subject: uname+roleprofesser}
        let token = jwt.sign(payload, 'secretKey')
         return res.status(200).send({token})
    }else{
        
        return res.status(401).send("Something went wrong..Try again")
    }
})

// Professer ends here


//Courses

app.post('/addCourse',(req,res)=>{
    console.log(req.body)
    var item={
        title:req.body.item.title,
        duration:req.body.item.duration,
        description:req.body.item.description,
        fee:req.body.item.fee,
        lastdate:req.body.item.lastdate
    }
    var data= new coursedata(item)
    data.save();

})
app.get('/getCourse',(req,res)=>{
    coursedata.find()
    .then(function(data){
        res.send(data)
    })
})



const server = app.listen(3000, function () {
    let host = server.address().address
    let port = server.address().port
    console.log('server listen on port '+port);
})