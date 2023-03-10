import { TravelersComponent } from './travelers/travelers.component';
import { CountryComponent } from './country/country.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { AuthGuard } from './auth.guard';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReservationComponent } from './reservation/reservation.component';
import { PlanningComponent } from './planning/planning.component';
import { UsComponent } from './us/us.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'reserva',
    component: ReservationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'alojamiento',
    component: AccommodationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'destinos',
    component: UsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pais/:code',
    component: CountryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'viajeros',
    component: TravelersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'checkin',
    component: FormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'planing',
    component: PlanningComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
