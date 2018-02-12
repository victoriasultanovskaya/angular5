import {trigger, transition, state, animate, animation, style, keyframes, useAnimation} from '@angular/animations';


export let fade = trigger('fade', [

    state('void', style({opacity: 0})),
    transition(':enter, :leave', [
        style({backgroundColor: 'yellow'}),
        animate(2000)
    ])
]);
