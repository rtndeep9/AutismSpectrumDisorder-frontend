import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { DocauthService } from 'src/app/services/docauth.service';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.scss']
})
export class DoctorLoginComponent implements OnInit {

  loginForm:any;
  payload:any;
  constructor(private api:ApiService,private router:Router,private fb:FormBuilder,private docauth:DocauthService,private toast:HotToastService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:["",[Validators.required]],
      password:["",[Validators.required]],
    })
  }

  login(){
    this.payload = this.loginForm.value
    this.api.post("/doctor-login",this.payload).subscribe(
      next => {
        this.toast.success("Successfully Logged In")
        console.log(next)
        this.docauth.sendToken(next.doctor)
        this.router.navigate(["doctor/mypatients"])
      },
      error => {
        this.toast.error(error.error)
        console.log(error)
      }
    )
  }

}
