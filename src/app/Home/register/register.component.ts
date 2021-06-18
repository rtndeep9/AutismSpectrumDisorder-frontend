import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form:any;
  payload:any;
  response:any;
  constructor(private api:ApiService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name:["",[Validators.required]],
      email:["",[Validators.required]],
      password:["",[Validators.required]],
      checkpassword:["",[Validators.required]]
    })
  }

  submit(){
    this.payload = this.form.value
    this.api.post("/register",this.payload).subscribe(
      next => {
        console.log(next)
        this.router.navigate(["login"])
      },
      error => {
        console.log(error)
      }
    )
  }

}
