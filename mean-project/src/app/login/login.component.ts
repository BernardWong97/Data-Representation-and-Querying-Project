import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  enterBtn(event) {
    if (event.keyCode == 13) {
      this.login();
    }
  }

  login() {
    if(this.username == 'admin' && this.password == 'admin'){
      this.router.navigate(["movie_database"]);
    }else {
      alert("Invalid credentials");
    }
  }
}
