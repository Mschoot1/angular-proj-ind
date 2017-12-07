import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  get usernameTaken(): boolean {
    return this._usernameTaken;
  }

  set usernameTaken(value: boolean) {
    this._usernameTaken = value;
  }

  private _usernameTaken: boolean;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
  }

  onRegister(form: NgForm) {
    this.authService.register(form.value)
      .then(response => console.log(response))
      .catch(error => this.errorHandler(error));
  }

  errorHandler(error) {
    this._usernameTaken = error.status === 409;
    console.log(error);
  }
}
