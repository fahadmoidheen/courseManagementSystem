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
  getProfesserId(uname:any){
    return  this.http.get("http://localhost:3000/professerID/"+uname)
  }

  addCourse(item:any){
    return this.http.post("http://localhost:3000/addCourse",{item})
    .subscribe(data => { console.log(data) })
  }
  getCourses(){
    return  this.http.get("http://localhost:3000/getCourse")
  }
  getAppliedStd(){
    return  this.http.get("http://localhost:3000/getAppliedStd")
  }
  accept(user:any){
    return this.http.put("http://localhost:3000/accept",user)
  }
  reject(user:any){
    return this.http.put("http://localhost:3000/reject",user)
  }
acceptedList(){
  return this.http.get("http://localhost:3000/acceptedList")
}
sendmailto(items:any){
    
  return this.http.post('http://localhost:3000/sendmail',{"course":items})
   
}
}
