import { Component, OnInit, OnDestroy } from '@angular/core';
import { SDayItem } from '../sDayItem.model';
import { ScheduleService } from '../schedule.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-schedule-show',
  templateUrl: './schedule-show.component.html',
  styleUrls: ['./schedule-show.component.scss'],
})
export class ScheduleShowComponent implements OnInit, OnDestroy {
  items: SDayItem[];
  private subscription: Subscription;

  constructor(private sService: ScheduleService) { }

  ngOnInit() {
    this.subscription = this.sService.fireItems.subscribe(
      (items: SDayItem[]) => {
        this.items = items;
        console.log(this.items);
      }
    );
    this.items = this.sService.getItems();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
