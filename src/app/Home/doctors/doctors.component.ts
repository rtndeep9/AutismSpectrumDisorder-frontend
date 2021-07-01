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
  constructor(private api: ApiService) { }

  ngOnInit() {

    let user: any = localStorage.getItem('LoggedInUser')

    console.log(user)
    let payload = {
      "email": user
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

}
