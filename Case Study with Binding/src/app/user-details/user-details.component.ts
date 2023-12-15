import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: 'user-details.component.html',
})
export class UserDetailsComponent {
  @Input() user: string | undefined;
}
