import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'favorite',
    templateUrl: './favorite.component.html',
    styleUrls: ['./favorite.component.css', './favorite-additional.component.css'],
    styles: [
        `
            i.glyphicon {
                color: blue;
                font-size: 75px;
            }
        `,
        `
            i.glyphicon {
                color: green;
                font-size: 80px;
            }
        `
    ],
    inputs: ['isFavorite']
})
export class FavoriteComponent implements OnInit {
    @Input('isFavorite') isSelected: boolean;
    isFavorite: boolean;
    @Output('change') click = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    onClick() {
        this.isSelected = !this.isSelected;
        this.click.emit({newValue: this.isSelected});
    }
}

export interface FavoriteChangedEventArgs {
    newValue: boolean;
}
