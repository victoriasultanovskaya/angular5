import {trigger, transition, state, animate, animation, style, keyframes, useAnimation} from '@angular/animations';


export let fade = trigger('fade', [

    state('void', style({opacity: 0})),
    transition(':enter, :leave', [
        style({backgroundColor: 'yellow'}),
        animate(2000)
    ])
]);

export let slideLeftToRight = trigger('slideLeftToRight', [

    state('void', style({opacity: 0})),
    transition(':enter', [
        style({transform: 'translateX(-10px)'}),
        animate(1000)
    ]),
    transition(':leave', [
        animate(500, style({transform: 'translateX(-100%)'}))
    ])
]);
