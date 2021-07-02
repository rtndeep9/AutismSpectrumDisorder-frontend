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

  registerForm:any;
  payload:any;
  response:any;
  user:any;
  qualifications = ["MBBS","MD","MS","DNB","DM","M.ch"]; 
  designations = ["Child Psychiatrist","Psychologist","Pediatric Neurologist","Developmental Pediatrician"]; 
  constructor(private api:ApiService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name:["",[Validators.required]],
      designation:["",[Validators.required]],
      qualification:["",[Validators.required]],
      experience:["",[Validators.required]],
      contact:["",[Validators.required]],
      email:["",[Validators.required]],
      password:["",[Validators.required]],
      checkPassword:["",[Validators.required]],
      url:["",[Validators.required]],
    })  
  }

  register(){
    this.payload = this.registerForm.value;
    console.log(this.payload)
    
    this.api.post("/doctor-register",this.payload).subscribe(
      next => {
        console.log(next)
        this.router.navigate(["doctor/doclogin"])
      },
      error => {
        console.log(error)
      }
    )
  }

}
