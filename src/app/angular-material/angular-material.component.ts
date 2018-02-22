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

}
