import { Component, OnInit, Input } from '@angular/core';
import { listAnimation } from 'src/app/_animations/list.animation';

@Component({
  selector: 'app-workshop-item',
  templateUrl: './workshop-item.component.html',
  styleUrls: ['./workshop-item.component.scss'],
  animations: [listAnimation]
})
export class WorkshopItemComponent implements OnInit {
  @Input() workshop;

  constructor() { }

  ngOnInit() {
  }

}
