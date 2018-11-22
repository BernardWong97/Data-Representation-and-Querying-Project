import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users: any;
  username: string;
  password: string;
  rePassword: string;
  continue: boolean = true;
  errMessage: string;

  constructor(private router:Router, private us:UsersService, private snackBar: MatSnackBar) { }

  ngOnInit(){
    // get user data from mongodb
    this.us.getUsersData().subscribe(data => {
      this.users = data;
    });

    console.log("Users data successfully get.");
  }

  register() {
    if(this.username != "" && this.password != "" && this.rePassword != ""){
      this.errMessage = "Please enter fields";
      this.continue = false;
    }

    if(this.password != this.rePassword){
      this.errMessage = "Passwords does not match.";
      this.continue = false;
    }

    for(let user of this.users) {
      if(this.username == user.username){
        this.errMessage = "Username has been taken, please try again.", "OK";
        this.continue = false;
      }
    }

    if(!this.continue) {
      document.getElementById("regSubmit").setAttribute("type", "reset");
      this.snackBar.open(this.errMessage, "OK", {duration: 5000});
    }
  }

  onAddUser(form: NgForm) {
    this.us.addUser(form.value.username, form.value.password).subscribe();
    console.log(form.value);
    form.resetForm();
  }
}
