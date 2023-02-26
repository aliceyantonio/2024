import { Location } from '@angular/common';
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
    private countriesService: CountriesService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {

    this.map = new jsVectorMap({
      // tipología y configuración del mapa
      map: 'world',
      selector: '#map',

      regionsSelectable: true,
      markersSelectable: true,
      zoomStep: 1.2,

      onRegionSelected: (code: any, isSelected: any, selectedRegions: any) => {
        this.router.navigate(['pais', code]).then(() => {
          window.location.reload();
        });
      },

      onRegionTooltipShow: (tooltip: any, code: any) => {
        tooltip.css({ backgroundColor: '#000000' });

        const country = this.countriesService.countriesDataEsp.find((country: any) => country['cca2'] == code);

        tooltip.selector.innerHTML =
          `<img style='height:10px' src='${country!['flag']}'>
          <div style='color:white; display:inline-block'>
            ${country!['translations']['spa']['common'] ? country!['translations']['spa']['common'] : country!['translations']['spa']['official']}
          </div>`;
      },

      // estilos del mapa
      regionStyle: {
        initial: {
          fill: '#0f1941'
        },
        hover: {
          fillOpacity: 0.5,
          fill: 'blue'
        },
        selected: {
          fill: 'blue'
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
            scale: {
              'visitados': 'blue',
            },
            values: {
              ES: 'visitados',
              FR: 'visitados',
              IT: 'visitados',
              GB: 'visitados',
              SE: 'visitados',
              PT: 'visitados',
              DE: 'visitados',
              MA: 'visitados',
              CO: 'visitados',
              PA: 'visitados',
              US: 'visitados',
              PR: 'visitados',
              MX: 'visitados',
              PE: 'visitados',
              BR: 'visitados',
              IN: 'visitados',
              QA: 'visitados',
              CH: 'visitados',
              BE: 'visitados',
              NL: 'visitados',
              CA: 'visitados',
              BU: 'visitados',
              CR: 'visitados'
            }
          },
        ]
      }
    });
  }
}
