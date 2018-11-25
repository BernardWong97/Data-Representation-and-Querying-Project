import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { MatSnackBar } from '@angular/material';
import { AppComponent } from '../app.component';

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
    });

    // get user data from mongodb
    this.us.getUsersData().subscribe(data => {
      this.users = data;
    });

    console.log("Users data successfully get.");
  }

  enterBtn(event) {
    if (event.keyCode == 13) {
      this.login();
    }
  }

  login() {
    if(this.username == undefined || this.password == undefined) {
      this.errMessage = "Please enter the required fields.";
    } else {
      for(let user of this.users) {
        if(this.username == user.username && this.password == user.password) {
          this.correctUser = true;
        } else {
          this.errMessage = "Username or Password incorrect, please try again.";
        }
      }
    }

    if(this.correctUser){
      this.router.navigate(["user", this.username]);
      this.app.login = true;
      sessionStorage.setItem("username", this.username);
    } else {
      setTimeout(()=>(<HTMLInputElement>document.getElementById("pw")).value = "", 1);
      this.snackBar.open(this.errMessage, "OK", {duration: 5000});
    }
  }
}
