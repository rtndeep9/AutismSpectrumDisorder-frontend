import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { LoginComponent } from './Home/login/login.component';
import { QuestionsComponent } from './Home/questions/questions.component';
import { RegisterComponent } from './Home/register/register.component';
import { ResultComponent } from './Home/result/result.component';

const routes: Routes = [
  {path:"",
  component:HomeComponent,
  children:[
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent}
]},
{path:"questions",component:QuestionsComponent},
{path:"result",component:ResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
