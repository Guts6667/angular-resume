import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Work } from 'src/app/interface/work';
import { WorkService } from 'src/app/service/work.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  public works: Work[] = [];
  public breakpoint = 0;

  constructor(public workService: WorkService) {
    this.workService.getWorks().subscribe((works) => (this.works = works));
  }

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 400 ? 1 : 2;
  }

  onResize(event: Event) {
    if (event && event.target instanceof Window) {
      this.breakpoint = event.target.innerWidth <= 400 ? 1 : 2;
    }
  }
}
