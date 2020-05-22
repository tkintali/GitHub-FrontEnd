import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) {
  }
  getProfile(userID: string): Observable<User> {
    return this.http
    .get(API_URL + userID)
    .map(response => {
      return new User(response.json());
    })
    .catch(this.handleError);
  }

  private handleError (error: Response | any){
    console.error('ApiSerive::handleError', error);
    return Observable.throw(error);
  }
}
