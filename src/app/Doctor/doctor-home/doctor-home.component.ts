import { Component, OnInit } from '@angular/core';
import { DocauthService } from 'src/app/services/docauth.service';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.scss']
})
export class DoctorHomeComponent implements OnInit {

  constructor(public docauth:DocauthService) { }

  ngOnInit(): void {
  }

}
