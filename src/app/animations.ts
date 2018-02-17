import {trigger, transition, state, animate, animation, style, keyframes, useAnimation} from '@angular/animations';

let bounceOutLeftAnimation = animation(
    animate(
        '0.5s 1s ease-in',
        // https://github.com/daneden/animate.css/blob/master/source/bouncing_exits/bounceOutLeft.css
        keyframes([
            style({offset: 0.2, opacity: 1, transform: 'translate3d(20px, 0, 0)'}),
            style({offset: 1, opacity: 0, transform: 'translate3d(-2000px, 0, 0)'})
        ])
    )
);

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
    transition(':leave', [])
]);

export let todoAnimation = trigger('todoAnimation', [
    transition(':enter', [
        style({opacity: 0}),
        animate(2000)
    ]),
    transition(':leave', [
        style({backgroundColor: 'red'}),
        animate(2000),
        useAnimation(bounceOutLeftAnimation)
    ])
]);
