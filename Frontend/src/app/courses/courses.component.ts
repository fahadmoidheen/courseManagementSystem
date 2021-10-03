import { Component, OnInit } from '@angular/core';
import { ProfesserService } from '../professer.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {



  course:any=[]
  constructor(private professer:ProfesserService,public auth:AuthService) { }

  ngOnInit(): void {
    this.professer.getCourses().subscribe(data=>{
      this.course=data
    })
  }

  isDisabled(lastdate:string):boolean{
    let currentDate=new Date()
   console.log(currentDate)
  
    if(currentDate<new Date(lastdate)){
      return true
    }else{
       return false
    }
  }
}
