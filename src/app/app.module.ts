import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import {AuthService} from './auth/auth.service';
import {HeaderComponent} from './header/header.component';
import {AuthGuard} from './auth/auth-guard.service';
import {CinemasComponent} from './cinemas/cinemas.component';
import {UsersComponent} from './users/users.component';
import {CinemaService} from './cinemas/cinema.service';
import {DropDownDirective} from './shared/dropdown.directive';
import {CinemaListComponent} from './cinemas/cinema-list/cinema-list.component';
import {CinemaEditComponent} from './cinemas/cinema-edit/cinema-edit.component';
import {CinemaItemComponent} from './cinemas/cinema-item/cinema-item.component';
import {CinemaDetailComponent} from './cinemas/cinema-detail/cinema-detail.component';
import {HallsComponent} from './halls/halls.component';
import {HallListComponent} from './halls/hall-list/hall-list.component';
import {HallItemComponent} from './halls/hall-item/hall-item.component';
import {HallDetailComponent} from './halls/hall-detail/hall-detail.component';
import {HallEditComponent} from './halls/hall-edit/hall-edit.component';
import {HallService} from './halls/hall.service';
import {MoviesComponent} from './movies/movies.component';
import {MovieDetailComponent} from './movies/movie-detail/movie-detail.component';
import {MovieEditComponent} from './movies/movie-edit/movie-edit.component';
import {MovieListComponent} from './movies/movie-list/movie-list.component';
import {SchedulesComponent} from './schedules/schedules.component';
import {ScheduleDetailComponent} from './schedules/schedule-detail/schedule-detail.component';
import {ScheduleEditComponent} from './schedules/schedule-edit/schedule-edit.component';
import {ScheduleListComponent} from './schedules/schedule-list/schedule-list.component';
import {ScheduleService} from './schedules/schedule.service';
import {MovieService} from './movies/movie.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReservationListComponent } from './reservations/reservation-list/reservation-list.component';
import { ReservationEditComponent } from './reservations/reservation-edit/reservation-edit.component';
import { ReservationDetailComponent } from './reservations/reservation-detail/reservation-detail.component';
import {ReservationService} from './reservations/reservation.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HallsComponent,
    HallListComponent,
    RegisterComponent,
    LoginComponent,
    SchedulesComponent,
    CinemasComponent,
    UsersComponent,
    ScheduleListComponent,
    HallItemComponent,
    HallDetailComponent,
    DropDownDirective,
    HallEditComponent,
    ScheduleEditComponent,
    ScheduleDetailComponent,
    CinemaListComponent,
    CinemaEditComponent,
    CinemaItemComponent,
    CinemaDetailComponent,
    MoviesComponent,
    MovieDetailComponent,
    MovieEditComponent,
    MovieListComponent,
    ReservationsComponent,
    ReservationListComponent,
    ReservationEditComponent,
    ReservationDetailComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CinemaService, ScheduleService, HallService, AuthService, MovieService, ReservationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
