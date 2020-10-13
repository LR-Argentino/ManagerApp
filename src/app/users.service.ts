import { IUser } from './user';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: IUser[];
  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }
}
