import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { MatSnackBar } from '@angular/material';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: any;
  username: string;
  password: string;
  correctUser: boolean = false;
  errMessage: string;

  constructor(private us: UsersService, private router: Router, private snackBar: MatSnackBar, private app: AppComponent) { }

  ngOnInit() {
    setTimeout(() => {
      this.app.login = false;
    }); // Need to have a slight delay to have this code working because it is linking to it's parent component App Component

    this.us.getUsersData().subscribe(data => {
      this.users = data;
    }); // Get all user accounts from Users Service

    console.log("Users data successfully get.");
  } // ngOnInit()

  enterBtn(event) {
    if (event.keyCode == 13) {
      this.login();
    } // if user press enter button, fire login function
  } // enterBtn()

  login() {
    if (this.username == undefined || this.password == undefined) {
      this.errMessage = "Please enter the required fields.";
    } else {
      for (let user of this.users) {
        if (this.username == user.username && this.password == user.password) {
          this.correctUser = true;
        } else {
          this.errMessage = "Username or Password incorrect, please try again.";
        } // if..else inputs matches data from database
      } // for loop all user accounts from database
    } // if..else no inputs

    if (this.correctUser) {
      this.router.navigate(["user", this.username]);
      this.app.login = true; // Show account menu on toolbar
      sessionStorage.setItem("username", this.username); // Store username
      console.log("Login successful");
    } else {
      setTimeout(() => (<HTMLInputElement>document.getElementById("pw")).value = "", 1); // Reset password field
      this.snackBar.open(this.errMessage, "OK", { duration: 5000 });
    } // if..else login successful
  } // login()
} // class
