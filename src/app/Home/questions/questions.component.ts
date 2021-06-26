import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  payload: any
  user: any
  @ViewChild('carousel') carousel: any;

  questionsForm: FormGroup;
  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) {
    this.questionsForm = fb.group({
      q1: ['', Validators.required],
      q2: ['', Validators.required],
      q3: ['', Validators.required],
      q4: ['', Validators.required],
      q5: ['', Validators.required],
      q6: ['', Validators.required],
      q7: ['', Validators.required],
      q8: ['', Validators.required],
      q9: ['', Validators.required],
      q10: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.user = localStorage.getItem('LoggedInUser')
    this.user = JSON.parse(this.user)
  }

  async onSubmit() {
    try {
      console.log(this.questionsForm.value)
      this.payload = this.questionsForm.value
      this.payload.email = this.user;
      console.log(this.payload)
      this.api.post("/predict", this.payload).subscribe(
        next => {
          console.log(next)
          this.router.navigate(["/result"])
        }
      )
    } catch (err) {
      console.log(err)
    }
  }

  next() {
    this.carousel.next();
  }
  prev() {
    this.carousel.prev();
  }

}
