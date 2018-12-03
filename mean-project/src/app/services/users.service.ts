import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http: HttpClient) { }

  // Get user login credentials from mongo database
  getUsersData(): Observable<any> {
    return this.http.get("http://127.0.0.1:8081/api/users");
  } // getUsersData()

  getUser(username) {
    return this.http.get("http://127.0.0.1:8081/getUser/" + username);
  } // getUser()

  addUser(username: string, password: string): Observable<any> {
    const user: User = { username: username, password: password };
    return this.http.post("http://127.0.0.1:8081/api/users", user);
  } // addUser()

  updateUser(id: string, username: string, password: string): Observable<any> {
    const user: User = { username: username, password: password };
    return this.http.put("http://localhost:8081/api/users/" + id, user);
  } // updateUser()

  deleteUser(id: string): Observable<any> {
    return this.http.delete("http://localhost:8081/api/users/" + id);
  } // deleteUser()
} // class
