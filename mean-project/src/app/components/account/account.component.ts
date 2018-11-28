import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  username;

  constructor() { }

  ngOnInit() {
    this.username = sessionStorage.getItem("username");
  }

}
