import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
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
      {path:"user",component:UserComponent,canActivate:[AuthGuard]},
      {path:"questions",component:QuestionsComponent,canActivate:[AuthGuard]},
      {path:"result",component:ResultComponent,canActivate:[AuthGuard]},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
