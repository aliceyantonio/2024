import { TranslateService } from './../services/translate.service';
import { CountriesService } from './../services/countries.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  countryAPI: any;
  countryPosts: any;
  countryCode: string;
  region: any;
  capital: any;
  currency: any;
  population: any;
  religion: any;
  language: any;

  constructor(
    private countriesService: CountriesService,
    private activatedRoute: ActivatedRoute,
    public translateService: TranslateService
  ) {
    this.countryCode = this.activatedRoute.snapshot.paramMap.get('code')!;
    if (!localStorage.getItem('countries') || !this.countriesService.countries.length) {
      this.countriesService.getAll();
    };
    this.countryAPI = this.countriesService.countries.find(country => country['cca2'] == this.countryCode);
    this.currency = Object.values(this.countryAPI['currencies'])[0];
    this.language = Object.values(this.countryAPI['languages'])[0];

    this.countryPosts = this.countriesService.countriesPosts.find(countryPost => countryPost.country == this.countryCode)?.posts;
  }

  ngOnInit(): void {
    this.translateService.translate(this.countryAPI.region).subscribe(res => this.region = res[0][0][0]);
    this.translateService.translate(this.countryAPI.capital).subscribe(res => this.capital = res[0][0][0]);
    this.translateService.translate(this.currency.name).subscribe(res => this.currency.name = res[0][0][0]);
    this.translateService.translate(this.population).subscribe(res => this.population = res[0][0][0]);
    this.translateService.translate(this.religion).subscribe(res => this.religion = res[0][0][0]);
    this.translateService.translate(this.language).subscribe(res => this.language = res[0][0][0]);
  }
}
