import { Component, OnInit } from '@angular/core';
import { ProfesserService } from '../professer.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {



  course:any=[]
  constructor(private professer:ProfesserService) { }

  ngOnInit(): void {
    this.professer.getCourses().subscribe(data=>{
      this.course=data
    })
  }

}
