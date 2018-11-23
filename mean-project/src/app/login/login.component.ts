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

  constructor(private us: UsersService, private router: Router, private snackBar: MatSnackBar, private app: AppComponent) { }

  ngOnInit() {
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
    for(let user of this.users) {
      if(this.username == user.username && this.password == user.password)
        this.correctUser = true;
    }

    if(this.correctUser){
      this.router.navigate(["user", this.username]);
      this.app.login = true;
    } else {
      setTimeout(()=>(<HTMLInputElement>document.getElementById("pw")).value = "", 1);
      this.snackBar.open("Username or Password incorrect, please try again.", "OK", {duration: 5000});
    }
  }
}
