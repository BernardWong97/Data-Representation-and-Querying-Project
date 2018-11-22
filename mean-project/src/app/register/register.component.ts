import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { User } from '../services/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private users: User[] = [];
  username: string;
  password: string;
  rePassword: string;

  constructor(private router:Router, private service:UsersService) { }

  ngOnInit(){
  }

  register() {
    
  }

  onAddUser(form: NgForm) {
    this.service.addUser(form.value.username, form.value.password).subscribe();
    console.log(form.value);
    form.resetForm();
  }
}
