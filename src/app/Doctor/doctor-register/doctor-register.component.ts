import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.scss']
})
export class DoctorRegisterComponent implements OnInit {

  form:any;
  payload:any;
  response:any;
  user:any; 
  constructor(private api:ApiService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username:["",[Validators.required]],
      email:["",[Validators.required]],
      password:["",[Validators.required]],
      checkPassword:["",[Validators.required]]
    })

   
  }

  submit(){
    this.payload = this.form.value;
    
    this.api.post("/doctor-register",this.payload).subscribe(
      next => {
        console.log(next)
        this.router.navigate(["doctor/login"])
      },
      error => {
        console.log(error)
      }
    )
  }

}
