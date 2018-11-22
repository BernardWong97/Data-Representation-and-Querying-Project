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
  display: boolean = false;

  constructor(private router:Router, private us:UsersService, private snackBar: MatSnackBar) { }

  ngOnInit(){
    // get user data from mongodb
    this.us.getUsersData().subscribe(data => {
      this.users = data;
    });

    console.log("Users data successfully get.");

    this.pwValidation();
  }

  register() {
    if(this.username == undefined && this.password == undefined && this.rePassword == undefined){
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
      let snackBarRef = this.snackBar.open(this.errMessage, "OK", {duration: 5000});
      snackBarRef.onAction().subscribe(() => {
        this.router.navigate(["reload", "register"]);
      });
    }
  }

  onAddUser(form: NgForm) {
    var scopeName = this.username;
    this.us.addUser(form.value.username, form.value.password).subscribe();
    this.snackBar.open("Register succesfull! Auto logging you in!", "OK", {duration: 3000});
    setTimeout(()=>{
      this.router.navigate(["user", scopeName]);
    }, 3000);
    form.resetForm();
  }

  pwValidation(){
    var scope = this;
    var input = (<HTMLInputElement>document.getElementById("pwField"));
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");

    input.onfocus = function() {
      scope.display = true;
    }

    input.onkeyup = function() {
      // Validate lowercase letters
      var lowerCaseLetters = /[a-z]/g;
      if(input.value.match(lowerCaseLetters)) {  
        letter.classList.remove("invalid");
        letter.classList.add("valid");
      } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
      }
      
      // Validate capital letters
      var upperCaseLetters = /[A-Z]/g;
      if(input.value.match(upperCaseLetters)) {  
        capital.classList.remove("invalid");
        capital.classList.add("valid");
      } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
      }
    
      // Validate numbers
      var numbers = /[0-9]/g;
      if(input.value.match(numbers)) {  
        number.classList.remove("invalid");
        number.classList.add("valid");
      } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
      }
      
      // Validate length
      if(input.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
      } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
      }
    }
  }
}
