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

  registerForm:any;
  payload:any;
  response:any;
  user:any; 
  constructor(private api:ApiService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username:["",[Validators.required]],
      email:["",[Validators.required]],
      password:["",[Validators.required]],
      checkPassword:["",[Validators.required]]
    })

   
  }

  register(){
    this.payload = this.registerForm.value;
    console.log(this.payload)
    
    // this.api.post("/register",this.payload).subscribe(
    //   next => {
    //     console.log(next)
    //     this.router.navigate(["login"])
    //   },
    //   error => {
    //     console.log(error)
    //   }
    // )
  }

}
