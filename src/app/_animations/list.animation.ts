import { trigger, style, state, transition, animate, keyframes } from '@angular/animations';

export const listAnimation = trigger('list', [
  state('in', style({
    opacity: 1,
    transform: 'translateX(0)'
  })),
  transition('void => *', [
    animate(500, keyframes([
      style({
        transform: 'translateX(-100px)',
        opacity: 0,
        offset: 0
      }),
      style({
        transform: 'translateX(-50px)',
        opacity: 0.5,
        offset: 0.3
      }),
      style({
        transform: 'translateX(-20px)',
        opacity: 1,
        offset: 0.8
      }),
      style({
        transform: 'translateX(0)',
        opacity: 1,
        offset: 1
      }),
    ]))
  ]),
]);
