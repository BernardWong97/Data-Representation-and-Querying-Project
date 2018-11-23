import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule, MatDividerModule, MatRippleModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule, MatSnackBarModule, MatListModule, MatExpansionModule
} from '@angular/material';

@NgModule({
  imports: [
  CommonModule, 
  MatToolbarModule,
  MatButtonModule, 
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatDividerModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatListModule,
  MatExpansionModule,
  MatRippleModule
  ],
  exports: [
   CommonModule,
   MatToolbarModule, 
   MatButtonModule, 
   MatCardModule, 
   MatInputModule, 
   MatDialogModule, 
   MatTableModule,
   MatDividerModule,
   MatMenuModule,
   MatIconModule,
   MatProgressSpinnerModule,
   MatSnackBarModule,
   MatListModule,
   MatExpansionModule,
   MatRippleModule
  ],
})
export class CustomMaterialModule { }