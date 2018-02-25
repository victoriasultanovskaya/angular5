import { Component } from '@angular/core';

@Component({
  selector: 'angular-material',
  templateUrl: './angular-material.component.html',
  styleUrls: ['./angular-material.component.css']
})
export class AngularMaterialComponent {

  constructor() { }

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
}
