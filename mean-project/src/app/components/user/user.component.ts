import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  lgUser: any;

  constructor(private us: UsersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // Take username from route parameter
    this.lgUser = this.route.snapshot.params['username'];
    setTimeout(() => this.router.navigate(["movie-database"]), 3000);
  } // ngOnInit()
} // class
