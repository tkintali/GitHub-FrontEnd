import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  user: User[] = [];

  constructor() { }

  //API: GET Profile through Username
  getProfiel(username: string): User{
    return this.user
    .filter(user => user.login === username)
    .pop();
  }
}
