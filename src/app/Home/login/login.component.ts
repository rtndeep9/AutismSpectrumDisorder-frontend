import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:any;
  payload:any;
  constructor(private api:ApiService,private router:Router,private fb:FormBuilder,private auth:AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:["",[Validators.required]],
      password:["",[Validators.required]],
    })
  }

  login(){
    this.payload = this.loginForm.value
    this.api.post("/login",this.payload).subscribe(
      next => {
        console.log(next)
        this.auth.sendToken(next)
        this.router.navigate(["user"])
      },
      error => {
        console.log(error)
      }
    )
  }
}
