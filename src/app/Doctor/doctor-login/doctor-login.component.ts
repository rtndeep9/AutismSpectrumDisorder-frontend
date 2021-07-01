import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { DocauthService } from 'src/app/services/docauth.service';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.scss']
})
export class DoctorLoginComponent implements OnInit {

  form:any;
  payload:any;
  constructor(private api:ApiService,private router:Router,private fb:FormBuilder,private docauth:DocauthService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email:["",[Validators.required]],
      password:["",[Validators.required]],
    })
  }

  submit(){
    this.payload = this.form.value
    this.api.post("/doctor-login",this.payload).subscribe(
      next => {
        console.log(next)
        this.docauth.sendToken(next.doctor)
        this.router.navigate(["doctor/mypatients"])
      },
      error => {
        console.log(error)
      }
    )
  }

}
