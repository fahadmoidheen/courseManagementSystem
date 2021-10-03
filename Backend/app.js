const express = require('express');
const app = express();
const cors=require('cors');
const bodyparser=require('body-parser');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const nodemailer=require('nodemailer')

require('./db/connect')
const port=3000;


app.use(cors());
app.use(bodyparser.json());

//Model are here

const studentdata=require('./model/studentData');
const professerdata=require('./model/professerData');
const coursedata=require('./model/courseData');
const applyData=require('./model/applyData');


rolestudent="#";
roleprofesser="@";

//token verification--------------------start
function verifyToken(req, res, next) {
  
    if(!req.headers.authorization) {
        console.log("2222222")
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
    const professerunanme =req.params.id;
    professerdata.find({uname:professerunanme}).then((data)=>{
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

//apply course

app.post('/apply',(req,res)=>{
    
    var item={
        fname:req.body.apply.fname,
    lname:req.body.apply.lname,
    email:req.body.apply.email,
    DOB:req.body.apply.DOB,
    address:req.body.apply.address,
    qual:req.body.apply.qual,
    course:req.body.apply.course,
    status:null
    }
    var data=new applyData(item)
    data.save();
})

app.get('/getAppliedStd',(req,res)=>{
    applyData.find({"status":null})
    .then(function(data){
        res.send(data)
    })
})

//Students limit

function Studentslimit(req, res, next){
    const course=req.body.course;
    
    applyData.count({"course":course,"status":"accepted"})
    .then(data=>{
       console.log(data);
        if(data<=40){
            
            res.send();
            next();
        }else{
            res.status(401).send('sorry..over the limit')
        }
      
    })
    
}
//accepting students

app.put('/accept',Studentslimit,(req,res)=>{
    id=req.body._id
    console.log(id)
  
    applyData.findByIdAndUpdate({"_id":id},
                                {$set:{"status" : "accepted",
                                }})
   .then(function(){
       
       res.send();
   })

})
app.put('/reject',(req,res)=>{
    console.log(req.body)
    id=req.body._id
    console.log(id)
  
    applyData.findByIdAndUpdate({"_id":id},
                                {$set:{"status" : "rejected",
                                }})
   .then(function(){
       
       res.send();
   })
   
})

app.get('/acceptedList',(req,res)=>{
    applyData.find({"status":"accepted"}).then(function(acceptedList){
        res.send(acceptedList)
    })

})

//mail

app.post('/sendmail',(req,res)=>{
    
    const course=req.body.course;
    
    const accept="accepted"
    applyData.find({course:course,status:accept}, function(err, allUsers){
        console.log(allUsers);
        if(err){
            console.log(err);
        }
        var mailList = [];
        allUsers.forEach(function(users){
            mailList.push(users.email);
            return mailList;
        });
        var smtpTransport = nodemailer.createTransport({
            service: 'Gmail', 
            auth: {
                user: 'fahadmoidheen@gmail.com',
                pass: "ywyjvbzrhoyewpem"
            }
        });
        var mailOptions = {
                to: [],
                bcc: mailList,
                from: 'fahadmoidheen@gmail.com',
                subject: 'Form Accepted',
                html: '<h1>Congratulations..! </h1> \n<h4> This mail is sent from the course management system. Your application is Accepted</h4>'
            };
            smtpTransport.sendMail(mailOptions, function(err) {
                if(err){
                    // console.log(err);
                    res.status(401).send( "We seem to be experiencing issues. Please try again later.");
                    // res.redirect("/");
                }else{
                    res.send()
                console.log('mail sent to ' + mailList);
                }
            });
    });
})
const server = app.listen(3000, function () {
    let host = server.address().address
    let port = server.address().port
    console.log('server listen on port '+port);
})