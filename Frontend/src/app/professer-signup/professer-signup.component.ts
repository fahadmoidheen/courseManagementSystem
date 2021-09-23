import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { ProfesserService } from '../professer.service';

import Swal from 'sweetalert2'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-professer-signup',
  templateUrl: './professer-signup.component.html',
  styleUrls: ['./professer-signup.component.css']
})
export class ProfesserSignupComponent implements OnInit {

  professer={
    uname:"",
    email:'',
    qual:'',
    exp:'',
    password:'',
    rePass:''
  }

  constructor(private router:Router,private professerservice:ProfesserService) { }

  ngOnInit(): void {
  }
  professerSignup(){
    if(this.professer.password==this.professer.rePass){
      this.professerservice.professerSignup(this.professer)
      Swal.fire({
        title: 'Success',
        text: 'loggedin',
        icon: 'success',
        confirmButtonText: 'OK'
      })
      this.router.navigate(["PrfsrHome"])
      localStorage.setItem("professeremail",this.professer.email)
    }else{
      Swal.fire({
        title: 'Oops',
        text: 'Something wrong',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }
    
  }
}
