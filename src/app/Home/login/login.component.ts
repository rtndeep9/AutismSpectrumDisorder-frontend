import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:any;
  payload:any;
  constructor(private api:ApiService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email:["",[Validators.required]],
      password:["",[Validators.required]],
    })
  }

  submit(){
    this.payload = this.form.value
    this.api.post("/login",this.payload).subscribe(
      next => {
        console.log(next)
        this.router.navigate(["questions"])
      },
      error => {
        console.log(error)
      }
    )
  }
}
