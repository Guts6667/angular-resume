import { Component, OnInit } from '@angular/core';
import { Work } from 'src/app/interface/work';
import { WorkService } from 'src/app/service/work.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public works: Work[] = [];
  public breakpoint = 0;
  public limitedWorks: Work[] = [];

  constructor(public workService: WorkService) {
    this.workService.getWorks().subscribe((works) => {
      this.works = works;
      let length: number = this.works.length;
      this.works.splice(4, length);
    });
  }
}
