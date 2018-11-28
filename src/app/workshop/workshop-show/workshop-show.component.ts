import { Component, OnInit, OnDestroy } from '@angular/core';
import { Workshop } from '../workshop.model';
import { WorkshopService } from '../workshop.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-workshop-show',
  templateUrl: './workshop-show.component.html',
  styleUrls: ['./workshop-show.component.scss']
})
export class WorkshopShowComponent implements OnInit, OnDestroy {
  workshops: Workshop[];
  private subscription: Subscription;

  constructor(private workshopService: WorkshopService) { }

  ngOnInit() {
    this.subscription = this.workshopService.fireWorkshops
      .subscribe(
        (workshops: Workshop[]) => {
          this.workshops = workshops;
          console.log(this.workshops);
        }
      );
      this.workshops = this.workshopService.getWorkshops();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
