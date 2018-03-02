import {Component, Inject, InjectionToken, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

export const DIALOG_DATA = new InjectionToken('DIALOG_DATA');

@Component({
  selector: 'app-material-icons',
  templateUrl: './material-icons.component.html',
  styleUrls: ['./material-icons.component.css']
})
export class MaterialIconsComponent implements OnInit {
  dialogData: {
      first_icon: '',
      second_icon: '',
      third_icon: '',
      fourth_icon: ''
  };

  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    this.dialogData = data;
  }

  ngOnInit() {
      console.log(this.dialogData);
  }

}
