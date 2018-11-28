import { trigger, transition, query, style, group, animate, stagger, animateChild } from '@angular/animations';
export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(
      ':enter, :leave',
      style({
        position: 'fixed',
        width: '100%'
      }),
      { optional: true}
    ),
    group([
      query(':enter', [
        style({
          transform: 'translateY(100%)'
        }),
        animate(
          '0.5s ease-in-out',
          style({
            transform: 'translateY(0%)'
          })
        ),
        animateChild()
      ], {optional: true}),
      query(':leave', [
        style({
          transform: 'translateY(0%)'
        }),
        animate(
          '0.5s ease-in-out',
          style({
            transform: 'translateY(-100%)'
          })
        ),
        animateChild()
      ], { optional: true }),
      query('@contentAnimate', stagger(3000, animateChild()), { optional: true }),
      query('@list', stagger(500, animateChild()), { optional: true}),
    ]),
  ])
]);
