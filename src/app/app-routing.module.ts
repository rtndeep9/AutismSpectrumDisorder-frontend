import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorHomeComponent } from './Doctor/doctor-home/doctor-home.component';
import { DoctorLoginComponent } from './Doctor/doctor-login/doctor-login.component';
import { DoctorPatientsComponent } from './Doctor/doctor-patients/doctor-patients.component';
import { DoctorRegisterComponent } from './Doctor/doctor-register/doctor-register.component';
import { AuthGuard } from './guard/auth.guard';
import { AboutComponent } from './Home/about/about.component';
import { DoctorsComponent } from './Home/doctors/doctors.component';
import { HomeComponent } from './Home/home/home.component';
import { HomecontentComponent } from './Home/homecontent/homecontent.component';
import { LoginComponent } from './Home/login/login.component';
import { QuestionsComponent } from './Home/questions/questions.component';
import { RegisterComponent } from './Home/register/register.component';
import { ResultComponent } from './Home/result/result.component';
import { UserComponent } from './Home/user/user.component';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    children:[
      {path:"",component:HomecontentComponent},
      {path:"login",component:LoginComponent},
      {path:"register",component:RegisterComponent},
      {path:"about",component:AboutComponent},
      {path:"user",component:UserComponent,canActivate:[AuthGuard]},
      {path:"questions",component:QuestionsComponent,canActivate:[AuthGuard]},
      {path:"result",component:ResultComponent,canActivate:[AuthGuard]},
      {path:"doctors",component:DoctorsComponent,canActivate:[AuthGuard]},
  ]},
  {
    path:"doctor",
    component:DoctorHomeComponent,
    children:[
      {path:"doclogin",component:DoctorLoginComponent},
      {path:"docregister",component:DoctorRegisterComponent},
      {path:"mypatients",component:DoctorPatientsComponent},   
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
