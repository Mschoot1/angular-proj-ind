import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {HallService} from '../hall.service';
import {Hall} from '../hall.model';

@Component({
  selector: 'app-hall-edit',
  templateUrl: './hall-edit.component.html',
  styleUrls: ['./hall-edit.component.css']
})
export class HallEditComponent implements OnInit {
  get hallForm(): FormGroup {
    return this._hallForm;
  }
  private id = '';
  private editMode = false;
  private hall: Hall = new Hall();
  private _hallForm: FormGroup;

  constructor(private hallService: HallService,
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
      this.hallService.updateHall(this.id, this.hallForm.value)
        .then(hall => console.log(hall))
        .catch(error => console.log(error));
    } else {
      this.hallService.addHall(this.hallForm.value)
        .then(hall => console.log(hall))
        .catch(error => console.log(error));
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    if (this.editMode) {
      this.hallService.getHall(this.id)
        .then(hall => {
          this.hall = hall;
          this._hallForm.patchValue(this.hall);
        })
        .catch(error => console.log(error));
    }
    this._hallForm = new FormGroup({
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
