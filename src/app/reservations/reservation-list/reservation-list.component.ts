import {Component, OnInit} from '@angular/core';
import {Reservation} from '../reservation.model';
import {ReservationService} from '../reservation.service';
import {Subscription} from 'rxjs/Subscription';
import {Movie} from '../../movies/movie.model';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
  get reservations(): Reservation[] {
    return this._reservations;
  }

  subscription: Subscription;
  private _reservations: Reservation[];

  constructor(private reservationService: ReservationService) {
  }

  ngOnInit() {
    this.reservationService.getReservations()
      .then(reservations => this._reservations = reservations)
      .catch(error => console.log(error));
    this.subscription = this.reservationService.reservationsChanged
      .subscribe((reservations: Reservation[]) => {
          this._reservations = reservations;
        }
      );
  }
}
