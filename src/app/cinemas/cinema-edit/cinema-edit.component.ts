import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Cinema} from '../cinema.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CinemaService} from '../cinema.service';

@Component({
  selector: 'app-cinema-edit',
  templateUrl: './cinema-edit.component.html',
  styleUrls: ['./cinema-edit.component.css']
})
export class CinemaEditComponent implements OnInit {
  get cinemaForm(): FormGroup {
    return this._cinemaForm;
  }
  private id = '';
  private editMode = false;
  private cinema: Cinema;
  private _cinemaForm: FormGroup;

  constructor(private cinemaService: CinemaService,
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
      this.cinemaService.updateCinema(this.id, this.cinemaForm.value)
        .then(client => console.log(client))
        .catch(error => console.log(error));
    } else {
      this.cinemaService.addCinema(this.cinemaForm.value)
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
      this.cinemaService.getCinema(this.id)
        .then(client => {
          this.cinema = client;
          this._cinemaForm.patchValue(this.cinema);
        })
        .catch(error => console.log(error));
    }
    this._cinemaForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required)
    });
  }
}
