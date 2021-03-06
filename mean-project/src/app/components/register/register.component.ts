import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AppComponent } from '../../app.component';

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
  pwValid: boolean = false;

  constructor(private router: Router, private us: UsersService, private snackBar: MatSnackBar, private app: AppComponent) { }

  ngOnInit() {
    setTimeout(() => {
      this.app.login = false;
    });

    this.us.getUsersData().subscribe(data => {
      this.users = data;
    });

    console.log("Users data successfully get.");

    this.pwValidation();
  } // ngOnInit()

  register() {
    if (this.username == undefined && this.password == undefined && this.rePassword == undefined) {
      this.errMessage = "Please enter fields";
      this.continue = false;
    } // if no inputs

    if (!this.pwValid) {
      this.errMessage = "Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters.";
      this.continue = false;
    } // if password not valid

    if (this.password != this.rePassword) {
      this.errMessage = "Passwords do not match.";
      this.continue = false;
    } // if passwords not match

    for (let user of this.users) {
      if (this.username == user.username) {
        this.errMessage = "Username has been taken, please try again.", "OK";
        this.continue = false;
      } // if username taken
    } // for loop all user accounts

    if (!this.continue) {
      document.getElementById("regSubmit").setAttribute("type", "reset");

      let snackBarRef = this.snackBar.open(this.errMessage, "OK");
      snackBarRef.onAction().subscribe(() => {
        this.router.navigate(["reload", "register"]); // Reload component
      });
    } // if any of the fields are not okay
  } // register()

  onAddUser(form: NgForm) {
    var scopeName = this.username;

    this.us.addUser(form.value.username, form.value.password).subscribe(); // Parse inputs to Users Service
    this.app.login = true;
    this.continue = false;

    // Auto login after successfully registered
    this.snackBar.open("Register succesfull! Auto logging you in!", "OK", { duration: 3000 });
    setTimeout(() => {
      this.router.navigate(["user", scopeName]);
    }, 3000);

    form.resetForm();
    console.log("Register successful");
  } // onAddUser()

  pwValidation() {
    var scope = this;
    var input = (<HTMLInputElement>document.getElementById("pwField"));
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");

    input.onfocus = function () {
      scope.display = true;
    } // Show card when password field is focused

    input.onkeyup = function () {
      // Validate lowercase letters
      var lowerCaseLetters = /[a-z]/g;
      if (input.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
      } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
      } // if lowercase

      // Validate capital letters
      var upperCaseLetters = /[A-Z]/g;
      if (input.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
      } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
      } // if uppercase

      // Validate numbers
      var numbers = /[0-9]/g;
      if (input.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
      } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
      } // if numbers

      // Validate length
      if (input.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
      } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
      } // if 8 or more characters

      if (letter.classList.contains("valid") &&
        capital.classList.contains("valid") &&
        number.classList.contains("valid") &&
        length.classList.contains("valid"))
        scope.pwValid = true; // if all requirements okay
    } // onkeyup()
  } // pwValidation()
} // class
