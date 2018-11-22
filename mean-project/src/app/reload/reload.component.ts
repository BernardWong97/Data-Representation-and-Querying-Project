import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reload',
  templateUrl: './reload.component.html',
  styleUrls: ['./reload.component.css']
})
export class ReloadComponent implements OnInit {
  componentName: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.componentName = this.route.snapshot.params['component'];
    this.router.navigate([this.componentName]);
  }

}
