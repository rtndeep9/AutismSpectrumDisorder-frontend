import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  payload:any;
  detailsForm:FormGroup;
  constructor(private fb:FormBuilder,private api:ApiService,private router:Router) { 

  this.detailsForm = fb.group({
    childName:['',Validators.required],
    gender:['',Validators.required],
    age:['0',Validators.required],
    jaundice:['',Validators.required],
    family:['',Validators.required],
    who:['',Validators.required],
  })
}

  ngOnInit() {
  }

  async onSubmit() {
    try{
      console.log(this.detailsForm.value)
      this.payload = this.detailsForm.value
      this.api.post("/details",this.payload).subscribe(
        next => {
          console.log(next)
          this.router.navigate(["/questions"])
        }
      )
    }catch(err){
      console.log(err)
    }
  }
}
