import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  StudentloggedIn(){
    return !!localStorage.getItem('token')
  }
  ProfessorloggedIn(){
    return !!localStorage.getItem('token1')
  }
}
