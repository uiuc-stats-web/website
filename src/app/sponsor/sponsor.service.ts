import { Sponsor } from './sponsor.model';
import { Subject } from 'rxjs';

export class SponsorService {
  emitSponsors = new Subject<Sponsor[]>();
  private sponsors: Sponsor[] = [
    new Sponsor('https://via.placeholder.com/100', 'Sponsor Title', 3, 1, 'blue'),
    new Sponsor('https://via.placeholder.com/100', 'Sponsor Title', 1, 2, 'orange'),
    new Sponsor('https://via.placeholder.com/100', 'Sponsor Title', 1, 1, 'blue'),
    new Sponsor('https://via.placeholder.com/100', 'Sponsor Title', 2, 1, 'orange'),
    new Sponsor('https://via.placeholder.com/100', 'Sponsor Title', 2, 1, 'orange'),
    new Sponsor('https://via.placeholder.com/100', 'Sponsor Title', 2, 1, 'orange'),
    new Sponsor('https://via.placeholder.com/100', 'Sponsor Title', 2, 1, 'orange'),
    new Sponsor('https://via.placeholder.com/100', 'Sponsor Title', 2, 1, 'orange'),
    new Sponsor('https://via.placeholder.com/100', 'Sponsor Title', 2, 1, 'orange'),
  ];

  getSponsors() {
    return this.sponsors.slice();
  }

}
