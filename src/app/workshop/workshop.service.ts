import { Workshop } from './workshop.model';
import { Subject } from 'rxjs';

export class WorkshopService {
  private workshops: Workshop[] = [
    new Workshop(
      'https://via.placeholder.com/150',
      'Trading Strategy',
      new Date('Sat, March 3, 2018'),
      'Siebel 1024',
      {name: 'John Doe', title: 'Product Manager'} ,
      'Ergo, si semel tristior effectus est, hilara vita amissa est? Videsne quam sit magna dissensio? At quicum ioca seria, ut dicitur, quicum arcana, quicum occulta omnia? Sed vobis voluptatum perceptarum recordatio vitam beatam facit, et quidem corpore perceptarum. Nam si amitti vita beata potest, beata esse non potest. Conferam tecum, quam cuique verso rem subicias; '
    ),
    new Workshop(
      'https://via.placeholder.com/150',
      'Trading Strategy',
      new Date('Sat, March 3, 2018'),
      'Siebel 1024',
      { name: 'John Doe', title: 'Product Manager' },
      'Ergo, si semel tristior effectus est, hilara vita amissa est? Videsne quam sit magna dissensio? At quicum ioca seria, ut dicitur, quicum arcana, quicum occulta omnia? Sed vobis voluptatum perceptarum recordatio vitam beatam facit, et quidem corpore perceptarum. Nam si amitti vita beata potest, beata esse non potest. Conferam tecum, quam cuique verso rem subicias; '
    ),
    new Workshop(
      'https://via.placeholder.com/150',
      'Trading Strategy',
      new Date('Sat, March 3, 2018'),
      'Siebel 1024',
      { name: 'John Doe', title: 'Product Manager' },
      'Ergo, si semel tristior effectus est, hilara vita amissa est? Videsne quam sit magna dissensio? At quicum ioca seria, ut dicitur, quicum arcana, quicum occulta omnia? Sed vobis voluptatum perceptarum recordatio vitam beatam facit, et quidem corpore perceptarum. Nam si amitti vita beata potest, beata esse non potest. Conferam tecum, quam cuique verso rem subicias; '
    ),
  ];
  fireWorkshops = new Subject<Workshop[]>();

  getWorkshops() {
    return this.workshops.slice();
  }
}
