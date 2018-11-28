import { Component, OnInit } from '@angular/core';
import { paragraphAnimation } from '../_animations/paragraph.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [paragraphAnimation]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
