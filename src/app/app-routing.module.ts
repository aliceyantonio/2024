import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { AuthGuard } from './auth.guard';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlaceComponent } from './place/place.component';
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
    path: 'nosotros', 
    component: UsComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: 'alojamiento', 
    component: AccommodationComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: 'lugar', 
    component: PlaceComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: 'programa', 
    component: PlanningComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: 'formulario', 
    component: FormComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }