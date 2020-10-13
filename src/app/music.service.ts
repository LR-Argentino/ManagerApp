import { Comment } from './comment';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService implements OnInit {
  comments: Comment[];
  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.comments = [];
  }

  getComments(): void {
    this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments').subscribe(responseData => {
        this.comments = responseData;
        console.log(this.comments);
    });
  }
}
