import { Component, OnInit, OnDestroy } from '@angular/core';
import { Sponsor } from './sponsor.model';
import { SponsorService } from './sponsor.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.scss']
})
export class SponsorComponent implements OnInit, OnDestroy {
  sponsors: Sponsor[];
  private subscription: Subscription;

  constructor(private sponsorService: SponsorService) { }

  ngOnInit() {
    this.subscription = this.sponsorService.emitSponsors.subscribe(
      (sponsors: Sponsor[]) => {
        this.sponsors = sponsors;
      }
    );
    this.sponsors = this.sponsorService.getSponsors();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
