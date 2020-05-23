import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

const API_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) {
  }
  render(userID: string): Observable<User> {
    return this.http.get<User>(API_URL + userID)
  }
}
