import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { NgForm } from "@angular/forms";
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user: any;
  sessUser: string;
  password: string = "*";
  confPass: string;
  oldPass: string;
  newPass: string;
  retypePass: string;
  edit: boolean = false;
  delete: boolean = false;
  continue: boolean = true;
  errMessage: string;

  constructor(private us: UsersService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.sessUser = sessionStorage.getItem("username");

    //get user data from mongodb
    this.us.getUser(this.sessUser).subscribe(data => {
      this.user = data;
      for(var i = 0; i < this.user[0].password.length - 1; i++)
        this.password += "*";
    });
    console.log("Users data successfully get.");
  }

  showEdit(){
    this.edit = true;
    this.delete = false;
  }

  showDelete(){
    this.delete = true;
    this.edit = false;
  }

  editAccount(form: NgForm){
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(this.oldPass != this.user[0].password) {
      this.continue = false;
      this.errMessage = "Old password incorrect.";
    }

    if(this.newPass == undefined || this.retypePass == undefined) {
      this.continue = false;
      this.errMessage = "Please enter the required fields";
    }

    if(!(this.newPass.match(lowerCaseLetters) && this.newPass.match(upperCaseLetters) && this.newPass.match(numbers) && this.newPass.length >= 8)){
      this.continue = false;
      this.errMessage = "Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters.";
    }

    if(this.newPass != this.retypePass) {
      this.continue = false;
      this.errMessage = "Passwords do not match";
    }

    if(!this.continue) {
      form.reset();
      this.snackBar.open(this.errMessage, "OK", {
        duration: 3000,
      });
      this.continue = true;
      this.retypePass = undefined;
      this.newPass = undefined;
    } else {
      this.us.updateUser(this.user[0]._id, this.sessUser, form.value.newPw).subscribe();
      this.snackBar.open("Password successfully changed", "OK", {
        duration: 3000,
      });
      this.edit = false;
    }
    
  }

  onDelete(){
    if(this.confPass != this.user[0].password)
      this.continue = false;

    if(!this.continue) {
      this.snackBar.open("Password incorrect", "OK", {
        duration: 3000,
      });
      this.continue = true;
      this.confPass = undefined;
    } else {
      this.snackBar.open("Account successfully deleted, logging out", "OK", {
        duration: 3000,
      });
      setTimeout(()=>this.deleteAcc(), 3000);
    }
  }
  
  deleteAcc() {
    this.us.deleteUser(this.user[0]._id).subscribe();
    this.router.navigate([""]);
  }

}
