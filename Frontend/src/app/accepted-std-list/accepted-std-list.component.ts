import { Component, OnInit } from '@angular/core';
import { ProfesserService } from '../professer.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-accepted-std-list',
  templateUrl: './accepted-std-list.component.html',
  styleUrls: ['./accepted-std-list.component.css']
})
export class AcceptedStdListComponent implements OnInit {

  acceptedstds:any=[];
  coursemail='';
  courses:any=[]
  constructor(private professer:ProfesserService) { }

  ngOnInit(): void {
    this.professer.acceptedList().subscribe((data)=>{
      this.acceptedstds=data;
    })
    this.professer.getCourses().subscribe((data)=>{
      this.courses=data;
    })
  }

  sentmail(){
    if(!this.coursemail){
      Swal.fire({
        title: 'warning',
        text: 'Please select a course',
        icon: 'warning',
        confirmButtonText: 'OK'
      })
    }else{
      this.professer.sendmailto(this.coursemail)
      .subscribe(
        res => {
          Swal.fire({
            title: 'Success',
            text: 'Mail sent',
            icon: 'success',
            confirmButtonText: 'OK'
          })
         
        },
        err => {
          console.log(err);
          Swal.fire({
            title: 'Error',
            text: 'No One Applied this course',
            icon: 'error',
            confirmButtonText: 'OK'
          })
          
        }) 
       
      }   
  }

}
