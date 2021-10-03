import { Component, OnInit } from '@angular/core';
import { ProfesserService } from '../professer.service';

import { Router } from '@angular/router';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  sendmail:any=""
  appliedStds:any=[]
  status:any="";
  constructor(private professer:ProfesserService,private router:Router) { }

  ngOnInit(): void {
    this.professer.getAppliedStd().subscribe((data)=>{
      this.appliedStds=data
    })
  }

  accept(user:any){
    this.professer.accept(user).subscribe(
      (res)=>{
        Swal.fire({
          title: 'accepted',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      this.router.navigate(['studentlist'])
    this.professer.sendmailto(this.sendmail)},
      (error)=>
        {
          Swal.fire({
            title: 'Warning',
            text: 'Over the Limit',
            icon: 'warning',
            confirmButtonText: 'OK'
          })
          this.router.navigate(['/studentlist'])
        }
    )
  }

  reject(user:any){
    this.professer.reject(user).subscribe(
      res=>{
        Swal.fire({
          title: 'rejected',
          icon: 'warning',
          confirmButtonText: 'OK'
        })
        this.router.navigate(['/studentlist'])
      }
    )
  }
}
