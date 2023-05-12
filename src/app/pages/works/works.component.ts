import { Component } from '@angular/core';
import { Work } from 'src/app/interface/work';
import { WorkService } from 'src/app/service/work.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {
  public works: Work[] = [];
  public breakpoint = 0;
  public limitedWorks: Work[] = [];

  constructor(public workService: WorkService) {
    this.workService.getWorks().subscribe((works) => {
      this.works = works;
    });
  }
}
