import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: any;
  username: string;
  password: string;

  constructor(private us: UsersService, private router: Router, private snackBar: MatSnackBar) { }

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
      if(this.username == user.username && this.password == user.password){
        this.router.navigate(["user", this.username]);
      }else {
        setTimeout(()=>(<HTMLInputElement>document.getElementById("pw")).value = "", 1);
        this.snackBar.open("Username or Password incorrect, please try again.", "OK", {duration: 5000});
      }
    }
  }
}
