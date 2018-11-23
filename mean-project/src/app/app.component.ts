import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-project';
  login: boolean;

  constructor(private router: Router) { }

  logout(){
    this.router.navigate([""]);
    this.login = false;
  }
}
