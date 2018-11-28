import { Component, OnInit, Input } from '@angular/core';
import { listAnimation } from 'src/app/_animations/list.animation';

@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss'],
  animations: [ listAnimation ]
})
export class ScheduleItemComponent implements OnInit {
  @Input() itemlist;

  constructor() { }

  ngOnInit() {
  }

}
