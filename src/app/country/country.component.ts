import { CountriesService } from './../services/countries.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  countryData: any;
  countryPosts: any;
  countryCode: string;
  region: any;
  capital: any;
  currency: any;
  population: any;
  languages: any;

  constructor(
    private countriesService: CountriesService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.countryCode = this.activatedRoute.snapshot.paramMap.get('code')!;

    this.countryData = this.countriesService.countriesDataEsp.find((country: any) => country['cca2'] == this.countryCode);

    this.currency = Object.values(this.countryData['currencies'])[0];
    this.languages = Object.values(this.countryData['languages']);
    this.region = this.countryData.continent
    this.capital = this.countryData.capital

    this.countryPosts = this.countriesService.countriesPosts.find(countryPost => countryPost.country == this.countryCode)?.posts;
  }

  ngOnInit(): void {
  }
}
