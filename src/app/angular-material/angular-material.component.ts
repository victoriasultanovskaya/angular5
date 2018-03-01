import {Component} from '@angular/core';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import {MatChipInputEvent, MatDialog} from '@angular/material';
import {MaterialIconsComponent} from '../material-icons/material-icons.component';

@Component({
    selector: 'angular-material',
    templateUrl: './angular-material.component.html',
    styleUrls: ['./angular-material.component.css']
})
export class AngularMaterialComponent {
    progress = 0;
    timer;

    constructor(private dialog: MatDialog) {
        this.timer = setInterval(() => {
            this.progress++;
            if (this.progress == 100) {
                clearInterval(this.timer);
            }
        }, 20);
    }

    ngOnInit() {
    }


    isChecked = true;

    onChange($event) {
        console.log($event);
    }

    favoriteSeason: string;

    seasons = [
        'Winter',
        'Spring',
        'Summer',
        'Autumn',
    ];

    favoriteFood = 'pizza-1';
    foods = [
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'}
    ];


    // https://github.com/angular/material2/issues/4978
    minDate = new Date(2017, 2, 20);
    maxDate = new Date(2018, 12, 20);


    color: string;

    availableColors = [
        {name: 'none', color: ''},
        {name: 'Primary', color: 'primary'},
        {name: 'Accent', color: 'accent'},
        {name: 'Warn', color: 'warn'}
    ];


    visible: boolean = true;
    selectable: boolean = true;
    removable: boolean = true;
    addOnBlur: boolean = true;

    // Enter, comma
    separatorKeysCodes = [ENTER, COMMA];

    fruits = [
        {name: 'Lemon'},
        {name: 'Lime'},
        {name: 'Apple'},
    ];


    add(event: MatChipInputEvent): void {
        let input = event.input;
        let value = event.value;

        // Add our fruit
        if ((value || '').trim()) {
            this.fruits.push({name: value.trim()});
        }

        // Reset the input value
        if (input) {
            input.value = '';
        }
    }

    remove(fruit: any): void {
        let index = this.fruits.indexOf(fruit);

        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    }

    spinnerColor = 'primary';
    spinnerMode = 'determinate';
    spinnerValue = 75;


    openDialog() {
        this.dialog
            .open(MaterialIconsComponent)
            .afterClosed()
            .subscribe(result => {
                console.log(result);
            });
    }
}
