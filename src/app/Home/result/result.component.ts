import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  isASD: any;
  constructor(private api: ApiService) { }

  ngOnInit() {
    let user: any = localStorage.getItem('LoggedInUser')

    console.log(user)
    let payload = {
      "email": user
    }

    this.api.post('/result', payload).subscribe(
      next => {
        if (next.result == '1') {
          this.isASD = true
        } else {
          this.isASD = false
        }
        console.log(next)
      }
    )
  }
}
