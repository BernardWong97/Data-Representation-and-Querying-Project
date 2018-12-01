import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private users: User[] = [];

  constructor(private http: HttpClient) { }

  // get user login credentials from mongo database
  getUsersData(): Observable<any> {
    return this.http.get("http://127.0.0.1:8081/api/users");
  }
  
  getUser(username) {
    return this.http.get("http://127.0.0.1:8081/getUser/" + username);
  }

  addUser(username: string, password: string): Observable<any> {
    const user: User = {username: username, password: password};
    return this.http.post("http://127.0.0.1:8081/api/users", user);
  }

  updateUser(id: string, username: string, password: string): Observable<any> {
    const user: User = { username: username, password: password };
    return this.http.put("http://localhost:8081/api/users/" + id, user);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete("http://localhost:8081/api/users/" + id);
  }
}



