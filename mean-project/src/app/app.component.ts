import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-project';
  login: boolean;

  constructor(private router: Router, public dialog: MatDialog) { }

  openDialog(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => this.login = data
    );
  }
}