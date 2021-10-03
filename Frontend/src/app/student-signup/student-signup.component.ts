import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { StudentService } from '../student.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.css']
})
export class StudentSignupComponent implements OnInit {

  student={
    uname:'',
    email:'',
    phone:'',
    password:''
  }
  constructor(private router:Router,private studentservice:StudentService) { }

  ngOnInit(): void {
  }
  sigupStd(){
    this.studentservice.studentSignup(this.student)
        Swal.fire({
          title: 'Success',
          text: 'loggedin',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        this.router.navigate(["student"])
      }
    
    
  
}
