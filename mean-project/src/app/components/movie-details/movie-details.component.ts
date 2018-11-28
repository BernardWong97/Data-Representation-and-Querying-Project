import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: any = [];
  index: number;
  imgBaseUrl: String = "https://image.tmdb.org/t/p/w500";

  constructor(private ps: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log("Movie data successfully get.");

    this.index = this.route.snapshot.params['index'];

    // get movie data from post service
    this.ps.getPostsData().subscribe(data => {
      this.movie = data.results[this.index];
    });
  }
}
