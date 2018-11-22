import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any = [];

  constructor(private us: UsersService) { }

  ngOnInit() {
    this.us.getUsersData().subscribe(data =>
      {
        this.users = data.users;
      });
    console.log("Users data successfully get.");
  }

}
