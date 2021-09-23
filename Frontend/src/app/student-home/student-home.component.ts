import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {
  students=[{
    uname:'',
    email:'',
    phone:''
  }]
  data=localStorage.getItem("studentuname");
  constructor(private student:StudentService) { }

  ngOnInit(): void {
    this.student.getStudentId(this.data).subscribe((data)=>{
      console.log(data)
      this.students=JSON.parse(JSON.stringify(data))
    })

  }

}
