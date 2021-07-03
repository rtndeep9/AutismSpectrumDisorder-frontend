import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-doctor-patients',
  templateUrl: './doctor-patients.component.html',
  styleUrls: ['./doctor-patients.component.scss']
})
export class DoctorPatientsComponent implements OnInit {
  patients: any;
  user: any;
  success = false;
  url: any;
  loading = false;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.user = localStorage.getItem('LoggedInDoctor')
    let payload = {
      "email": this.user
    }
    this.api.post("/mypatients", payload).subscribe(next => {
      this.patients = next
    })
  }

  connect(id: any) {
    let payload = {
      "email": this.user,
      "pid": id
    }
    console.log(payload)
    this.loading = true;
    this.api.post("/connect", payload).subscribe(next => {
      this.loading = false
      console.log(next)
      this.url = next
      this.success = true;
    })
    
  }

  goToUrl(): void {
    window.open(this.url, '_blank');
  }

}
