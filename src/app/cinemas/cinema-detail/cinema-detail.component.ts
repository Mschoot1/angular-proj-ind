import {Component, OnInit} from '@angular/core';
import {Cinema} from '../cinema.model';
import {ActivatedRoute, Router} from '@angular/router';
import {CinemaService} from '../cinema.service';

@Component({
  selector: 'app-cinema-detail',
  templateUrl: './cinema-detail.component.html',
  styleUrls: ['./cinema-detail.component.css']
})
export class CinemaDetailComponent implements OnInit {
  get cinema(): Cinema {
    return this._cinema;
  }

  private _id: string;
  private _cinema = new Cinema();

  constructor(private cinemaService: CinemaService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
          this._id = params['_id'];
          this.cinemaService.getCinema(this._id)
            .then(cinema => this._cinema = cinema)
            .catch(error => console.log(error));
        }
      );
  }

  onEditCinema() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteCinema() {
    this.cinemaService.deleteCinema(this._id)
      .then(cinema => console.log(cinema))
      .catch(error => console.log(error));
    this.router.navigate(['/cinemas']);
  }
}
