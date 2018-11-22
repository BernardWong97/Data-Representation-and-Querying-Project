import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any = [];
  lgUser: any;

  constructor(private us: UsersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.us.getUsersData().subscribe(data =>
      {
        this.users = data.users;
      });
    console.log("Users data successfully get.");
    
    this.lgUser = this.route.snapshot.params['username'];
    setTimeout(()=>this.router.navigate(["movie_database"]), 3000);
  }

}
