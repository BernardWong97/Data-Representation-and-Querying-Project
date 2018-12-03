import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-project';
  login: boolean = true;

  constructor(private router: Router, public dialog: MatDialog) { }

  openDialog() {
    // Open dialog component when user tries to log out
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => this.login = data // returns false if user decline dialog so the account menu stays
    );
  } // openDialog()

  navHome() {
    // Go to main page when user clicks the title on the bar (does not work when logged out)
    if (this.login)
      this.router.navigate(['/movie-database']);
  } // navHome()
} // class