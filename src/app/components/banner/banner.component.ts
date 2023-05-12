import { Component, Input } from '@angular/core';
import { Work } from 'src/app/interface/work';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() work : Work | null = null;

}
