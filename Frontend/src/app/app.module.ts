import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { HttpClient, HttpClientModule,HttpInterceptor } from '@angular/common/http';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentComponent } from './student/student.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import {MatTabsModule} from "@angular/material/tabs";
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { AddcoursesComponent } from './addcourses/addcourses.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { ProfesserLoginComponent } from './professer-login/professer-login.component';
import { ProfesserSignupComponent } from './professer-signup/professer-signup.component';
import { FooterComponent } from './footer/footer.component';
import { ProfesserHomeComponent } from './professer-home/professer-home.component';
import { CoursesComponent } from './courses/courses.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentsapplyComponent } from './studentsapply/studentsapply.component';
import { AcceptedStdListComponent } from './accepted-std-list/accepted-std-list.component'

import { TokenInterceptorService } from './token-interceptor.service';
import { AuthService } from './auth.service';
import { StudentService } from './student.service';
import { ProfesserService } from './professer.service';
import { AuthGuard } from './auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    StudentComponent,
    StudentSignupComponent,
    AddcoursesComponent,
    StudentHomeComponent,
    ProfesserLoginComponent,
    ProfesserSignupComponent,
    FooterComponent,
    ProfesserHomeComponent,
    CoursesComponent,
    StudentlistComponent,
    StudentsapplyComponent,
    AcceptedStdListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule    
  ],
  providers: [AuthService,StudentService,ProfesserService,AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
