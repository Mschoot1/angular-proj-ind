import {Injectable, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';

import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Shift} from './shift.model';

@Injectable()
export class ShiftService implements OnInit {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  private serverUrl = environment.serverUrl;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  public getShifts(): Promise<Shift[]> {
    return this.http.get(this.serverUrl + '/shifts', {
      headers: this.headers.append(
        'Authorization', 'Bearer ' + localStorage.getItem('token')
      )
    })
      .toPromise()
      .then(response => {
        return response as Shift[];
      })
      .catch(error => {
        return Promise.reject(error.message || error);
      });
  }
}
