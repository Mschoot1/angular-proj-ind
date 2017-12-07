import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {Client} from '../client.model';
import {ClientService} from '../client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  get clients(): Client[] {
    return this._clients;
  }
  subscription: Subscription;
  private _clients: Client[];

  constructor(private clientService: ClientService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.clientService.clientsChanged
      .subscribe(
        (clients: Client[]) => {
          this._clients = clients;
        }
      );
    this.clientService.getClients()
      .then(clients => this._clients = clients)
      .catch(error => console.log(error));
  }

  onNewClient() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
