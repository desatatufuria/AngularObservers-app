import { Component, /*Input,*/ OnInit } from '@angular/core';
// añadir:
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-details',
  templateUrl: 'user-details.component.html',
})
export class UserDetailsComponent implements OnInit {
  // quitar:
  /*  @Input() user: string | undefined;*/

  // añadir:
  user: string | undefined;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.selectedUser$.subscribe(user => {
      this.user = user;
     
    });
  }
  /* */
}
