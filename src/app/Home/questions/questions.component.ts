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

  @ViewChild('carousel') carousel:any;

  questions = [
    {id:1,
    question:"Does your child look at you when you call his/her name?",
    options:[["Always","-1"],["Usually","-2"],["Sometimes","-3"],["Rarely","1"],["Never","2"]],
    qname:"q1",
    isRadio:true
  },{id:2,
    question:"How easy is it for you to get eye contact with your child?",
    options:[["Very Easy","-1"],["Quite Easy","-2"],["Difficult","-3"],["Very Difficult","1"],["Impossible","2"]],    
    qname:"q2",
    isRadio:true
  },
  {id:3,
    question:" Does your child point to indicate that s/he wants something? (e.g. a toy that is out of reach)",
    options:[["Many Times A Day","-1"],["A Few Times A Day","-2"],["A Few Times A Week","-3"],["Less Than Once A Week","1"],["Never","2"]],
    qname:"q3",
    isRadio:true
  }
  ]



  questionsForm:FormGroup;
  constructor(private fb:FormBuilder,private api:ApiService,private router:Router) {
    this.questionsForm = fb.group({
      q1:['',Validators.required],
      q2:['',Validators.required],
      q3:['',Validators.required],
      q4:['',Validators.required],
      q5:['',Validators.required],
      q6:['',Validators.required],
      q7:['',Validators.required],
      q8:['',Validators.required],
      q9:['',Validators.required],
      q10:['',Validators.required],
      gender:['',Validators.required],
      age:['0',Validators.required],
      jaundice:['',Validators.required],
      family:['',Validators.required],
      who:['',Validators.required],
    })
   }

  ngOnInit(): void {
  }

  async onSubmit() {
    try{
      console.log(this.questionsForm.value)
      // this.api.post("/predict",this.questionsForm.value);
      // this.router.navigate(["../result"]);

    }catch(err){
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
