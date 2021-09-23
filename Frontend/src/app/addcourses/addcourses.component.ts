import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { ProfesserService } from '../professer.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-addcourses',
  templateUrl: './addcourses.component.html',
  styleUrls: ['./addcourses.component.css']
})
export class AddcoursesComponent implements OnInit {
  courses={
    title:'',
    duration:'',
    description:'',
    fee:'',
    lastdate:''
  }
  constructor(private router:Router , private professerservice:ProfesserService) { }

  ngOnInit(): void {
  }

  addCourse(){
    this.professerservice.addCourse(this.courses)
    Swal.fire({
      title: 'Success',
      text: 'Course added',
      icon: 'success',
      confirmButtonText: 'OK'
    })
    this.router.navigate(["courses"])
  }

}
