import { Injectable } from '@angular/core';
import { User } from './user';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(
    private api: ApiService
  ) {
  }

  //API: GET Profile through Username
  getProfile(userID: string): Observable<User> {
    return this.api.render(userID);
  }
}
