import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { ProfesserService } from '../professer.service';
import { StudentService } from '../student.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-studentsapply',
  templateUrl: './studentsapply.component.html',
  styleUrls: ['./studentsapply.component.css']
})
export class StudentsapplyComponent implements OnInit {
  courses:any=[];


  applyform={
    fname:'',
    lname:'',
    email:'',
    DOB:'',
    address:'',
    qual:'',
    course:''
  }
  constructor(private professer:ProfesserService,private router:Router,private student:StudentService) { }

  ngOnInit(): void {
    this.professer.getCourses().subscribe(data=>{
      this.courses=data
    })
  }
  applyCourse(){
    this.student.applyForm(this.applyform)
    Swal.fire({
      title: 'Success',
      text: 'Applied',
      icon: 'success', 
      confirmButtonText: 'OK'
    })
    this.router.navigate(["courses"])
  }

}
