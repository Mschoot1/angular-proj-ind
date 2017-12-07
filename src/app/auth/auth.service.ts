import {Injectable} from '@angular/core';

import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tokenNotExpired} from 'angular2-jwt';
import {Router} from '@angular/router';
import {Subject} from 'rxjs/Subject';
import {Client} from '../clients/client.model';

interface LoginResponse {
  token: string;
  username: string;
}

@Injectable()
export class AuthService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  private serverUrl = environment.serverUrl;

  constructor(private http: HttpClient) {
  }

  public loggedIn(): boolean {
    return tokenNotExpired();
  }

  public login(body): Promise<string> {
    return this.http.post(this.serverUrl + '/login', body, {headers: this.headers})
      .toPromise()
      .then(response => {
        localStorage.setItem('username', (response as LoginResponse).username);
        return Promise.resolve((response as LoginResponse).token);
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }

  public register(body): Promise<{}> {
    return this.http.post(this.serverUrl + '/register', body, {headers: this.headers})
      .toPromise()
      .then(response => {
        return Promise.resolve(response);
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }
}
