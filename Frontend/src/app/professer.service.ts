import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfesserService {


  prfsr={
    uname:'',
    password:''
  }
  constructor(private http:HttpClient) { }
  professerSignup(item:any){
    return this.http.post("http://localhost:3000/prfsrSignup",{item})
    .subscribe(data => { console.log(data) })
  }
  getProfesserId(email:any){
    return  this.http.get("http://localhost:3000/professerID/"+email)
  }

  addCourse(item:any){
    return this.http.post("http://localhost:3000/addCourse",{item})
    .subscribe(data => { console.log(data) })
  }
  getCourses(){
    return  this.http.get("http://localhost:3000/getCourse")
  }

  professerLogin(prfsr:any){
    return this.http.post<any>("http://localhost:3000/prfsrLogin",prfsr)
  }
}
