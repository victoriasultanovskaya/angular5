import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'zippy',
    templateUrl: './zippy.component.html',
    styleUrls: ['./zippy.component.css'],
    animations: [
        trigger('expandCollapse', [
            state('collapsed', style({
                height: 0,
                paddingTop: 0,
                paddingBottom: 0,
                overflow: 'hidden'
            })),

            transition('collapsed => expanded', [
                animate('300ms ease-out')
            ]),
            transition('expanded => collapsed', [
                animate('300ms ease-in')
            ])
        ])
    ]
})
export class ZippyComponent {
    @Input('title') title: string;
    isExpanded: boolean;

    toggle() {
        this.isExpanded = !this.isExpanded;
    }
}
