import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { Country } from '../models/country.model';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = 'http://localhost:3000/countries';
  }


  selectedCountry = new BehaviorSubject(this.isSelected);

  set isSelected(value) {
    this.selectedCountry.next(value);
    value === null ? localStorage.removeItem('selectedCountry') : localStorage.setItem('selectedCountry', JSON.stringify(value));
  }

  get isSelected(): Country {
    return JSON.parse(localStorage.getItem('selectedCountry')!);
  }

  getCountryFlagByCode(code:any): Promise<any> {
    return this.httpClient.get<any>('https://restcountries.com/v3.1/alpha/' + code).toPromise();
  }

  getCountriesDataByCode(code:any): Observable<Country[]> {
    return of([{
      'area': 'string',
      'capital': 'string',
      'code': 'string',
      'currencies': 'string',
      'density': 'string',
      'foundation_event': 'string',
      'foundation_year': 'string',
      'gdp_per_capita': 'string',
      'gdp_total': 'string',
      'gentilic': 'string',
      'goverment': 'string',
      'id': 'string',
      'languages': 'any',
      'legislative_body': 'string',
      'main_religin': 'string',
      'motto': 'string',
      'name_en': 'string',
      'name_es': 'string',
      'name_leader_1': 'string',
      'name_leader_2': 'string',
      'official_name': 'string',
      'population': 'string',
      'title_leader_1': 'string',
      'title_leader_2': 'string',
      'flag': 'string'
    }])
    // return this.httpClient.get<Country[]>(this.baseUrl, { params: { code } }).toPromise();
  }
}


