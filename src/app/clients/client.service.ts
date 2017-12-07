import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

import {Client} from './client.model';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ClientService {
  clientsChanged = new Subject<Client[]>();

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl;
  private clients: Client[];

  constructor(private http: HttpClient) {
  }

  public getClients() {
    return this.http.get(this.serverUrl + '/clients', {
      headers: this.headers.append(
        'Authorization', 'Bearer ' + localStorage.getItem('token')
      )
    })
      .toPromise()
      .then(response => {
        this.clients = response as Client[];
        return this.clients;
      })
      .catch(error => {
        return error.message || error;
      });
  }

  public getClient(id: string) {
    return this.http.get(this.serverUrl + '/clients/' + id, {
      headers: this.headers.append(
        'Authorization', 'Bearer ' + localStorage.getItem('token')
      )
    })
      .toPromise()
      .then(response => {
        return Promise.resolve(response as Client);
      })
      .catch(error => {
        return Promise.reject(error.message || error);
      });
  }

  public addClient(body): Promise<Client> {
    return this.http.post(this.serverUrl + '/clients', body, {
      headers: this.headers.append(
        'Authorization', 'Bearer ' + localStorage.getItem('token')
      )
    })
      .toPromise()
      .then(response => {
        const client = response as Client;
        this.clients.push(client);
        this.clientsChanged.next(this.clients.slice());
        return client;
      })
      .catch(error => {
        return Promise.reject(error.message || error);
      });
  }

  public updateClient(id: string, body) {
    return this.http.put(this.serverUrl + '/clients/' + id, body, {
      headers: this.headers.append(
        'Authorization', 'Bearer ' + localStorage.getItem('token')
      )
    })
      .toPromise()
      .then(response => {
        const client = response as Client;
        this.clients[this.findIndexById(id)] = client;
        this.clientsChanged.next(this.clients.slice());
        return client;
      })
      .catch(error => {
        return Promise.reject(error.message || error);
      });
  }


  public deleteClient(id: string) {
    return this.http.delete(this.serverUrl + '/clients/' + id, {
      headers: this.headers.append(
        'Authorization', 'Bearer ' + localStorage.getItem('token')
      )
    })
      .toPromise()
      .then(response => {
        const client = response as Client;
        this.clients.splice(this.findIndexById(id), 1);
        this.clientsChanged.next(this.clients.slice());
        return Promise.resolve(response as Client);
      })
      .catch(error => {
        return Promise.reject(error.message || error);
      });
  }

  private findIndexById(id: string) {
    for (let i = 0; i < this.clients.length; i++) {
      if (this.clients[i]._id === id) {
        return i;
      }
    }
    return this.clients.length;
  }
}
