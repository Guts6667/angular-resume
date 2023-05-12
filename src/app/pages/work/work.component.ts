import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Work } from 'src/app/interface/work';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  public work : any = null;

  constructor(private router : Router, private activatedRoute:ActivatedRoute){
  }

  ngOnInit(){
    this.work = history.state;
    console.log(this.work);


  }
}
