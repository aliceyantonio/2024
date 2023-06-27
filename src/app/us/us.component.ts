import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// @ts-ignore
import * as jsVectorMap from 'jsvectormap/dist/js/jsvectormap.js';
import 'jsvectormap/dist/maps/world.js';
import { Country } from '../models/country.model';
import { CountriesService } from '../services/countries.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.scss']
})
export class UsComponent implements OnInit {

  @ViewChild('answersModal') answersModal: any;

  modalRef!: NgbModalRef;
  closeResult!: string;
  answerShown: boolean = false;

  usForm: FormGroup = this.fb.group({
    question1: ['', Validators.required],
    question2: ['', Validators.required],
    question3: ['', Validators.required],
    question4: ['', Validators.required],
    question5: ['', Validators.required],
  });
  score = 0

  selectedCountries: Country[] = [];
  map: any;

  visitedCountries = ["ES", "FR", "IT", "GB", "SE", "PT", "DE", "MA", "CO", "PA", "US", "PR", "MX", "PE", "BR", "IN", "QA", "CH", "BE", "NL", "CA", "BU", "CR"]

  constructor(
    private countriesService: CountriesService,
    private router: Router,
    private location: Location,
    private fb: FormBuilder,
    public modal: NgbModal,
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

        if (this.visitedCountries.includes(code)) {
          this.router.navigate(['pais', code]).then(() => {
            window.location.reload();
          });
        }
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
          fill: '#ffffff'
        },
        hover: {
          fillOpacity: 0.5,
        },
        selected: {
          fill: '#ffffff',
        },
      },

      series: {
        regions: [
          {
            attribute: 'fill',
            scale: {
              'visitados': '#869d84',
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
          }
        ]
      }
    });
  }

  checkForm() {
    const correctAnswers = {
      question1: 2,
      question2: 3,
      question3: 3,
      question4: 1,
      question5: 1,
    }

    if (this.usForm.value.question1 == correctAnswers.question1) { this.score++ }
    if (this.usForm.value.question2 == correctAnswers.question2) { this.score++ }
    if (this.usForm.value.question3 == correctAnswers.question3) { this.score++ }
    if (this.usForm.value.question4 == correctAnswers.question4) { this.score++ }
    if (this.usForm.value.question5 == correctAnswers.question5) { this.score++ }


    if (!this.modal.hasOpenModals()) {
      this.modalRef = this.modal.open(this.answersModal, { ariaLabelledBy: '', size: 'l', centered: true, backdrop: 'static' });
      this.modalRef.result.then((result) => {
        this.score = 0;
        this.closeResult = 'Closed with: ' + result;
      }, (reason) => {
        this.score = 0;
      });
    }
  }

  showAnswers() {
    this.usForm.patchValue({
      question1: '2',
      question2: '3',
      question3: '3',
      question4: '1',
      question5: '1',
    })
    Array.from(document.getElementsByClassName('form-group')).forEach((element: any) => element.style.pointerEvents = 'none');
    this.answerShown = true;
  }
}
