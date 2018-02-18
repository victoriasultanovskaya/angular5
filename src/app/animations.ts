import {
    trigger, transition, state, animate, animation, style, keyframes, query, useAnimation, animateChild,
    group, stagger
} from '@angular/animations';

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

let fadeInAnimation = animation([
        style({opacity: 0}),
        animate('{{ duration }} {{ easing }}')
    ], {
        params: {
            duration: '2s',
            easing: 'ease-out'
        }
    }
);

let fadeOutAnimation = animation([
    animate(2000, style({opacity: 0}))
]);

export let fade = trigger('fade', [
    transition(':enter',
        useAnimation(fadeInAnimation, {
            params: {
                duration: '5s'
            }
        })
    ),
    transition(':leave', [
        useAnimation(fadeOutAnimation)
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
        useAnimation(fadeInAnimation)
    ]),
    transition(':leave', [
        style({backgroundColor: 'lightblue'}),
        animate(2000),
        useAnimation(bounceOutLeftAnimation)
    ])
]);

export let todosAnimation = trigger('todosAnimation', [
    transition(':enter', [
        group([
            query('h1', [
                style({transform: 'translateY(-20px)'}),
                animate(1000)
            ]),
            //query('@todoAnimation', animateChild()),
            query('@todoAnimation',
                stagger(1000, animateChild())
            ),
        ])

    ])
]);
