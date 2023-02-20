import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  public countries = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  translate(text: string, languageInput = 'en', languageOutput = 'es') {
    return this.httpClient.get<any>('https://translate.googleapis.com/translate_a/single?client=gtx&sl=' + languageInput + '&tl=' + languageOutput + '&dt=t&q=' + encodeURI(text))
  }
}
