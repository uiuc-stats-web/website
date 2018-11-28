import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

export const paragraphAnimation =
  trigger('contentAnimate', [
    transition('void => *', [
      query('h1, p', style({ opacity: 0 })),
      query('h1', [
        style({
          transform: 'translateX(-100px)'
        }),
        animate(
          '0.5s',
          style({
            opacity: 1,
            transform: 'translateX(0)'
          })
        ),
      ], { optional: true }),
      query('p', stagger(500, [
        style({
          transform: 'translateX(-100px)'
        }),
        animate(
          '0.5s',
          style({
            opacity: 1,
            transform: 'translateX(0)'
          })
        ),
      ]), { optional: true }),
    ])
  ]);
