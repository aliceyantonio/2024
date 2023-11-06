import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { UsComponent } from './us/us.component';
import { PlaceComponent } from './place/place.component';
import { PlanningComponent } from './planning/planning.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { HttpClientModule } from '@angular/common/http';
import { CountryComponent } from './country/country.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgParticlesModule } from 'ng-particles';
import { InvitationComponent } from './invitacion/invitation.component';
import { GuestsComponent } from './guests/guests.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    UsComponent,
    PlaceComponent,
    InvitationComponent,
    PlanningComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CountryComponent,
    GuestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    NgParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
