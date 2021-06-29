import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  doctors: any
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.get('/doctors').subscribe(next => {
      this.doctors = next
    })
  }

}
