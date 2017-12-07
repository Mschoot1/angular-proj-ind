import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ClientService} from '../client.service';
import {Client} from '../client.model';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  get clientForm(): FormGroup {
    return this._clientForm;
  }
  private id = '';
  private editMode = false;
  private client: Client = new Client();
  private _clientForm: FormGroup;

  constructor(private clientService: ClientService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['_id'];
          this.editMode = params['_id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    if (this.editMode) {
      this.clientService.updateClient(this.id, this.clientForm.value)
        .then(client => console.log(client))
        .catch(error => console.log(error));
    } else {
      this.clientService.addClient(this.clientForm.value)
        .then(client => console.log(client))
        .catch(error => console.log(error));
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    if (this.editMode) {
      this.clientService.getClient(this.id)
        .then(client => {
          this.client = client;
          this.clientForm.patchValue(this.client);
        })
        .catch(error => console.log(error));
    }
    this._clientForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'address': new FormGroup({
        'streetName': new FormControl(null, Validators.required),
        'homeNumber': new FormControl(null, Validators.required),
        'city': new FormControl(null, Validators.required),
      })
    });
  }
}
