import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ClientsComponent} from './clients/clients.component';
import {ClientListComponent} from './clients/client-list/client-list.component';
import {AppRoutingModule} from './app-routing.module';
import {ClientService} from './clients/client.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import {AuthService} from './auth/auth.service';
import {HeaderComponent} from './header/header.component';
import {AuthGuard} from './auth/auth-guard.service';
import {ShiftsComponent} from './shifts/shifts.component';
import { ActivitiesComponent } from './activities/activities.component';
import { UsersComponent } from './users/users.component';
import {ActivityService} from './activities/activity.service';
import {ShiftService} from './shifts/shift.service';
import { ShiftListComponent } from './shifts/shift-list/shift-list.component';
import { ShiftItemComponent } from './shifts/shift-item/shift-item.component';
import { ClientItemComponent } from './clients/client-item/client-item.component';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
import {DropdownDirective} from './shared/dropdown.directive';
import { ClientEditComponent } from './clients/client-edit/client-edit.component';
import { ShiftEditComponent } from './shifts/shift-edit/shift-edit.component';
import { ShiftDetailComponent } from './shifts/shift-detail/shift-detail.component';
import { ActivityListComponent } from './activities/activity-list/activity-list.component';
import { ActivityEditComponent } from './activities/activity-edit/activity-edit.component';
import { ActivityItemComponent } from './activities/activity-item/activity-item.component';
import { ActivityDetailComponent } from './activities/activity-detail/activity-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientsComponent,
    ClientListComponent,
    RegisterComponent,
    LoginComponent,
    ShiftsComponent,
    ActivitiesComponent,
    UsersComponent,
    ShiftListComponent,
    ShiftItemComponent,
    ClientItemComponent,
    ClientDetailComponent,
    DropdownDirective,
    ClientEditComponent,
    ShiftEditComponent,
    ShiftDetailComponent,
    ActivityListComponent,
    ActivityEditComponent,
    ActivityItemComponent,
    ActivityDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ActivityService, ShiftService, ClientService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
