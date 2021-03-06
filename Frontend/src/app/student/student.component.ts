import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { StudentService } from '../student.service';
import { AuthService } from '../auth.service';

import Swal from 'sweetalert2'


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  std={
    uname:"",
    password:""
  }

  constructor(private router:Router,private _auth:AuthService ) { }

  ngOnInit(): void {
  }
  loginstd(){
    this._auth.studentLogin(this.std)
    .subscribe(
      res=>{

        localStorage.setItem('token', res.token);
        
        Swal.fire("Succesfully logged in")
          .then(()=>{
      this.router.navigate(["stdHome"])})
      localStorage.setItem("studentuname",this.std.uname)
      },
      err=>{
        console.log(err)
        if(err.status===409){
          Swal.fire ("Incorrect credentials")
        }else{
          Swal.fire("Invalid Email or Password")
        }
      }
      )
      localStorage.setItem("stduname",this.std.uname)
  }
  

  
}
