import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  doctors: any;
  patientData:any;
  user:any
  userAdded=false;
  constructor(private api: ApiService,private alert: AlertService,private router:Router) { }

  ngOnInit() {

     this.user = localStorage.getItem('LoggedInUser')

    console.log(this.user)
    let payload = {
      "email": this.user
    }

    this.api.post('/result', payload).subscribe(
      next => {
        this.patientData = next
        console.log(this.patientData)})

    this.api.get('/doctors').subscribe(next => {
      this.doctors = next
    })

    this.api.get("")

  }

  addPatient(doctorEmail:string){
    const data = {
      ...this.patientData,
      email:doctorEmail
    }
    this.alert.success("Success")

    console.log(data)
    this.api.post('/addpatient',data).subscribe(next => {
      console.log(next)
      this.userAdded = true;
    })
   

  }

}
