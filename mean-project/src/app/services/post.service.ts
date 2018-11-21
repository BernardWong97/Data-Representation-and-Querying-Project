import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private http: HttpClient) { }

  // get json data from themoviedb api
  getPostsData(): Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/discover/movie?api_key=a796afb241021ae3e224be810d89a5c8&sort_by=popularity.desc");
  }

}