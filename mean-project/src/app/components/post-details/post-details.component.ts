import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  movies: any = [];
  imgBaseUrl: String = "https://image.tmdb.org/t/p/w500";

  constructor(private ps: PostService, private router: Router) { }

  ngOnInit() {
    console.log("Movie data successfully get.");

    this.ps.getPostsData().subscribe(data => {
      this.movies = data.results;
    }); // Get all movie datas from Post Service
  } // ngOnInit()

  showOverview(index) {
    // Get index of the clicked movie and route/send index to movie-details component
    setTimeout(() => this.router.navigate(["movie-details", index]), 500);
  } // showOverview()
} // class