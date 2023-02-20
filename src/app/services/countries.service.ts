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

  countriesPosts: Country[] = [
    {
      'country': 'ES',
      'posts': [
        {
          username: "aliceilopezg",
          location: "Zundert, Netherlands",
          avatar: "../../assets/users/aliceilopezg.jpeg",
          image: "https://bit.ly/3TubxHq",
          comment: "just took a few mushrooms lol",
          likes: 21
        },
        {
          username: "aliceilopezg",
          location: "Zundert, Netherlands",
          avatar: "../../assets/users/aliceilopezg.jpeg",
          image: "https://bit.ly/3W2pTk6",
          comment: "just took a few mushrooms lol",
          likes: 21
        }
      ]
    }
  ]
}

