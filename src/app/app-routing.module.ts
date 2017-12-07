import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ClientsComponent} from './clients/clients.component';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import {AuthGuard} from './auth/auth-guard.service';
import {ShiftsComponent} from './shifts/shifts.component';
import {ClientDetailComponent} from './clients/client-detail/client-detail.component';
import {ClientEditComponent} from './clients/client-edit/client-edit.component';
import {ShiftEditComponent} from './shifts/shift-edit/shift-edit.component';
import {ShiftDetailComponent} from './shifts/shift-detail/shift-detail.component';
import {ActivitiesComponent} from './activities/activities.component';
import {ActivityEditComponent} from './activities/activity-edit/activity-edit.component';
import {ActivityDetailComponent} from './activities/activity-detail/activity-detail.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'clients', component: ClientsComponent, children: [
      {path: 'new', component: ClientEditComponent},
      {path: ':_id', component: ClientDetailComponent},
      {path: ':_id/edit', component: ClientEditComponent}
    ], canActivate: [AuthGuard]
  },
  {
    path: 'shifts', component: ShiftsComponent, children: [
      {path: 'new', component: ShiftEditComponent},
      {path: ':_id', component: ShiftDetailComponent},
      {path: ':_id/edit', component: ShiftEditComponent}
    ], canActivate: [AuthGuard]
  },
  {
    path: 'activities', component: ActivitiesComponent, children: [
      {path: 'new', component: ActivityEditComponent},
      {path: ':_id', component: ActivityDetailComponent},
      {path: ':_id/edit', component: ActivityEditComponent}
    ], canActivate: [AuthGuard]
  },
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
