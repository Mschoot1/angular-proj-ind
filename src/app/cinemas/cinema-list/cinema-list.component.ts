import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Cinema} from '../cinema.model';
import {ActivatedRoute, Router} from '@angular/router';
import {CinemaService} from '../cinema.service';

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.css']
})
export class CinemaListComponent implements OnInit {
  get cinemas(): Cinema[] {
    return this._cinemas;
  }
  subscription: Subscription;
  private _cinemas: Cinema[];

  constructor(private cinemaService: CinemaService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.cinemaService.cinemasChanged
      .subscribe(
        (cinemas: Cinema[]) => {
          this._cinemas = cinemas;
        }
      );
    this.cinemaService.getCinemas()
      .then(cinemas => this._cinemas = cinemas)
      .catch(error => console.log(error));
  }

  onNewCinema() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
