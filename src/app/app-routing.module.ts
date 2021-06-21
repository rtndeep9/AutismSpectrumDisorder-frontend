import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { HomecontentComponent } from './Home/homecontent/homecontent.component';
import { LoginComponent } from './Home/login/login.component';
import { QuestionsComponent } from './User/questions/questions.component';
import { RegisterComponent } from './Home/register/register.component';
import { ResultComponent } from './User/result/result.component';
import { UserComponent } from './User/user/user.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    children:[
      {path:"",component:HomecontentComponent},
      {path:"login",component:LoginComponent},
      {path:"register",component:RegisterComponent},
  ]},
  {
    path:"user",
    component:UserComponent,
    children:[
      { path:"questions",component:QuestionsComponent},
      { path:"result",component:ResultComponent},
      { path: "", redirectTo: "user", pathMatch: "full" },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
