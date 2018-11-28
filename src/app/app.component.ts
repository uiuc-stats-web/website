import { Component, HostListener } from '@angular/core';
import { routerTransition } from './_animations/routing.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent {
  title = 'ds-web';
  @HostListener('window:scroll', ['$event']) scrollTrigger(event) {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    const max = document.documentElement.scrollHeight;
    if (pos === max) {
      console.log('at bottom');
    }
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
