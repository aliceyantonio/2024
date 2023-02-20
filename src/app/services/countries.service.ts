import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { Country } from '../models/country.model';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  public countries = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll() {
    if (localStorage.getItem('countries')) {
      this.countries = JSON.parse(localStorage.getItem('countries')!);
    } else {
      this.httpClient.get<any>('https://restcountries.com/v3.1/all').subscribe(res => {
        this.countries = res;
        localStorage.setItem('countries', JSON.stringify(this.countries));
      });
    }
  }

  //   getCountriesDataByCode(code: any): Observable<Country[]> {
  //     return of([{
  //       'area': 'string',
  //       'capital': 'string',
  //       'code': 'string',
  //       'currencies': 'string',
  //       'density': 'string',
  //       'foundation_event': 'string',
  //       'foundation_year': 'string',
  //       'gdp_per_capita': 'string',
  //       'gdp_total': 'string',
  //       'gentilic': 'string',
  //       'goverment': 'string',
  //       'id': 'string',
  //       'languages': 'any',
  //       'legislative_body': 'string',
  //       'main_religin': 'string',
  //       'motto': 'string',
  //       'name_en': 'string',
  //       'name_es': 'string',
  //       'name_leader_1': 'string',
  //       'name_leader_2': 'string',
  //       'official_name': 'string',
  //       'population': 'string',
  //       'title_leader_1': 'string',
  //       'title_leader_2': 'string',
  //       'flag': 'string'
  //     }])
  //     // return this.httpClient.get<Country[]>(this.baseUrl, { params: { code } }).toPromise();
  //   }
  countriesPosts: Country[] = [
    {
      'country': 'RU',
      'posts': [
        {
          username: "aliceilopezg",
          location: "Zundert, Netherlands",
          avatar: "../../assets/users/aliceilopezg.jpeg",
          image: "https://bit.ly/3TubxHq",
          comment: "just took a few mushrooms lol",
          likes: 21
        }
      ]
    }
  ]
}

