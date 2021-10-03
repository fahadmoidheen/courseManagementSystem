import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  student={
    uname:'',
    email:'',
    phone:'',
    password:''
  }
  std={
    uname:'',
    password:''
  }

  constructor(private http:HttpClient) { }

  studentSignup(item:any){
    return this.http.post("http://localhost:3000/stdSignup",{item})
    .subscribe(data => { console.log(data) })
  }
  getStudentId(uname:any){
    return  this.http.get("http://localhost:3000/studentID/"+uname)
  }
  

  applyForm(apply:any){
    return this.http.post("http://localhost:3000/apply",{apply})
    .subscribe(
      err=>{
        console.log(err);
      }
    )
  }

}
