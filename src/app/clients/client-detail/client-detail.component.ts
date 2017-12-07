import {Component, OnInit} from '@angular/core';
import {Client} from '../client.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientService} from '../client.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
  get client(): Client {
    return this._client;
  }

  private _id: string;
  private _client = new Client();

  constructor(private clientService: ClientService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
          this._id = params['_id'];
          this.clientService.getClient(this._id)
            .then(client => this._client = client)
            .catch(error => console.log(error));
        }
      );
  }

  onEditClient() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteClient() {
    this.clientService.deleteClient(this._id)
      .then(client => console.log(client))
      .catch(error => console.log(error));
    this.router.navigate(['/clients']);
  }
}
