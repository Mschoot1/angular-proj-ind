import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Activity} from './activity.model';
import {Client} from '../clients/client.model';

@Injectable()
export class ActivityService {
  activitiesChanged = new Subject<Activity[]>();

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl;
  private activities: Activity[];

  constructor(private http: HttpClient) {
  }

  public getActivities(): Promise<Activity[]> {
    return this.http.get(this.serverUrl + '/activities', {
      headers: this.headers.append(
        'Authorization', 'Bearer ' + localStorage.getItem('token')
      )
    })
      .toPromise()
      .then(response => {
        this.activities = response as Activity[];
        return this.activities;
      })
      .catch(error => {
        return error.message || error;
      });
  }

  getActivity(id: string) {
    return this.http.get(this.serverUrl + '/activities/' + id, {
      headers: this.headers.append(
        'Authorization', 'Bearer ' + localStorage.getItem('token')
      )
    })
      .toPromise()
      .then(response => {
        return Promise.resolve(response as Activity);
      })
      .catch(error => {
        return Promise.reject(error.message || error);
      });
  }

  deleteActivity(id: string) {
    return this.http.delete(this.serverUrl + '/clients/' + id, {
      headers: this.headers.append(
        'Authorization', 'Bearer ' + localStorage.getItem('token')
      )
    })
      .toPromise()
      .then(response => {
        const client = response as Client;
        this.activities.splice(this.findIndexById(id), 1);
        this.activitiesChanged.next(this.activities.slice());
        return response as Client;
      })
      .catch(error => {
        return error.message || error;
      });
  }

  private findIndexById(id: string) {
    for (let i = 0; i < this.activities.length; i++) {
      if (this.activities[i]._id === id) {
        return i;
      }
    }
    return this.activities.length;
  }
}
