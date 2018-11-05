import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material';
import {
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatSlideToggleModule,
  MatIconModule,
  MatTooltipModule,
  MatTableModule,
  MatDatepickerModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    MatDatepickerModule
  ],
  exports: [
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    MatDatepickerModule
  ]
})

export class MaterialModule { }