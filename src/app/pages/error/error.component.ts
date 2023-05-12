import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {

  ngOnInit(){

let logStyle : string = "background: orange; color: white; font-size: 18px; border: 1px solid white; border-radius: 15px; padding: 5px;"
console.log("%c Something went wrong with the URL 😭", logStyle);


  }
}
