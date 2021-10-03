import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';




import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { AddcoursesComponent } from './addcourses/addcourses.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { ProfesserLoginComponent } from './professer-login/professer-login.component';
import { ProfesserSignupComponent } from './professer-signup/professer-signup.component';
import { ProfesserHomeComponent } from './professer-home/professer-home.component';
import { CoursesComponent } from './courses/courses.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentsapplyComponent } from './studentsapply/studentsapply.component';
import { AcceptedStdListComponent } from './accepted-std-list/accepted-std-list.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"student",component:StudentComponent},
  {path:"stdSignup",component:StudentSignupComponent},
  {path:"addcourse",component:AddcoursesComponent ,canActivate:[AuthGuard]},
  {path:"stdHome",component:StudentHomeComponent},
  {path:"pfsrLogin",component:ProfesserLoginComponent},
  {path:"pfsrSignup",component:ProfesserSignupComponent},
  {path:"PrfsrHome",component:ProfesserHomeComponent},
  {path:"courses",component:CoursesComponent},
  {path:"studentlist",component:StudentlistComponent,canActivate:[AuthGuard]},
  {path:"apply",component:StudentsapplyComponent},
  {path:"acceptedstudents",component:AcceptedStdListComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            [FormsModule],[ReactiveFormsModule]],
  exports: [RouterModule]
})
export class AppRoutingModule { }
