import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

import Swal from 'sweetalert2'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,public auth:AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("token1");
    localStorage.removeItem("professeremail");
    localStorage.removeItem("stduname");
    Swal.fire({
      title: 'Success',
      text: 'Logout Successfully',
      icon: 'success',
      confirmButtonText: 'OK'
    })
    
     this.router.navigate(['/']);
  }
}
