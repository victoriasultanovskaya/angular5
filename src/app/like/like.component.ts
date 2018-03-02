import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'like',
    templateUrl: './like.component.html',
    styleUrls: ['./like.component.css'],
    inputs: ['isActive'],
})
export class LikeComponent {
    @Input('likesCount') likesCount: number;
    @Input('isActive') isActive: boolean;
    @Output('change') click = new EventEmitter();

    onClick() {
        this.isActive = !this.isActive;
        this.likesCount += (this.isActive) ? +1 : -1;
    }
}
