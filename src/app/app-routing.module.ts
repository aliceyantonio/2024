import { CountryComponent } from './country/country.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlanningComponent } from './planning/planning.component';
import { UsComponent } from './us/us.component';
import { PlaceComponent } from './place/place.component';
import { InvitationComponent } from './invitacion/invitation.component';
import { GuestsComponent } from './guests/guests.component';

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
    component: InvitationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'lugar',
    component: PlaceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'nosotros',
    component: UsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pais/:code',
    component: CountryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'invitados',
    component: GuestsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'confirmacion',
    component: FormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'planning',
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
