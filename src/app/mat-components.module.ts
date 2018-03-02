import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule, MatCardModule,
    MatCheckboxModule,
    MatNativeDateModule, MatProgressSpinnerModule,
    MatRadioModule, MatTooltipModule
} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  exports: [
      MatButtonModule,
      MatCheckboxModule,
      MatRadioModule,
      MatSelectModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatChipsModule,
      MatProgressSpinnerModule,
      MatTooltipModule,
      MatTabsModule,
      MatCardModule,
      MatDialogModule
  ]
})
export class MatComponentsModule { }
