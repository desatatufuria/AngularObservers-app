import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: 'user-list.component.html',
styleUrls: ['user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users = this.userService.getUsers();
  selectedUser: string | undefined;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users.subscribe((getUsers) => {
      console.log('Users Subscribe:', getUsers); 
    });
  }
  // Añadir:
  selectUser(user: string): void {
    console.log(`Selected User: ${user}`);
    this.userService.selectUser(user);
    //this.selectedUser = this.userService.getUserByName(user);
  }
 

  // Quitar:
  //selectUser(user: string) {
  //  this.selectedUser = user;
  //}
}
