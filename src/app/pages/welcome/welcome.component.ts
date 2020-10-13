import { UsersService } from './../../users.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { IUser } from 'src/app/user';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit{
  loading: boolean = false;
  users: IUser[] = [];
  constructor(private userApi: UsersService) { }

  ngOnInit() {
    this.userApi.getUsers().subscribe(data =>  {
      this.users = data;
    });
  }

  onAllChecked(isChecked: boolean, data: any) {
    if (isChecked) {
      console.log(data);
    }
  }

  deleteItem(item: IUser): void {
    for (let i = 0; i < this.users.length; i++){
      if(item.id === this.users[i].id){
        this.users.splice(i,1);
      }
    }
  }

}
