import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit() {
  } // ngOnInit()

  save() {
    // User confirms
    this.dialogRef.close(false);
    this.router.navigate([""]);
  } // save()

  close() {
    // User denies
    this.dialogRef.close(true);
  } // close()
} // class
