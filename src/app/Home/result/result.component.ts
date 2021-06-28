import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  result : any;
  constructor(private api: ApiService) { }

  async ngOnInit() {
    let user:any = localStorage.getItem('LoggedInUser')
    
    console.log(user)
    let payload = {
      "email":user
    }

    this.api.post('/result',payload).subscribe(
      next => {
        console.log(next)
      }
    )
  }

}
