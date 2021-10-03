import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { ProfesserService } from '../professer.service';
import { AuthService } from '../auth.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-professer-login',
  templateUrl: './professer-login.component.html',
  styleUrls: ['./professer-login.component.css']
})
export class ProfesserLoginComponent implements OnInit {
  professer={
    uname:"",
    password:""
  }
  constructor(private router:Router,private _auth:AuthService ) { }

  ngOnInit(): void {
  }

  professerLogin(){

    this._auth.professerLogin(this.professer)
    .subscribe(
      res=>{
        localStorage.setItem('token1', res.token);
        
        Swal.fire("Succesfully logged in")
          .then(()=>{
      this.router.navigate(["PrfsrHome"])})
      localStorage.setItem("professeruname",this.professer.uname)
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
  }

}
