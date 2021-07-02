import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  alert$: Observable<any>;
  constructor(private alertService: AlertService) {
    this.alert$ = alertService.getObservable();
  }

  ngOnInit(): void {
  }

  close() {
    this.alertService.close();
  }

}
