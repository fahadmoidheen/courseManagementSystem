import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
 professerLogin(prfsr:any){
    return this.http.post<any>("http://localhost:3000/prfsrLogin",prfsr)
  }
  studentLogin(std:any){
    return this.http.post<any>("http://localhost:3000/stdLogin",std)
  }
  StudentloggedIn(){
    return !!localStorage.getItem('token')
  }
  ProfessorloggedIn(){
    return !!localStorage.getItem('token1')
  }
  getToken(){
    return localStorage.getItem('token') 
  }
  
}
