import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { DocauthService } from 'src/app/services/docauth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  greet:any;
  constructor(private api:ApiService,public auth:AuthService,public docauth:DocauthService) { }

  ngOnInit(): void {
    this.greeting()
  }

  greeting(){
    this.api.get("/hello").subscribe(
      next => {
        this.greet = next
      }
    )
  }

}
