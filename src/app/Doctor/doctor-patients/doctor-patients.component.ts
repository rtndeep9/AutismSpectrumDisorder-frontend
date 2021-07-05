import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-doctor-patients',
  templateUrl: './doctor-patients.component.html',
  styleUrls: ['./doctor-patients.component.scss']
})
export class DoctorPatientsComponent implements OnInit {
  patients: any;
  doctorName:any;
  user: any;
  success = false;
  url: any;
  loading = false;
  constructor(private api: ApiService,private toast:HotToastService) { }

  ngOnInit() {
    this.user = localStorage.getItem('LoggedInDoctor')
    let payload = {
      "email": this.user
    }

    this.api.post("/doctorname", payload).subscribe(next => {
      this.doctorName = next
    })

    this.api.post("/mypatients", payload).pipe(
      this.toast.observe({
        loading:"Loading patients",
        success:"Successfully loaded",
        error:"Error"
      })
    ).subscribe(next => {
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
    this.api.post("/connect", payload).pipe(
      this.toast.observe({
        loading:"Sending SMS",
        success:"SMS Sent",
        error:"Error Occured"
      })
    ).subscribe(next => {
      console.log(next)
      this.url = next
      this.success = true;
    })
    
  }

  goToUrl(): void {
    window.open(this.url, '_blank');
  }

}
