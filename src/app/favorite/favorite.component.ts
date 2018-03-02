import {Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-favorite',
    templateUrl: './favorite.component.html',
    styleUrls: ['./favorite.component.css', './favorite-additional.component.css'],
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
