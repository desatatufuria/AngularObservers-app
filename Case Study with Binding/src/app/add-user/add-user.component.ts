import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: 'add-user.component.html',
})
export class AddUserComponent {
  newUser: string = '';

  constructor(private userService: UserService) { }

  onInputChange(event: Event) {
      this.newUser = (event.target as HTMLInputElement).value;
  }

  addUser() {
    if (this.newUser.trim() !== '') {
      this.userService.addNewUser(this.newUser);
      this.newUser = '';
    }
  }
}
