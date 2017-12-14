import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(public authService: AuthService, private router: Router) {
  }

  onLogout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
