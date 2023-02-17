import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// @ts-ignore
import * as jsVectorMap from 'jsvectormap/dist/js/jsvectormap.js';
import 'jsvectormap/dist/maps/world.js';
import { Country } from '../models/country.model';
import { CountriesService } from '../services/countries.service';
@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.scss']
})
export class UsComponent implements OnInit {

  selectedCountries: Country[] = [];
  map: any;

  constructor(
    // private translateService: TranslateService,
    private countriesService: CountriesService,
    private router: Router,
  ) { }

  ngOnInit(): void {


    this.map = new jsVectorMap({
      // tipología y configuración del mapa
      map: 'world',
      selector: '#map',

      regionsSelectable: true,
      markersSelectable: true,
      zoomStep: 1.2,

      // eventos del mapa

      onRegionSelected: (code: any, isSelected: any, selectedRegions: any) => {
        // comprobamos si se esta seleccionando o des-seleccionando
        if (isSelected) {
          // si se esta seleccionando lo añadimos al array
          // obtenemos los datos completos del pais seleccionado
          let country = new Country();

          this.countriesService.getCountriesDataByCode([code]).subscribe(data => {
            country = data[0];
            country.languages = country.languages.split(',').join(', ');
            // country.currencies = data[0].currencies;
            this.countriesService.getCountryFlagByCode(code).then(res => {
              country.flag = res.flag;
              // country.currencies = res.currencies.map((currency:any) => currency.name).join(', ');
              this.selectedCountries.push(country);
            });
          });

        } else {
          // si se esta des-seleccionando lo eliminamos del array
          const countryIndex = this.selectedCountries.map(country => country.code).indexOf(code);
          this.selectedCountries.splice(countryIndex, 1);
        }

      },

      onRegionTooltipShow: (tooltip: any, code: any) => {
        tooltip.css({ backgroundColor: '#000000' });

        tooltip.selector.innerHTML =
          `<div style='color:white'>
            ${code}
          </div>`;
      },

      // estilos del mapa
      regionStyle: {
        initial: {
          fill: '#4d0707'
        },
        hover: {
          fillOpacity: 1,
          fill: '#901b22'
        },
        selected: {
          fill: '#ff5566'
        }
      },

      regionLabelStyle: {
        initial: {
          fontFamily: 'Verdana',
          fontSize: '12',
          fontWeight: 'bold',
          cursor: 'default',
          fill: '#ff5566'
        },
        hover: {
          cursor: 'pointer'
        }
      },

      series: {
        regions: [
          {
            attribute: 'fill',
            legend: {
              title: 'Leyenda',
            },
            scale: {
              'Visitados por Alice': 'green',
              'Visitados por Antonio': 'yellow',
              'Visitados por ambos': 'blue',
              'Proximos destinos': 'gray',
            },
            values: {
              US: 'Visitados por Antonio',
              EG: 'Visitados por ambos',
              ES: 'Visitados por Alice',
              BR: 'Visitados por ambos',
            }
          },
        ]
      }



    });
  }

  clearSelectedCountries(): void {
    this.selectedCountries = [];
    this.map.clearSelectedRegions();
  }

  selectCountry(country: Country): void {
    this.countriesService.isSelected = country;
    this.router.navigate(['/mapa/pais', country.code]);
  }

}
