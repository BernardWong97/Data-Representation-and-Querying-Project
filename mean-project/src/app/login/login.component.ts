import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  enterBtn(event) {
    if (event.keyCode == 13) {
      this.login();
    }
  }

  login() {
    if(this.username == 'admin' && this.password == 'admin'){
      alert("Login complete");
    }else {
      alert("Invalid credentials");
    }
  }
}
