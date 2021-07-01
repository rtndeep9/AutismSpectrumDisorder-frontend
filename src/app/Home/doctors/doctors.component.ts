import { Component, OnInit } from '@angular/core';
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
  constructor(private api: ApiService) { }

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

    console.log(data)
    // this.api.post('/addPatient',data).subscribe()
  }

}
