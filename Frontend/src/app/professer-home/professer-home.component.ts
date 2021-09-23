import { Component, OnInit } from '@angular/core';
import { ProfesserService } from '../professer.service';

@Component({
  selector: 'app-professer-home',
  templateUrl: './professer-home.component.html',
  styleUrls: ['./professer-home.component.css']
})
export class ProfesserHomeComponent implements OnInit {
  professers=[{
    uname:"",
    email:'',
    qual:'',
    exp:'',
    password:'',
    rePass:''
  }]

  data=localStorage.getItem("professeremail");
  constructor(private professer:ProfesserService) { }

  ngOnInit(): void {
    this.professer.getProfesserId(this.data).subscribe((data)=>{
      console.log(data)
      this.professers=JSON.parse(JSON.stringify(data))
    })
  }


}
