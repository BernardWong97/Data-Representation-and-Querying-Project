import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})

export class PostDetailsComponent implements OnInit {
  movies: any = [];
  imgBaseUrl: String = "https://image.tmdb.org/t/p/w500";

  constructor(private ps: PostService) { }

  ngOnInit() {
    console.log("Movie data successfully get.");

    // get movie data from post service
    this.ps.getPostsData().subscribe(data => {
      this.movies = data.results;
    });
  }
}