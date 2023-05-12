import { Component, Input, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Work } from 'src/app/interface/work';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  @Input()public works: Work[] = []

  public breakpoint = 0;
  ngOnInit() {
    this.breakpoint = window.innerWidth <= 400 ? 1 : 2;
  }

  onResize(event: Event) {
    if (event && event.target instanceof Window) {
      this.breakpoint = event.target.innerWidth <= 400 ? 1 : 2;
    }
  }
}
