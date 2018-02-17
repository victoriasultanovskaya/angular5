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
        animate('0.5s 0s cubic-bezier(.06,.99,.89,.06)')
    ]),
    transition(':leave', [
        animate(
            '0.5s 1s ease-in',
            // https://github.com/daneden/animate.css/blob/master/source/bouncing_exits/bounceOutLeft.css
            keyframes([
                style({offset: 0.2, opacity: 1, transform: 'translate3d(20px, 0, 0)'}),
                style({offset: 1, opacity: 0, transform: 'translate3d(-2000px, 0, 0)'})
            ])
        )
    ])
]);
