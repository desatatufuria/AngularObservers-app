import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

const usersList: string[] = ['Javier', 'Paco', 'Juan'];

@Injectable({
  providedIn: 'root',
})

export class UserService {
  private usersSubject = new BehaviorSubject<string[]>(usersList);
  users = this.usersSubject.asObservable();

  getUsers(): Observable<string[]> {
    return this.users;
  }

  addNewUser(user: string): void {
    const currentUsers = this.usersSubject.value;
    const updatedUsers = [...currentUsers, user];
    this.usersSubject.next(updatedUsers);
  }
}
