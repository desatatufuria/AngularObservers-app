import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

const usersList: string[] = ['Javier', 'Paco', 'Juan'];

@Injectable({
  providedIn: 'root',
})

export class UserService {
  private usersSubject = new BehaviorSubject<string[]>(usersList);
  users = this.usersSubject.asObservable();
  // añadir:
  selectedUserSubject = new BehaviorSubject<string | undefined>(undefined);
  selectedUser$ = this.selectedUserSubject.asObservable();
  /** */

  getUsers(): Observable<string[]> {
    return this.users;
  }

  addNewUser(user: string): void {
    const currentUsers = this.usersSubject.value;
    const updatedUsers = [...currentUsers, user];
    this.usersSubject.next(updatedUsers);
  }

  //añadir: 
  getUserByName(name: string): string | undefined {

    const user = this.usersSubject.value.find(user => user === name);
    console.log(`getUserByName: ${name} -> ${user}`);
    return user 
  }

  selectUser(user: string): void {
    console.log(`Selected User (selectUser): ${user}`);
    this.selectedUserSubject.next(this.getUserByName(user));
  }
  /** */
}
