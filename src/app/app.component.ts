import { UsersService } from './users.service';
import { MusicService } from './music.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
  data = [];

  constructor(
    private api: MusicService,
    private userApi: UsersService
    ){}
  

  getComment(): void {
    this.userApi.getUsers().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }
}
