import { Injectable } from '@angular/core';
import { Country } from '../models/country.model';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor() { }

  countriesPosts: Country[] = [
    {
      'country': 'ES',
      'posts': [
        {
          username: "aliceilopezg",
          location: "Zundert, Netherlands",
          avatar: "assets/users/aliceilopezg.jpeg",
          image: "assets/countries/ES/1.jpeg",
          comment: "just took a few mushrooms lol",
          likes: 21
        },
        {
          username: "aliceilopezg",
          location: "Zundert, Netherlands",
          avatar: "assets/users/aliceilopezg.jpeg",
          image: "assets/countries/ES/2.jpeg",
          comment: "just took a few mushrooms lol",
          likes: 21
        }
      ]
    }
  ]

  countriesDataEng: any = [
    {
      "cca2": "UA",
      "currencies": {
        "UAH": {
          "name": "Ukrainian hryvnia",
          "symbol": "₴"
        }
      },
      "capital": "Kyiv",
      "languages": {
        "ukr": "Ukrainian"
      },
      "translations": {
        "spa": {
          "official": "Ucrania",
          "common": "Ucrania"
        }
      },
      "area": 603500,
      "demonyms": "Ukrainian",
      "population": 44134693,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/ua.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ua.png"
    },
    {
      "cca2": "FR",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Paris"
      ],
      "languages": {
        "fra": "French"
      },
      "translations": {
        "spa": {
          "official": "República francés",
          "common": "Francia"
        }
      },
      "area": 551695,
      "demonyms": "French",
      "population": 67391582,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/fr.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/fr.png"
    },
    {
      "cca2": "KW",
      "currencies": {
        "KWD": {
          "name": "Kuwaiti dinar",
          "symbol": "د.ك"
        }
      },
      "capital": [
        "Kuwait City"
      ],
      "languages": {
        "ara": "Arabic"
      },
      "translations": {
        "spa": {
          "official": "Estado de Kuwait",
          "common": "Kuwait"
        }
      },
      "area": 17818,
      "demonyms": "Kuwaiti",
      "population": 4270563,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/kw.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/kw.png"
    },
    {
      "cca2": "KZ",
      "currencies": {
        "KZT": {
          "name": "Kazakhstani tenge",
          "symbol": "₸"
        }
      },
      "capital": [
        "Nur-Sultan"
      ],
      "languages": {
        "kaz": "Kazakh",
        "rus": "Russian"
      },
      "translations": {
        "spa": {
          "official": "República de Kazajstán",
          "common": "Kazajistán"
        }
      },
      "area": 2724900,
      "demonyms": "Kazakhstani",
      "population": 18754440,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/kz.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/kz.png"
    },
    {
      "cca2": "GE",
      "currencies": {
        "GEL": {
          "name": "lari",
          "symbol": "₾"
        }
      },
      "capital": [
        "Tbilisi"
      ],
      "languages": {
        "kat": "Georgian"
      },
      "translations": {
        "spa": {
          "official": "Georgia",
          "common": "Georgia"
        }
      },
      "area": 69700,
      "demonyms": "Georgian",
      "population": 3714000,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/ge.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ge.png"
    },
    {
      "cca2": "YE",
      "currencies": {
        "YER": {
          "name": "Yemeni rial",
          "symbol": "﷼"
        }
      },
      "capital": [
        "Sana'a"
      ],
      "languages": {
        "ara": "Arabic"
      },
      "translations": {
        "spa": {
          "official": "República de Yemen",
          "common": "Yemen"
        }
      },
      "area": 527968,
      "demonyms": "Yemeni",
      "population": 29825968,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/ye.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ye.png"
    },
    {
      "cca2": "MQ",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Fort-de-France"
      ],
      "languages": {
        "fra": "French"
      },
      "translations": {
        "spa": {
          "official": "Martinica",
          "common": "Martinica"
        }
      },
      "area": 1128,
      "demonyms": "Martinican",
      "population": 378243,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/mq.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/mq.png"
    },
    {
      "cca2": "PN",
      "currencies": {
        "NZD": {
          "name": "New Zealand dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Adamstown"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "Grupo de Islas Pitcairn",
          "common": "Islas Pitcairn"
        }
      },
      "area": 47,
      "demonyms": "Pitcairn Islander",
      "population": 56,
      "continent": "Oceania",
      "flag": "https://flagcdn.com/w320/pn.png",
      "oatOfArms": {}
    },
    {
      "cca2": "IQ",
      "currencies": {
        "IQD": {
          "name": "Iraqi dinar",
          "symbol": "ع.د"
        }
      },
      "capital": [
        "Baghdad"
      ],
      "languages": {
        "ara": "Arabic",
        "arc": "Aramaic",
        "ckb": "Sorani"
      },
      "translations": {
        "spa": {
          "official": "República de Irak",
          "common": "Irak"
        }
      },
      "area": 438317,
      "demonyms": "Iraqi",
      "population": 40222503,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/iq.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/iq.png"
    },
    {
      "cca2": "SJ",
      "currencies": {
        "NOK": {
          "name": "krone",
          "symbol": "kr"
        }
      },
      "capital": [
        "Longyearbyen"
      ],
      "languages": {
        "nor": "Norwegian"
      },
      "translations": {
        "spa": {
          "official": "Svalbard og Jan Mayen",
          "common": "Islas Svalbard y Jan Mayen"
        }
      },
      "area": -1,
      "demonyms": "Norwegian",
      "population": 2562,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/sj.png",
      "oatOfArms": {}
    },
    {
      "cca2": "CL",
      "currencies": {
        "CLP": {
          "name": "Chilean peso",
          "symbol": "$"
        }
      },
      "capital": [
        "Santiago"
      ],
      "languages": {
        "spa": "Spanish"
      },
      "translations": {
        "spa": {
          "official": "República de Chile",
          "common": "Chile"
        }
      },
      "area": 756102,
      "demonyms": "Chilean",
      "population": 19116209,
      "continent": "South America",
      "flag": "https://flagcdn.com/w320/cl.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/cl.png"
    },
    {
      "cca2": "EH",
      "currencies": {
        "DZD": {
          "name": "Algerian dinar",
          "symbol": "دج"
        },
        "MAD": {
          "name": "Moroccan dirham",
          "symbol": "DH"
        },
        "MRU": {
          "name": "Mauritanian ouguiya",
          "symbol": "UM"
        }
      },
      "capital": [
        "El Aaiún"
      ],
      "languages": {
        "ber": "Berber",
        "mey": "Hassaniya",
        "spa": "Spanish"
      },
      "translations": {
        "spa": {
          "official": "República Árabe Saharaui Democrática",
          "common": "Sahara Occidental"
        }
      },
      "area": 266000,
      "demonyms": "Sahrawi",
      "population": 510713,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/eh.png",
      "oatOfArms": {}
    },
    {
      "cca2": "CV",
      "currencies": {
        "CVE": {
          "name": "Cape Verdean escudo",
          "symbol": "Esc"
        }
      },
      "capital": [
        "Praia"
      ],
      "languages": {
        "por": "Portuguese"
      },
      "translations": {
        "spa": {
          "official": "República de Cabo Verde",
          "common": "Cabo Verde"
        }
      },
      "area": 4033,
      "demonyms": "Cape Verdian",
      "population": 555988,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/cv.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/cv.png"
    },
    {
      "cca2": "NZ",
      "currencies": {
        "NZD": {
          "name": "New Zealand dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Wellington"
      ],
      "languages": {
        "eng": "English",
        "mri": "Māori",
        "nzs": "New Zealand Sign Language"
      },
      "translations": {
        "spa": {
          "official": "nueva Zelanda",
          "common": "Nueva Zelanda"
        }
      },
      "area": 270467,
      "demonyms": "New Zealander",
      "population": 5084300,
      "continent": "Oceania",
      "flag": "https://flagcdn.com/w320/nz.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/nz.png"
    },
    {
      "cca2": "AT",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Vienna"
      ],
      "languages": {
        "bar": "Austro-Bavarian German"
      },
      "translations": {
        "spa": {
          "official": "República de Austria",
          "common": "Austria"
        }
      },
      "area": 83871,
      "demonyms": "Austrian",
      "population": 8917205,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/at.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/at.png"
    },
    {
      "cca2": "ST",
      "currencies": {
        "STN": {
          "name": "São Tomé and Príncipe dobra",
          "symbol": "Db"
        }
      },
      "capital": [
        "São Tomé"
      ],
      "languages": {
        "por": "Portuguese"
      },
      "translations": {
        "spa": {
          "official": "República Democrática de Santo Tomé y Príncipe",
          "common": "Santo Tomé y Príncipe"
        }
      },
      "area": 964,
      "demonyms": "Sao Tomean",
      "population": 219161,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/st.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/st.png"
    },
    {
      "cca2": "LB",
      "currencies": {
        "LBP": {
          "name": "Lebanese pound",
          "symbol": "ل.ل"
        }
      },
      "capital": [
        "Beirut"
      ],
      "languages": {
        "ara": "Arabic",
        "fra": "French"
      },
      "translations": {
        "spa": {
          "official": "República Libanesa",
          "common": "Líbano"
        }
      },
      "area": 10452,
      "demonyms": "Lebanese",
      "population": 6825442,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/lb.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/lb.png"
    },
    {
      "cca2": "SN",
      "currencies": {
        "XOF": {
          "name": "West African CFA franc",
          "symbol": "Fr"
        }
      },
      "capital": [
        "Dakar"
      ],
      "languages": {
        "fra": "French"
      },
      "translations": {
        "spa": {
          "official": "República de Senegal",
          "common": "Senegal"
        }
      },
      "area": 196722,
      "demonyms": "Senegalese",
      "population": 16743930,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/sn.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/sn.png"
    },
    {
      "cca2": "SO",
      "currencies": {
        "SOS": {
          "name": "Somali shilling",
          "symbol": "Sh"
        }
      },
      "capital": [
        "Mogadishu"
      ],
      "languages": {
        "ara": "Arabic",
        "som": "Somali"
      },
      "translations": {
        "spa": {
          "official": "República Federal de Somalia",
          "common": "Somalia"
        }
      },
      "area": 637657,
      "demonyms": "Somali",
      "population": 15893219,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/so.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/so.png"
    },
    {
      "cca2": "_2",
      "currencies": {
        "SOS": {
          "name": "Somali shilling",
          "symbol": "Sh"
        }
      },
      "capital": [
        "Mogadishu"
      ],
      "languages": {
        "ara": "Arabic",
        "som": "Somali"
      },
      "translations": {
        "spa": {
          "official": "Somalilandia",
          "common": "Somalilandia"
        }
      },
      "area": 637657,
      "demonyms": "Somali",
      "population": 15893219,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/so.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/so.png"
    },
    {
      "name": {
        "common": "Haiti",
        "official": "Republic of Haiti",
        "nativeName": {
          "hat": {
            "official": "Repiblik Ayiti",
            "common": "Ayiti"
          }
        }
      },
      "cca2": "HT",
      "currencies": {
        "HTG": {
          "name": "Haitian gourde",
          "symbol": "G"
        }
      },
      "capital": [
        "Port-au-Prince"
      ],
      "languages": {
        "fra": "French",
        "hat": "Haitian Creole"
      },
      "translations": {
        "spa": {
          "official": "República de Haití",
          "common": "Haití"
        }
      },
      "area": 27750,
      "demonyms": "Haitian",
      "population": 11402533,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/ht.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ht.png"
    },
    {
      "cca2": "MV",
      "currencies": {
        "MVR": {
          "name": "Maldivian rufiyaa",
          "symbol": ".ރ"
        }
      },
      "capital": [
        "Malé"
      ],
      "languages": {
        "div": "Maldivian"
      },
      "translations": {
        "spa": {
          "official": "República de las Maldivas",
          "common": "Maldivas"
        }
      },
      "area": 300,
      "demonyms": "Maldivan",
      "population": 540542,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/mv.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/mv.png"
    },
    {
      "cca2": "TK",
      "currencies": {
        "NZD": {
          "name": "New Zealand dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Fakaofo"
      ],
      "languages": {
        "eng": "English",
        "smo": "Samoan",
        "tkl": "Tokelauan"
      },
      "translations": {
        "spa": {
          "official": "Tokelau",
          "common": "Islas Tokelau"
        }
      },
      "area": 12,
      "demonyms": "Tokelauan",
      "population": 1411,
      "continent": "Oceania",
      "flag": "https://flagcdn.com/w320/tk.png",
      "oatOfArms": {}
    },
    {
      "cca2": "JO",
      "currencies": {
        "JOD": {
          "name": "Jordanian dinar",
          "symbol": "د.ا"
        }
      },
      "capital": [
        "Amman"
      ],
      "languages": {
        "ara": "Arabic"
      },
      "translations": {
        "spa": {
          "official": "Reino Hachemita de Jordania",
          "common": "Jordania"
        }
      },
      "area": 89342,
      "demonyms": "Jordanian",
      "population": 10203140,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/jo.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/jo.png"
    },
    {
      "cca2": "AM",
      "currencies": {
        "AMD": {
          "name": "Armenian dram",
          "symbol": "֏"
        }
      },
      "capital": [
        "Yerevan"
      ],
      "languages": {
        "hye": "Armenian"
      },
      "translations": {
        "spa": {
          "official": "República de Armenia",
          "common": "Armenia"
        }
      },
      "area": 29743,
      "demonyms": "Armenian",
      "population": 2963234,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/am.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/am.png"
    },
    {
      "cca2": "VN",
      "currencies": {
        "VND": {
          "name": "Vietnamese đồng",
          "symbol": "₫"
        }
      },
      "capital": [
        "Hanoi"
      ],
      "languages": {
        "vie": "Vietnamese"
      },
      "translations": {
        "spa": {
          "official": "República Socialista de Vietnam",
          "common": "Vietnam"
        }
      },
      "area": 331212,
      "demonyms": "Vietnamese",
      "population": 97338583,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/vn.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/vn.png"
    },
    {
      "cca2": "RW",
      "currencies": {
        "RWF": {
          "name": "Rwandan franc",
          "symbol": "Fr"
        }
      },
      "capital": [
        "Kigali"
      ],
      "languages": {
        "eng": "English",
        "fra": "French",
        "kin": "Kinyarwanda"
      },
      "translations": {
        "spa": {
          "official": "República de Rwanda",
          "common": "Ruanda"
        }
      },
      "area": 26338,
      "demonyms": "Rwandan",
      "population": 12952209,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/rw.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/rw.png"
    },
    {
      "cca2": "MW",
      "currencies": {
        "MWK": {
          "name": "Malawian kwacha",
          "symbol": "MK"
        }
      },
      "capital": [
        "Lilongwe"
      ],
      "languages": {
        "eng": "English",
        "nya": "Chewa"
      },
      "translations": {
        "spa": {
          "official": "República de Malawi",
          "common": "Malawi"
        }
      },
      "area": 118484,
      "demonyms": "Malawian",
      "population": 19129955,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/mw.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/mw.png"
    },
    {
      "cca2": "BJ",
      "currencies": {
        "XOF": {
          "name": "West African CFA franc",
          "symbol": "Fr"
        }
      },
      "capital": [
        "Porto-Novo"
      ],
      "languages": {
        "fra": "French"
      },
      "translations": {
        "spa": {
          "official": "República de Benin",
          "common": "Benín"
        }
      },
      "area": 112622,
      "demonyms": "Beninese",
      "population": 12123198,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/bj.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/bj.png"
    },
    {
      "cca2": "AX",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Mariehamn"
      ],
      "languages": {
        "swe": "Swedish"
      },
      "translations": {
        "spa": {
          "official": "Islas Åland",
          "common": "Alandia"
        }
      },
      "area": 1580,
      "demonyms": "Ålandish",
      "population": 29458,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/ax.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ax.png"
    },
    {
      "cca2": "IT",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Rome"
      ],
      "languages": {
        "ita": "Italian"
      },
      "translations": {
        "spa": {
          "official": "República Italiana",
          "common": "Italia"
        }
      },
      "area": 301336,
      "demonyms": "Italian",
      "population": 59554023,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/it.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/it.png"
    },
    {
      "cca2": "MH",
      "currencies": {
        "USD": {
          "name": "United States dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Majuro"
      ],
      "languages": {
        "eng": "English",
        "mah": "Marshallese"
      },
      "translations": {
        "spa": {
          "official": "República de las Islas Marshall",
          "common": "Islas Marshall"
        }
      },
      "area": 181,
      "demonyms": "Marshallese",
      "population": 59194,
      "continent": "Oceania",
      "flag": "https://flagcdn.com/w320/mh.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/mh.png"
    },
    {
      "cca2": "HN",
      "currencies": {
        "HNL": {
          "name": "Honduran lempira",
          "symbol": "L"
        }
      },
      "capital": [
        "Tegucigalpa"
      ],
      "languages": {
        "spa": "Spanish"
      },
      "translations": {
        "spa": {
          "official": "República de Honduras",
          "common": "Honduras"
        }
      },
      "area": 112492,
      "demonyms": "Honduran",
      "population": 9904608,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/hn.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/hn.png"
    },
    {
      "cca2": "IL",
      "currencies": {
        "ILS": {
          "name": "Israeli new shekel",
          "symbol": "₪"
        }
      },
      "capital": [
        "Jerusalem"
      ],
      "languages": {
        "ara": "Arabic",
        "heb": "Hebrew"
      },
      "translations": {
        "spa": {
          "official": "Estado de Israel",
          "common": "Israel"
        }
      },
      "area": 20770,
      "demonyms": "Israeli",
      "population": 9216900,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/il.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/il.png"
    },
    {
      "cca2": "SB",
      "currencies": {
        "SBD": {
          "name": "Solomon Islands dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Honiara"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "islas Salomón",
          "common": "Islas Salomón"
        }
      },
      "area": 28896,
      "demonyms": "Solomon Islander",
      "population": 686878,
      "continent": "Oceania",
      "flag": "https://flagcdn.com/w320/sb.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/sb.png"
    },
    {
      "name": {
        "common": "Bermuda",
        "official": "Bermuda",
        "nativeName": {
          "eng": {
            "official": "Bermuda",
            "common": "Bermuda"
          }
        }
      },
      "cca2": "BM",
      "currencies": {
        "BMD": {
          "name": "Bermudian dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Hamilton"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "Bermuda",
          "common": "Bermudas"
        }
      },
      "area": 54,
      "demonyms": "Bermudian",
      "population": 63903,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/bm.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/bm.png"
    },
    {
      "cca2": "HR",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Zagreb"
      ],
      "languages": {
        "hrv": "Croatian"
      },
      "translations": {
        "spa": {
          "official": "República de Croacia",
          "common": "Croacia"
        }
      },
      "area": 56594,
      "demonyms": "Croatian",
      "population": 4047200,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/hr.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/hr.png"
    },
    {
      "cca2": "MN",
      "currencies": {
        "MNT": {
          "name": "Mongolian tögrög",
          "symbol": "₮"
        }
      },
      "capital": [
        "Ulan Bator"
      ],
      "languages": {
        "mon": "Mongolian"
      },
      "translations": {
        "spa": {
          "official": "Mongolia",
          "common": "Mongolia"
        }
      },
      "area": 1564110,
      "demonyms": "Mongolian",
      "population": 3278292,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/mn.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/mn.png"
    },
    {
      "cca2": "VG",
      "currencies": {
        "USD": {
          "name": "United States dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Road Town"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "Islas Vírgenes",
          "common": "Islas Vírgenes del Reino Unido"
        }
      },
      "area": 151,
      "demonyms": "Virgin Islander",
      "population": 30237,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/vg.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/vg.png"
    },
    {
      "name": {
        "common": "Mali",
        "official": "Republic of Mali",
        "nativeName": {}
      },
      "cca2": "ML",
      "currencies": {
        "XOF": {
          "name": "West African CFA franc",
          "symbol": "Fr"
        }
      },
      "capital": [
        "Bamako"
      ],
      "languages": {
        "fra": "French"
      },
      "translations": {
        "spa": {
          "official": "República de Malí",
          "common": "Mali"
        }
      },
      "area": 1240192,
      "demonyms": "Malian",
      "population": 20250834,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/ml.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ml.png"
    },
    {
      "cca2": "TL",
      "currencies": {
        "USD": {
          "name": "United States dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Dili"
      ],
      "languages": {
        "por": "Portuguese",
        "tet": "Tetum"
      },
      "translations": {
        "spa": {
          "official": "República Democrática de Timor-Leste",
          "common": "Timor Oriental"
        }
      },
      "area": 14874,
      "demonyms": "East Timorese",
      "population": 1318442,
      "continent": "Oceania",
      "flag": "https://flagcdn.com/w320/tl.png",
      "oatOfArms": {}
    },
    {
      "cca2": "GF",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Cayenne"
      ],
      "languages": {
        "fra": "French"
      },
      "translations": {
        "spa": {
          "official": "Guayana",
          "common": "Guayana Francesa"
        }
      },
      "area": 83534,
      "demonyms": "Guianan",
      "population": 254541,
      "continent": "South America",
      "flag": "https://flagcdn.com/w320/gf.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/gf.png"
    },
    {
      "cca2": "FI",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Helsinki"
      ],
      "translations": {
        "spa": {
          "official": "República de Finlandia",
          "common": "Finlandia"
        }
      },
      "area": 338424,
      "demonyms": "Finnish",
      "population": 5530719,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/fi.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/fi.png"
    },
    {
      "cca2": "NF",
      "currencies": {
        "AUD": {
          "name": "Australian dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Kingston"
      ],
      "languages": {
        "eng": "English",
        "pih": "Norfuk"
      },
      "translations": {
        "spa": {
          "official": "Territorio de la Isla Norfolk",
          "common": "Isla de Norfolk"
        }
      },
      "area": 36,
      "demonyms": "Norfolk Islander",
      "population": 2302,
      "continent": "Oceania",
      "flag": "https://flagcdn.com/w320/nf.png",
      "oatOfArms": {}
    },
    {
      "cca2": "SG",
      "currencies": {
        "SGD": {
          "name": "Singapore dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Singapore"
      ],
      "languages": {
        "zho": "Chinese",
        "eng": "English",
        "msa": "Malay",
        "tam": "Tamil"
      },
      "translations": {
        "spa": {
          "official": "República de Singapur",
          "common": "Singapur"
        }
      },
      "area": 710,
      "demonyms": "Singaporean",
      "population": 5685807,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/sg.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/sg.png"
    },
    {
      "cca2": "ZW",
      "currencies": {
        "ZWL": {
          "name": "Zimbabwean dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Harare"
      ],
      "languages": {
        "bwg": "Chibarwe",
        "eng": "English",
        "kck": "Kalanga",
        "khi": "Khoisan",
        "ndc": "Ndau",
        "nde": "Northern Ndebele",
        "nya": "Chewa",
        "sna": "Shona",
        "sot": "Sotho",
        "toi": "Tonga",
        "tsn": "Tswana",
        "tso": "Tsonga",
        "ven": "Venda",
        "xho": "Xhosa",
        "zib": "Zimbabwean Sign Language"
      },
      "translations": {
        "spa": {
          "official": "República de Zimbabue",
          "common": "Zimbabue"
        }
      },
      "area": 390757,
      "demonyms": "Zimbabwean",
      "population": 14862927,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/zw.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/zw.png"
    },
    {
      "cca2": "ZM",
      "currencies": {
        "ZMW": {
          "name": "Zambian kwacha",
          "symbol": "ZK"
        }
      },
      "capital": [
        "Lusaka"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "República de Zambia",
          "common": "Zambia"
        }
      },
      "area": 752612,
      "demonyms": "Zambian",
      "population": 18383956,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/zm.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/zm.png"
    },
    {
      "cca2": "PL",
      "currencies": {
        "PLN": {
          "name": "Polish złoty",
          "symbol": "zł"
        }
      },
      "capital": [
        "Warsaw"
      ],
      "languages": {
        "pol": "Polish"
      },
      "translations": {
        "spa": {
          "official": "República de Polonia",
          "common": "Polonia"
        }
      },
      "area": 312679,
      "demonyms": "Polish",
      "population": 37950802,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/pl.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/pl.png"
    },
    {
      "cca2": "LU",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Luxembourg"
      ],
      "languages": {
        "deu": "German",
        "fra": "French",
        "ltz": "Luxembourgish"
      },
      "translations": {
        "spa": {
          "official": "Gran Ducado de Luxemburgo",
          "common": "Luxemburgo"
        }
      },
      "area": 2586,
      "demonyms": "Luxembourger",
      "population": 632275,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/lu.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/lu.png"
    },
    {
      "cca2": "KP",
      "currencies": {
        "KPW": {
          "name": "North Korean won",
          "symbol": "₩"
        }
      },
      "capital": [
        "Pyongyang"
      ],
      "languages": {
        "kor": "Korean"
      },
      "translations": {
        "spa": {
          "official": "República Popular Democrática de Corea",
          "common": "Corea del Norte"
        }
      },
      "area": 120538,
      "demonyms": "North Korean",
      "population": 25778815,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/kp.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/kp.png"
    },
    {
      "cca2": "DJ",
      "currencies": {
        "DJF": {
          "name": "Djiboutian franc",
          "symbol": "Fr"
        }
      },
      "capital": [
        "Djibouti"
      ],
      "languages": {
        "ara": "Arabic",
        "fra": "French"
      },
      "translations": {
        "spa": {
          "official": "República de Djibouti",
          "common": "Djibouti"
        }
      },
      "area": 23200,
      "demonyms": "Djibouti",
      "population": 988002,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/dj.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/dj.png"
    },
    {
      "cca2": "GR",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Athens"
      ],
      "languages": {
        "ell": "Greek"
      },
      "translations": {
        "spa": {
          "official": "República Helénica",
          "common": "Grecia"
        }
      },
      "area": 131990,
      "demonyms": "Greek",
      "population": 10715549,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/gr.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/gr.png"
    },
    {
      "cca2": "HM",
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "Islas Heard y McDonald",
          "common": "Islas Heard y McDonald"
        }
      },
      "area": 412,
      "demonyms": "Heard and McDonald Islander",
      "population": 0,
      "continent": "Antarctica",
      "flag": "https://flagcdn.com/w320/hm.png",
      "oatOfArms": {}
    },
    {
      "cca2": "SA",
      "currencies": {
        "SAR": {
          "name": "Saudi riyal",
          "symbol": "ر.س"
        }
      },
      "capital": [
        "Riyadh"
      ],
      "languages": {
        "ara": "Arabic"
      },
      "translations": {
        "spa": {
          "official": "Reino de Arabia Saudita",
          "common": "Arabia Saudí"
        }
      },
      "area": 2149690,
      "demonyms": "Saudi Arabian",
      "population": 34813867,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/sa.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/sa.png"
    },
    {
      "cca2": "VE",
      "currencies": {
        "VES": {
          "name": "Venezuelan bolívar soberano",
          "symbol": "Bs.S."
        }
      },
      "capital": [
        "Caracas"
      ],
      "languages": {
        "spa": "Spanish"
      },
      "translations": {
        "spa": {
          "official": "República Bolivariana de Venezuela",
          "common": "Venezuela"
        }
      },
      "area": 916445,
      "demonyms": "Venezuelan",
      "population": 28435943,
      "continent": "South America",
      "flag": "https://flagcdn.com/w320/ve.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ve.png"
    },
    {
      "cca2": "CO",
      "currencies": {
        "COP": {
          "name": "Colombian peso",
          "symbol": "$"
        }
      },
      "capital": [
        "Bogotá"
      ],
      "languages": {
        "spa": "Spanish"
      },
      "translations": {
        "spa": {
          "official": "República de Colombia",
          "common": "Colombia"
        }
      },
      "area": 1141748,
      "demonyms": "Colombian",
      "population": 50882884,
      "continent": "South America",
      "flag": "https://flagcdn.com/w320/co.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/co.png"
    },
    {
      "cca2": "GP",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Basse-Terre"
      ],
      "languages": {
        "fra": "French"
      },
      "translations": {
        "spa": {
          "official": "Guadalupe",
          "common": "Guadalupe"
        }
      },
      "area": 1628,
      "demonyms": "Guadeloupian",
      "population": 400132,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/gp.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/gp.png"
    },
    {
      "cca2": "NO",
      "currencies": {
        "NOK": {
          "name": "Norwegian krone",
          "symbol": "kr"
        }
      },
      "capital": [
        "Oslo"
      ],
      "languages": {
        "nno": "Norwegian Nynorsk",
        "nob": "Norwegian Bokmål",
        "smi": "Sami"
      },
      "translations": {
        "spa": {
          "official": "Reino de Noruega",
          "common": "Noruega"
        }
      },
      "area": 323802,
      "demonyms": "Norwegian",
      "population": 5379475,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/no.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/no.png"
    },
    {
      "cca2": "SH",
      "currencies": {
        "GBP": {
          "name": "Pound sterling",
          "symbol": "£"
        },
        "SHP": {
          "name": "Saint Helena pound",
          "symbol": "£"
        }
      },
      "capital": [
        "Jamestown"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "Santa Elena, Ascensión y Tristán de Acuña",
          "common": "Santa Elena, Ascensión y Tristán de Acuña"
        }
      },
      "area": 394,
      "demonyms": "Saint Helenian",
      "population": 53192,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/sh.png",
      "oatOfArms": {}
    },
    {
      "cca2": "PW",
      "currencies": {
        "USD": {
          "name": "United States dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Ngerulmud"
      ],
      "languages": {
        "eng": "English",
        "pau": "Palauan"
      },
      "translations": {
        "spa": {
          "official": "República de Palau",
          "common": "Palau"
        }
      },
      "area": 459,
      "demonyms": "Palauan",
      "population": 18092,
      "continent": "Oceania",
      "flag": "https://flagcdn.com/w320/pw.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/pw.png"
    },
    {
      "cca2": "CU",
      "currencies": {
        "CUC": {
          "name": "Cuban convertible peso",
          "symbol": "$"
        },
        "CUP": {
          "name": "Cuban peso",
          "symbol": "$"
        }
      },
      "capital": [
        "Havana"
      ],
      "languages": {
        "spa": "Spanish"
      },
      "translations": {
        "spa": {
          "official": "República de Cuba",
          "common": "Cuba"
        }
      },
      "area": 109884,
      "demonyms": "Cuban",
      "population": 11326616,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/cu.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/cu.png"
    },
    {
      "cca2": "WS",
      "currencies": {
        "WST": {
          "name": "Samoan tālā",
          "symbol": "T"
        }
      },
      "capital": [
        "Apia"
      ],
      "languages": {
        "eng": "English",
        "smo": "Samoan"
      },
      "translations": {
        "spa": {
          "official": "Estado Independiente de Samoa",
          "common": "Samoa"
        }
      },
      "area": 2842,
      "demonyms": "Samoan",
      "population": 198410,
      "continent": "Oceania",
      "flag": "https://flagcdn.com/w320/ws.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ws.png"
    },
    {
      "cca2": "PR",
      "currencies": {
        "USD": {
          "name": "United States dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "San Juan"
      ],
      "languages": {
        "eng": "English",
        "spa": "Spanish"
      },
      "translations": {
        "spa": {
          "official": "Asociado de Puerto Rico",
          "common": "Puerto Rico"
        }
      },
      "area": 8870,
      "demonyms": "Puerto Rican",
      "population": 3194034,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/pr.png",
      "oatOfArms": {}
    },
    {
      "cca2": "IM",
      "currencies": {
        "GBP": {
          "name": "British pound",
          "symbol": "£"
        },
        "IMP": {
          "name": "Manx pound",
          "symbol": "£"
        }
      },
      "capital": [
        "Douglas"
      ],
      "languages": {
        "eng": "English",
        "glv": "Manx"
      },
      "translations": {
        "spa": {
          "official": "Isla de Man",
          "common": "Isla de Man"
        }
      },
      "area": 572,
      "demonyms": "Manx",
      "population": 85032,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/im.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/im.png"
    },
    {
      "cca2": "MU",
      "currencies": {
        "MUR": {
          "name": "Mauritian rupee",
          "symbol": "₨"
        }
      },
      "capital": [
        "Port Louis"
      ],
      "languages": {
        "eng": "English",
        "fra": "French",
        "mfe": "Mauritian Creole"
      },
      "translations": {
        "spa": {
          "official": "República de Mauricio",
          "common": "Mauricio"
        }
      },
      "area": 2040,
      "demonyms": "Mauritian",
      "population": 1265740,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/mu.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/mu.png"
    },
    {
      "cca2": "SL",
      "currencies": {
        "SLL": {
          "name": "Sierra Leonean leone",
          "symbol": "Le"
        }
      },
      "capital": [
        "Freetown"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "República de Sierra Leona",
          "common": "Sierra Leone"
        }
      },
      "area": 71740,
      "demonyms": "Sierra Leonean",
      "population": 7976985,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/sl.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/sl.png"
    },
    {
      "cca2": "NL",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Amsterdam"
      ],
      "translations": {
        "spa": {
          "official": "Países Bajos",
          "common": "Países Bajos"
        }
      },
      "area": 41850,
      "demonyms": {},
      "population": 16655799,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/nl.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/nl.png"
    },
    {
      "cca2": "MP",
      "currencies": {
        "USD": {
          "name": "United States dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Saipan"
      ],
      "translations": {
        "spa": {
          "official": "Mancomunidad de las Islas Marianas del Norte",
          "common": "Islas Marianas del Norte"
        }
      },
      "area": 464,
      "demonyms": "American",
      "population": 57557,
      "continent": "Oceania",
      "flag": "https://flagcdn.com/w320/mp.png",
      "oatOfArms": {}
    },
    {
      "cca2": "KY",
      "currencies": {
        "KYD": {
          "name": "Cayman Islands dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "George Town"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "Islas Caimán",
          "common": "Islas Caimán"
        }
      },
      "area": 264,
      "demonyms": "Caymanian",
      "population": 65720,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/ky.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ky.png"
    },
    {
      "cca2": "MS",
      "currencies": {},
      "capital": [
        "Plymouth"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "Montserrat",
          "common": "Montserrat"
        }
      },
      "area": 102,
      "demonyms": "Montserratian",
      "population": 4922,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/ms.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ms.png"
    },
    {
      "cca2": "EE",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Tallinn"
      ],
      "languages": {
        "est": "Estonian"
      },
      "translations": {
        "spa": {
          "official": "República de Estonia",
          "common": "Estonia"
        }
      },
      "area": 45227,
      "demonyms": "Estonian",
      "population": 1331057,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/ee.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ee.png"
    },
    {
      "cca2": "HU",
      "currencies": {
        "HUF": {
          "name": "Hungarian forint",
          "symbol": "Ft"
        }
      },
      "capital": [
        "Budapest"
      ],
      "languages": {
        "hun": "Hungarian"
      },
      "translations": {
        "spa": {
          "official": "Hungría",
          "common": "Hungría"
        }
      },
      "area": 93028,
      "demonyms": "Hungarian",
      "population": 9749763,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/hu.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/hu.png"
    },
    {
      "cca2": "AQ",
      "translations": {
        "spa": {
          "official": "Antártida",
          "common": "Antártida"
        }
      },
      "area": 14000000,
      "demonyms": "Antarctican",
      "population": 1000,
      "continent": "Antarctica",
      "flag": "https://flagcdn.com/w320/aq.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/aq.png"
    },
    {
      "cca2": "CC",
      "currencies": {
        "AUD": {
          "name": "Australian dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "West Island"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "Territorio de los (Keeling) Islas Cocos",
          "common": "Islas Cocos o Islas Keeling"
        }
      },
      "area": 14,
      "demonyms": "Cocos Islander",
      "population": 544,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/cc.png",
      "oatOfArms": {}
    },
    {
      "cca2": "LR",
      "currencies": {
        "LRD": {
          "name": "Liberian dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Monrovia"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "República de Liberia",
          "common": "Liberia"
        }
      },
      "area": 111369,
      "demonyms": "Liberian",
      "population": 5057677,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/lr.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/lr.png"
    },
    {
      "cca2": "NC",
      "currencies": {
        "XPF": {
          "name": "CFP franc",
          "symbol": "₣"
        }
      },
      "capital": [
        "Nouméa"
      ],
      "languages": {
        "fra": "French"
      },
      "translations": {
        "spa": {
          "official": "nueva Caledonia",
          "common": "Nueva Caledonia"
        }
      },
      "area": 18575,
      "demonyms": "New Caledonian",
      "population": 271960,
      "continent": "Oceania",
      "flag": "https://flagcdn.com/w320/nc.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/nc.png"
    },
    {
      "cca2": "SM",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "City of San Marino"
      ],
      "languages": {
        "ita": "Italian"
      },
      "translations": {
        "spa": {
          "official": "Serenísima República de San Marino",
          "common": "San Marino"
        }
      },
      "area": 61,
      "demonyms": "Sammarinese",
      "population": 33938,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/sm.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/sm.png"
    },
    {
      "cca2": "AR",
      "currencies": {
        "ARS": {
          "name": "Argentine peso",
          "symbol": "$"
        }
      },
      "capital": [
        "Buenos Aires"
      ],
      "languages": {
        "grn": "Guaraní",
        "spa": "Spanish"
      },
      "translations": {
        "spa": {
          "official": "República Argentina",
          "common": "Argentina"
        }
      },
      "area": 2780400,
      "demonyms": "Argentine",
      "population": 45376763,
      "continent": "South America",
      "flag": "https://flagcdn.com/w320/ar.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ar.png"
    },
    {
      "cca2": "AU",
      "currencies": {
        "AUD": {
          "name": "Australian dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Canberra"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "Mancomunidad de Australia",
          "common": "Australia"
        }
      },
      "area": 7692024,
      "demonyms": "Australian",
      "population": 25687041,
      "continent": "Oceania",
      "flag": "https://flagcdn.com/w320/au.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/au.png"
    },
    {
      "cca2": "PG",
      "currencies": {
        "PGK": {
          "name": "Papua New Guinean kina",
          "symbol": "K"
        }
      },
      "capital": [
        "Port Moresby"
      ],
      "languages": {
        "eng": "English",
        "hmo": "Hiri Motu",
        "tpi": "Tok Pisin"
      },
      "translations": {
        "spa": {
          "official": "Estado Independiente de Papúa Nueva Guinea",
          "common": "Papúa Nueva Guinea"
        }
      },
      "area": 462840,
      "demonyms": "Papua New Guinean",
      "population": 8947027,
      "continent": "Oceania",
      "flag": "https://flagcdn.com/w320/pg.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/pg.png"
    },
    {
      "cca2": "FM",
      "currencies": {
        "USD": {
          "name": "United States dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Palikir"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "Estados Federados de Micronesia",
          "common": "Micronesia"
        }
      },
      "area": 702,
      "demonyms": "Micronesian",
      "population": 115021,
      "continent": "Oceania",
      "flag": "https://flagcdn.com/w320/fm.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/fm.png"
    },
    {
      "cca2": "WF",
      "currencies": {
        "XPF": {
          "name": "CFP franc",
          "symbol": "₣"
        }
      },
      "capital": [
        "Mata-Utu"
      ],
      "languages": {
        "fra": "French"
      },
      "translations": {
        "spa": {
          "official": "Territorio de las Islas Wallis y Futuna",
          "common": "Wallis y Futuna"
        }
      },
      "area": 142,
      "demonyms": "Wallis and Futuna Islander",
      "population": 11750,
      "continent": "Oceania",
      "flag": "https://flagcdn.com/w320/wf.png",
      "oatOfArms": {}
    },
    {
      "cca2": "LS",
      "currencies": {
        "LSL": {
          "name": "Lesotho loti",
          "symbol": "L"
        },
        "ZAR": {
          "name": "South African rand",
          "symbol": "R"
        }
      },
      "capital": [
        "Maseru"
      ],
      "languages": {
        "eng": "English",
        "sot": "Sotho"
      },
      "translations": {
        "spa": {
          "official": "Reino de Lesotho",
          "common": "Lesotho"
        }
      },
      "area": 30355,
      "demonyms": "Mosotho",
      "population": 2142252,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/ls.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ls.png"
    },
    {
      "cca2": "GU",
      "currencies": {
        "USD": {
          "name": "United States dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Hagåtña"
      ],
      "languages": {
        "cha": "Chamorro",
        "eng": "English",
        "spa": "Spanish"
      },
      "translations": {
        "spa": {
          "official": "Guam",
          "common": "Guam"
        }
      },
      "area": 549,
      "demonyms": "Guamanian",
      "population": 168783,
      "continent": "Oceania",
      "flag": "https://flagcdn.com/w320/gu.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/gu.png"
    },
    {
      "cca2": "ES",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Madrid"
      ],
      "languages": {
        "spa": "Spanish"
      },
      "translations": {
        "spa": {
          "official": "Reino de España",
          "common": "España"
        }
      },
      "area": 505992,
      "demonyms": "Spanish",
      "population": 47351567,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/es.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/es.png"
    },
    {
      "cca2": "AD",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Andorra la Vella"
      ],
      "languages": {
        "cat": "Catalan"
      },
      "translations": {
        "spa": {
          "official": "Principado de Andorra",
          "common": "Andorra"
        }
      },
      "area": 468,
      "demonyms": "Andorran",
      "population": 77265,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/ad.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ad.png"
    },
    {
      "cca2": "IS",
      "currencies": {
        "ISK": {
          "name": "Icelandic króna",
          "symbol": "kr"
        }
      },
      "capital": [
        "Reykjavik"
      ],
      "languages": {
        "isl": "Icelandic"
      },
      "translations": {
        "spa": {
          "official": "Islandia",
          "common": "Islandia"
        }
      },
      "area": 103000,
      "demonyms": "Icelander",
      "population": 366425,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/is.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/is.png"
    },
    {
      "cca2": "AE",
      "currencies": {
        "AED": {
          "name": "United Arab Emirates dirham",
          "symbol": "د.إ"
        }
      },
      "capital": [
        "Abu Dhabi"
      ],
      "languages": {
        "ara": "Arabic"
      },
      "translations": {
        "spa": {
          "official": "Emiratos Árabes Unidos",
          "common": "Emiratos Árabes Unidos"
        }
      },
      "area": 83600,
      "demonyms": "Emirati",
      "population": 9890400,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/ae.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ae.png"
    },
    {
      "cca2": "MX",
      "currencies": {
        "MXN": {
          "name": "Mexican peso",
          "symbol": "$"
        }
      },
      "capital": [
        "Mexico City"
      ],
      "languages": {
        "spa": "Spanish"
      },
      "translations": {
        "spa": {
          "official": "Estados Unidos Mexicanos",
          "common": "México"
        }
      },
      "area": 1964375,
      "demonyms": "Mexican",
      "population": 128932753,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/mx.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/mx.png"
    },
    {
      "cca2": "TV",
      "currencies": {
        "AUD": {
          "name": "Australian dollar",
          "symbol": "$"
        },
        "TVD": {
          "name": "Tuvaluan dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Funafuti"
      ],
      "languages": {
        "eng": "English",
        "tvl": "Tuvaluan"
      },
      "translations": {
        "spa": {
          "official": "Tuvalu",
          "common": "Tuvalu"
        }
      },
      "area": 26,
      "demonyms": "Tuvaluan",
      "population": 11792,
      "continent": "Oceania",
      "flag": "https://flagcdn.com/w320/tv.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/tv.png"
    },
    {
      "cca2": "UZ",
      "currencies": {
        "UZS": {
          "name": "Uzbekistani soʻm",
          "symbol": "so'm"
        }
      },
      "capital": [
        "Tashkent"
      ],
      "languages": {
        "rus": "Russian",
        "uzb": "Uzbek"
      },
      "translations": {
        "spa": {
          "official": "República de Uzbekistán",
          "common": "Uzbekistán"
        }
      },
      "area": 447400,
      "demonyms": "Uzbekistani",
      "population": 34232050,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/uz.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/uz.png"
    },
    {
      "cca2": "EC",
      "currencies": {
        "USD": {
          "name": "United States dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Quito"
      ],
      "languages": {
        "spa": "Spanish"
      },
      "translations": {
        "spa": {
          "official": "República del Ecuador",
          "common": "Ecuador"
        }
      },
      "area": 276841,
      "demonyms": "Ecuadorean",
      "population": 17643060,
      "continent": "South America",
      "flag": "https://flagcdn.com/w320/ec.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ec.png"
    },
    {
      "cca2": "VC",
      "currencies": {},
      "capital": [
        "Kingstown"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "San Vicente y las Granadinas",
          "common": "San Vicente y Granadinas"
        }
      },
      "area": 389,
      "demonyms": "Saint Vincentian",
      "population": 110947,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/vc.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/vc.png"
    },
    {
      "cca2": "AF",
      "currencies": {
        "AFN": {
          "name": "Afghan afghani",
          "symbol": "؋"
        }
      },
      "capital": [
        "Kabul"
      ],
      "languages": {
        "prs": "Dari",
        "pus": "Pashto",
        "tuk": "Turkmen"
      },
      "translations": {
        "spa": {
          "official": "República Islámica de Afganistán",
          "common": "Afganistán"
        }
      },
      "area": 652230,
      "demonyms": "Afghan",
      "population": 40218234,
      "continent": "Asia",
      "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/af.png"
    },
    {
      "cca2": "SY",
      "currencies": {
        "SYP": {
          "name": "Syrian pound",
          "symbol": "£"
        }
      },
      "capital": [
        "Damascus"
      ],
      "languages": {
        "ara": "Arabic"
      },
      "translations": {
        "spa": {
          "official": "República Árabe Siria",
          "common": "Siria"
        }
      },
      "area": 185180,
      "demonyms": "Syrian",
      "population": 17500657,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/sy.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/sy.png"
    },
    {
      "cca2": "SC",
      "currencies": {
        "SCR": {
          "name": "Seychellois rupee",
          "symbol": "₨"
        }
      },
      "capital": [
        "Victoria"
      ],
      "languages": {
        "crs": "Seychellois Creole",
        "eng": "English",
        "fra": "French"
      },
      "translations": {
        "spa": {
          "official": "República de las Seychelles",
          "common": "Seychelles"
        }
      },
      "area": 452,
      "demonyms": "Seychellois",
      "population": 98462,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/sc.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/sc.png"
    },
    {
      "cca2": "BD",
      "currencies": {
        "BDT": {
          "name": "Bangladeshi taka",
          "symbol": "৳"
        }
      },
      "capital": [
        "Dhaka"
      ],
      "languages": {
        "ben": "Bengali"
      },
      "translations": {
        "spa": {
          "official": "República Popular de Bangladesh",
          "common": "Bangladesh"
        }
      },
      "area": 147570,
      "demonyms": "Bangladeshi",
      "population": 164689383,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/bd.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/bd.png"
    },
    {
      "cca2": "TN",
      "currencies": {
        "TND": {
          "name": "Tunisian dinar",
          "symbol": "د.ت"
        }
      },
      "capital": [
        "Tunis"
      ],
      "languages": {
        "ara": "Arabic"
      },
      "translations": {
        "spa": {
          "official": "República de Túnez",
          "common": "Túnez"
        }
      },
      "area": 163610,
      "demonyms": "Tunisian",
      "population": 11818618,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/tn.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/tn.png"
    },
    {
      "cca2": "ME",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Podgorica"
      ],
      "languages": {
        "cnr": "Montenegrin"
      },
      "translations": {
        "spa": {
          "official": "Montenegro",
          "common": "Montenegro"
        }
      },
      "area": 13812,
      "demonyms": "Montenegrin",
      "population": 621718,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/me.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/me.png"
    },
    {
      "cca2": "PT",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Lisbon"
      ],
      "languages": {
        "por": "Portuguese"
      },
      "translations": {
        "spa": {
          "official": "República Portuguesa",
          "common": "Portugal"
        }
      },
      "area": 92090,
      "demonyms": "Portuguese",
      "population": 10305564,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/pt.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/pt.png"
    },
    {
      "cca2": "DM",
      "currencies": {},
      "capital": [
        "Roseau"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "Mancomunidad de Dominica",
          "common": "Dominica"
        }
      },
      "area": 751,
      "demonyms": "Dominican",
      "population": 71991,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/dm.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/dm.png"
    },
    {
      "cca2": "CM",
      "currencies": {
        "XAF": {
          "name": "Central African CFA franc",
          "symbol": "Fr"
        }
      },
      "capital": [
        "Yaoundé"
      ],
      "languages": {
        "eng": "English",
        "fra": "French"
      },
      "translations": {
        "spa": {
          "official": "República de Camerún",
          "common": "Camerún"
        }
      },
      "area": 475442,
      "demonyms": "Cameroonian",
      "population": 26545864,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/cm.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/cm.png"
    },
    {
      "cca2": "GQ",
      "currencies": {
        "XAF": {
          "name": "Central African CFA franc",
          "symbol": "Fr"
        }
      },
      "capital": [
        "Malabo"
      ],
      "languages": {
        "fra": "French",
        "por": "Portuguese",
        "spa": "Spanish"
      },
      "translations": {
        "spa": {
          "official": "República de Guinea Ecuatorial",
          "common": "Guinea Ecuatorial"
        }
      },
      "area": 28051,
      "demonyms": "Equatorial Guinean",
      "population": 1402985,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/gq.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/gq.png"
    },
    {
      "cca2": "PM",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Saint-Pierre"
      ],
      "languages": {
        "fra": "French"
      },
      "translations": {
        "spa": {
          "official": "San Pedro y Miquelón",
          "common": "San Pedro y Miquelón"
        }
      },
      "area": 242,
      "demonyms": "Saint-Pierrais, Miquelonnais",
      "population": 6069,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/pm.png",
      "oatOfArms": {}
    },
    {
      "cca2": "BB",
      "currencies": {
        "BBD": {
          "name": "Barbadian dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Bridgetown"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "Barbados",
          "common": "Barbados"
        }
      },
      "area": 430,
      "demonyms": "Barbadian",
      "population": 287371,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/bb.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/bb.png"
    },
    {
      "cca2": "CR",
      "currencies": {
        "CRC": {
          "name": "Costa Rican colón",
          "symbol": "₡"
        }
      },
      "capital": [
        "San José"
      ],
      "languages": {
        "spa": "Spanish"
      },
      "translations": {
        "spa": {
          "official": "República de Costa Rica",
          "common": "Costa Rica"
        }
      },
      "area": 51100,
      "demonyms": "Costa Rican",
      "population": 5094114,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/cr.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/cr.png"
    },
    {
      "cca2": "MD",
      "currencies": {
        "MDL": {
          "name": "Moldovan leu",
          "symbol": "L"
        }
      },
      "capital": [
        "Chișinău"
      ],
      "languages": {
        "ron": "Romanian"
      },
      "translations": {
        "spa": {
          "official": "República de Moldova",
          "common": "Moldavia"
        }
      },
      "area": 33846,
      "demonyms": "Moldovan",
      "population": 2617820,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/md.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/md.png"
    },
    {
      "cca2": "NR",
      "currencies": {
        "AUD": {
          "name": "Australian dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Yaren"
      ],
      "languages": {
        "eng": "English",
        "nau": "Nauru"
      },
      "translations": {
        "spa": {
          "official": "República de Nauru",
          "common": "Nauru"
        }
      },
      "area": 21,
      "demonyms": "Nauruan",
      "population": 10834,
      "continent": "Oceania",
      "flag": "https://flagcdn.com/w320/nr.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/nr.png"
    },
    {
      "cca2": "CX",
      "currencies": {
        "AUD": {
          "name": "Australian dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Flying Fish Cove"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "Territorio de la Isla de Navidad",
          "common": "Isla de Navidad"
        }
      },
      "area": 135,
      "demonyms": "Christmas Islander",
      "population": 2072,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/cx.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/cx.png"
    },
    {
      "cca2": "LT",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Vilnius"
      ],
      "languages": {
        "lit": "Lithuanian"
      },
      "translations": {
        "spa": {
          "official": "República de Lituania",
          "common": "Lituania"
        }
      },
      "area": 65300,
      "demonyms": "Lithuanian",
      "population": 2794700,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/lt.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/lt.png"
    },
    {
      "cca2": "KR",
      "currencies": {
        "KRW": {
          "name": "South Korean won",
          "symbol": "₩"
        }
      },
      "capital": [
        "Seoul"
      ],
      "languages": {
        "kor": "Korean"
      },
      "translations": {
        "spa": {
          "official": "República de Corea",
          "common": "Corea del Sur"
        }
      },
      "area": 100210,
      "demonyms": "South Korean",
      "population": 51780579,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/kr.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/kr.png"
    },
    {
      "cca2": "GT",
      "currencies": {
        "GTQ": {
          "name": "Guatemalan quetzal",
          "symbol": "Q"
        }
      },
      "capital": [
        "Guatemala City"
      ],
      "languages": {
        "spa": "Spanish"
      },
      "translations": {
        "spa": {
          "official": "República de Guatemala",
          "common": "Guatemala"
        }
      },
      "area": 108889,
      "demonyms": "Guatemalan",
      "population": 16858333,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/gt.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/gt.png"
    },
    {
      "cca2": "IR",
      "currencies": {
        "IRR": {
          "name": "Iranian rial",
          "symbol": "﷼"
        }
      },
      "capital": [
        "Tehran"
      ],
      "languages": {
        "fas": "Persian (Farsi)"
      },
      "translations": {
        "spa": {
          "official": "República Islámica de Irán",
          "common": "Iran"
        }
      },
      "area": 1648195,
      "demonyms": "Iranian",
      "population": 83992953,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/ir.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ir.png"
    },
    {
      "cca2": "GM",
      "currencies": {
        "GMD": {
          "name": "dalasi",
          "symbol": "D"
        }
      },
      "capital": [
        "Banjul"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "República de Gambia",
          "common": "Gambia"
        }
      },
      "area": 10689,
      "demonyms": "Gambian",
      "population": 2416664,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/gm.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/gm.png"
    },
    {
      "cca2": "BY",
      "currencies": {
        "BYN": {
          "name": "Belarusian ruble",
          "symbol": "Br"
        }
      },
      "capital": [
        "Minsk"
      ],
      "languages": {
        "bel": "Belarusian",
        "rus": "Russian"
      },
      "translations": {
        "spa": {
          "official": "República de Belarús",
          "common": "Bielorrusia"
        }
      },
      "area": 207600,
      "demonyms": "Belarusian",
      "population": 9398861,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/by.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/by.png"
    },
    {
      "cca2": "RS",
      "currencies": {
        "RSD": {
          "name": "Serbian dinar",
          "symbol": "дин."
        }
      },
      "capital": [
        "Belgrade"
      ],
      "languages": {
        "srp": "Serbian"
      },
      "translations": {
        "spa": {
          "official": "República de Serbia",
          "common": "Serbia"
        }
      },
      "area": 88361,
      "demonyms": "Serbian",
      "population": 6908224,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/rs.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/rs.png"
    },
    {
      "cca2": "BS",
      "currencies": {
        "BSD": {
          "name": "Bahamian dollar",
          "symbol": "$"
        },
        "USD": {
          "name": "United States dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Nassau"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {},
      "area": 13943,
      "demonyms": "Bahamian",
      "population": 393248,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/bs.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/bs.png"
    },
    {
      "cca2": "MK",
      "currencies": {
        "MKD": {
          "name": "denar",
          "symbol": "den"
        }
      },
      "capital": [
        "Skopje"
      ],
      "languages": {
        "mkd": "Macedonian"
      },
      "translations": {
        "spa": {
          "official": "República de Macedonia del Norte",
          "common": "Macedonia del Norte"
        }
      },
      "area": 25713,
      "demonyms": "Macedonian",
      "population": 2077132,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/mk.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/mk.png"
    },
    {
      "cca2": "MO",
      "currencies": {
        "MOP": {
          "name": "Macanese pataca",
          "symbol": "P"
        }
      },
      "languages": {
        "por": "Portuguese",
        "zho": "Chinese"
      },
      "translations": {
        "spa": {
          "official": "Macao, Región Administrativa Especial de la República Popular China",
          "common": "Macao"
        }
      },
      "area": 30,
      "demonyms": "Macanese",
      "population": 649342,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/mo.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/mo.png"
    },
    {
      "cca2": "CH",
      "currencies": {
        "CHF": {
          "name": "Swiss franc",
          "symbol": "Fr."
        }
      },
      "capital": [
        "Bern"
      ],
      "languages": {
        "fra": "French",
        "gsw": "Swiss German",
        "ita": "Italian",
        "roh": "Romansh"
      },
      "translations": {
        "spa": {
          "official": "Confederación Suiza",
          "common": "Suiza"
        }
      },
      "area": 41284,
      "demonyms": "Swiss",
      "population": 8654622,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/ch.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ch.png"
    },
    {
      "cca2": "SD",
      "currencies": {
        "SDG": {
          "name": "Sudanese pound"
        }
      },
      "capital": [
        "Khartoum"
      ],
      "languages": {
        "ara": "Arabic",
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "República de Sudán",
          "common": "Sudán"
        }
      },
      "area": 1886068,
      "demonyms": "Sudanese",
      "population": 43849269,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/sd.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/sd.png"
    },
    {
      "cca2": "TF",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Port-aux-Français"
      ],
      "languages": {
        "fra": "French"
      },
      "translations": {
        "spa": {
          "official": "Territorio del Francés Tierras australes y antárticas",
          "common": "Tierras Australes y Antárticas Francesas"
        }
      },
      "area": 7747,
      "demonyms": "French",
      "population": 400,
      "continent": "Antarctica",
      "flag": "https://flagcdn.com/w320/tf.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/tf.png"
    },
    {
      "cca2": "DZ",
      "currencies": {
        "DZD": {
          "name": "Algerian dinar",
          "symbol": "د.ج"
        }
      },
      "capital": [
        "Algiers"
      ],
      "languages": {
        "ara": "Arabic"
      },
      "translations": {
        "spa": {
          "official": "República Argelina Democrática y Popular",
          "common": "Argelia"
        }
      },
      "area": 2381741,
      "demonyms": "Algerian",
      "population": 44700000,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/dz.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/dz.png"
    },
    {
      "cca2": "NG",
      "currencies": {
        "NGN": {
          "name": "Nigerian naira",
          "symbol": "₦"
        }
      },
      "capital": [
        "Abuja"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "República Federal de Nigeria",
          "common": "Nigeria"
        }
      },
      "area": 923768,
      "demonyms": "Nigerian",
      "population": 206139587,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/ng.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ng.png"
    },
    {
      "cca2": "FJ",
      "currencies": {
        "FJD": {
          "name": "Fijian dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Suva"
      ],
      "languages": {
        "eng": "English",
        "fij": "Fijian",
        "hif": "Fiji Hindi"
      },
      "translations": {
        "spa": {
          "official": "República de Fiji",
          "common": "Fiyi"
        }
      },
      "area": 18272,
      "demonyms": "Fijian",
      "population": 896444,
      "continent": "Oceania",
      "flag": "https://flagcdn.com/w320/fj.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/fj.png"
    },
    {
      "cca2": "KE",
      "currencies": {
        "KES": {
          "name": "Kenyan shilling",
          "symbol": "Sh"
        }
      },
      "capital": [
        "Nairobi"
      ],
      "languages": {
        "eng": "English",
        "swa": "Swahili"
      },
      "translations": {
        "spa": {
          "official": "República de Kenya",
          "common": "Kenia"
        }
      },
      "area": 580367,
      "demonyms": "Kenyan",
      "population": 53771300,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/ke.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ke.png"
    },
    {
      "cca2": "LY",
      "currencies": {
        "LYD": {
          "name": "Libyan dinar",
          "symbol": "ل.د"
        }
      },
      "capital": [
        "Tripoli"
      ],
      "languages": {
        "ara": "Arabic"
      },
      "translations": {
        "spa": {
          "official": "Estado de Libia",
          "common": "Libia"
        }
      },
      "area": 1759540,
      "demonyms": "Libyan",
      "population": 6871287,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/ly.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ly.png"
    },
    {
      "cca2": "KN",
      "currencies": {},
      "capital": [
        "Basseterre"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "Federación de San Cristóbal y Nevis",
          "common": "San Cristóbal y Nieves"
        }
      },
      "area": 261,
      "demonyms": "Kittitian or Nevisian",
      "population": 53192,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/kn.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/kn.png"
    },
    {
      "cca2": "BZ",
      "currencies": {
        "BZD": {
          "name": "Belize dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Belmopan"
      ],
      "languages": {
        "bjz": "Belizean Creole",
        "eng": "English",
        "spa": "Spanish"
      },
      "translations": {
        "spa": {
          "official": "Belice",
          "common": "Belice"
        }
      },
      "area": 22966,
      "demonyms": "Belizean",
      "population": 397621,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/bz.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/bz.png"
    },
    {
      "cca2": "CI",
      "currencies": {
        "XOF": {
          "name": "West African CFA franc",
          "symbol": "Fr"
        }
      },
      "capital": [
        "Yamoussoukro"
      ],
      "languages": {
        "fra": "French"
      },
      "translations": {
        "spa": {
          "official": "República de Côte d'Ivoire",
          "common": "Costa de Marfil"
        }
      },
      "area": 322463,
      "demonyms": "Ivorian",
      "population": 26378275,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/ci.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ci.png"
    },
    {
      "cca2": "DE",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Berlin"
      ],
      "languages": {
        "deu": "German"
      },
      "translations": {
        "spa": {
          "official": "República Federal de Alemania",
          "common": "Alemania"
        }
      },
      "area": 357114,
      "demonyms": "German",
      "population": 83240525,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/de.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/de.png"
    },
    {
      "cca2": "LI",
      "currencies": {
        "CHF": {
          "name": "Swiss franc",
          "symbol": "Fr"
        }
      },
      "capital": [
        "Vaduz"
      ],
      "languages": {
        "deu": "German"
      },
      "translations": {
        "spa": {
          "official": "Principado de Liechtenstein",
          "common": "Liechtenstein"
        }
      },
      "area": 160,
      "demonyms": "Liechtensteiner",
      "population": 38137,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/li.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/li.png"
    },
    {
      "cca2": "NE",
      "currencies": {
        "XOF": {
          "name": "West African CFA franc",
          "symbol": "Fr"
        }
      },
      "capital": [
        "Niamey"
      ],
      "languages": {
        "fra": "French"
      },
      "translations": {
        "spa": {
          "official": "República de Níger",
          "common": "Níger"
        }
      },
      "area": 1267000,
      "demonyms": "Nigerien",
      "population": 24206636,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/ne.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ne.png"
    },
    {
      "cca2": "CW",
      "currencies": {
        "ANG": {
          "name": "Netherlands Antillean guilder",
          "symbol": "ƒ"
        }
      },
      "capital": [
        "Willemstad"
      ],
      "translations": {
        "spa": {
          "official": "País de Curazao",
          "common": "Curazao"
        }
      },
      "area": 444,
      "demonyms": "Curaçaoan",
      "population": 155014,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/cw.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/cw.png"
    },
    {
      "cca2": "JM",
      "currencies": {
        "JMD": {
          "name": "Jamaican dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Kingston"
      ],
      "languages": {
        "eng": "English",
        "jam": "Jamaican Patois"
      },
      "translations": {
        "spa": {
          "official": "Jamaica",
          "common": "Jamaica"
        }
      },
      "area": 10991,
      "demonyms": "Jamaican",
      "population": 2961161,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/jm.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/jm.png"
    },
    {
      "cca2": "MM",
      "currencies": {
        "MMK": {
          "name": "Burmese kyat",
          "symbol": "Ks"
        }
      },
      "capital": [
        "Naypyidaw"
      ],
      "languages": {
        "mya": "Burmese"
      },
      "translations": {
        "spa": {
          "official": "República de la Unión de Myanmar",
          "common": "Myanmar"
        }
      },
      "area": 676578,
      "demonyms": "Burmese",
      "population": 54409794,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/mm.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/mm.png"
    },
    {
      "cca2": "DO",
      "currencies": {
        "DOP": {
          "name": "Dominican peso",
          "symbol": "$"
        }
      },
      "capital": [
        "Santo Domingo"
      ],
      "languages": {
        "spa": "Spanish"
      },
      "translations": {
        "spa": {
          "official": "República Dominicana",
          "common": "República Dominicana"
        }
      },
      "area": 48671,
      "demonyms": "Dominican",
      "population": 10847904,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/do.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/do.png"
    },
    {
      "cca2": "LA",
      "currencies": {
        "LAK": {
          "name": "Lao kip",
          "symbol": "₭"
        }
      },
      "capital": [
        "Vientiane"
      ],
      "languages": {
        "lao": "Lao"
      },
      "translations": {
        "spa": {
          "official": "República Democrática Popular Lao",
          "common": "Laos"
        }
      },
      "area": 236800,
      "demonyms": "Laotian",
      "population": 7275556,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/la.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/la.png"
    },
    {
      "cca2": "MY",
      "currencies": {
        "MYR": {
          "name": "Malaysian ringgit",
          "symbol": "RM"
        }
      },
      "capital": [
        "Kuala Lumpur"
      ],
      "languages": {
        "eng": "English",
        "msa": "Malay"
      },
      "translations": {
        "spa": {
          "official": "Malasia",
          "common": "Malasia"
        }
      },
      "area": 330803,
      "demonyms": "Malaysian",
      "population": 32365998,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/my.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/my.png"
    },
    {
      "cca2": "TD",
      "currencies": {
        "XAF": {
          "name": "Central African CFA franc",
          "symbol": "Fr"
        }
      },
      "capital": [
        "N'Djamena"
      ],
      "languages": {
        "ara": "Arabic",
        "fra": "French"
      },
      "translations": {
        "spa": {
          "official": "República de Chad",
          "common": "Chad"
        }
      },
      "area": 1284000,
      "demonyms": "Chadian",
      "population": 16425859,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/td.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/td.png"
    },
    {
      "cca2": "BI",
      "currencies": {
        "BIF": {
          "name": "Burundian franc",
          "symbol": "Fr"
        }
      },
      "capital": [
        "Gitega"
      ],
      "languages": {
        "fra": "French",
        "run": "Kirundi"
      },
      "translations": {
        "spa": {
          "official": "República de Burundi",
          "common": "Burundi"
        }
      },
      "area": 27834,
      "demonyms": "Burundian",
      "population": 11890781,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/bi.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/bi.png"
    },
    {
      "cca2": "CK",
      "currencies": {
        "CKD": {
          "name": "Cook Islands dollar",
          "symbol": "$"
        },
        "NZD": {
          "name": "New Zealand dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Avarua"
      ],
      "languages": {
        "eng": "English",
        "rar": "Cook Islands Māori"
      },
      "translations": {
        "spa": {
          "official": "Islas Cook",
          "common": "Islas Cook"
        }
      },
      "area": 236,
      "demonyms": "Cook Islander",
      "population": 18100,
      "continent": "Oceania",
      "flag": "https://flagcdn.com/w320/ck.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ck.png"
    },
    {
      "cca2": "CG",
      "currencies": {
        "XAF": {
          "name": "Central African CFA franc",
          "symbol": "Fr"
        }
      },
      "capital": [
        "Brazzaville"
      ],
      "languages": {
        "fra": "French",
        "kon": "Kikongo",
        "lin": "Lingala"
      },
      "translations": {
        "spa": {
          "official": "República del Congo",
          "common": "Congo"
        }
      },
      "area": 342000,
      "demonyms": "Congolese",
      "population": 5657000,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/cg.png",
      "oatOfArms": {}
    },
    {
      "cca2": "CY",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Nicosia"
      ],
      "languages": {
        "ell": "Greek",
        "tur": "Turkish"
      },
      "translations": {
        "spa": {
          "official": "República de Chipre",
          "common": "Chipre"
        }
      },
      "area": 9251,
      "demonyms": "Cypriot",
      "population": 1207361,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/cy.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/cy.png"
    },
    {
      "cca2": "GY",
      "currencies": {
        "GYD": {
          "name": "Guyanese dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Georgetown"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "República Cooperativa de Guyana",
          "common": "Guyana"
        }
      },
      "area": 214969,
      "demonyms": "Guyanese",
      "population": 786559,
      "continent": "South America",
      "flag": "https://flagcdn.com/w320/gy.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/gy.png"
    },
    {
      "cca2": "PK",
      "currencies": {
        "PKR": {
          "name": "Pakistani rupee",
          "symbol": "₨"
        }
      },
      "capital": [
        "Islamabad"
      ],
      "languages": {
        "eng": "English",
        "urd": "Urdu"
      },
      "translations": {
        "spa": {
          "official": "República Islámica de Pakistán",
          "common": "Pakistán"
        }
      },
      "area": 881912,
      "demonyms": "Pakistani",
      "population": 220892331,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/pk.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/pk.png"
    },
    {
      "cca2": "SZ",
      "currencies": {
        "SZL": {
          "name": "Swazi lilangeni",
          "symbol": "L"
        },
        "ZAR": {
          "name": "South African rand",
          "symbol": "R"
        }
      },
      "capital": [
        "Mbabane"
      ],
      "languages": {
        "eng": "English",
        "ssw": "Swazi"
      },
      "translations": {
        "spa": {
          "official": "Reino de eSwatini",
          "common": "Suazilandia"
        }
      },
      "area": 17364,
      "demonyms": "Swazi",
      "population": 1160164,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/sz.png",
      "oatOfArms": {}
    },
    {
      "cca2": "AG",
      "currencies": {},
      "capital": [
        "Saint John's"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "Antigua y Barbuda",
          "common": "Antigua y Barbuda"
        }
      },
      "area": 442,
      "demonyms": "Antiguan, Barbudan",
      "population": 97928,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/ag.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ag.png"
    },
    {
      "cca2": "CD",
      "currencies": {
        "CDF": {
          "name": "Congolese franc",
          "symbol": "FC"
        }
      },
      "capital": [
        "Kinshasa"
      ],
      "languages": {
        "fra": "French",
        "kon": "Kikongo",
        "lin": "Lingala",
        "lua": "Tshiluba",
        "swa": "Swahili"
      },
      "translations": {
        "spa": {
          "official": "República Democrática del Congo",
          "common": "Congo (Rep. Dem.)"
        }
      },
      "area": 2344858,
      "demonyms": "Congolese",
      "population": 108407721,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/cd.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/cd.png"
    },
    {
      "cca2": "BE",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Brussels"
      ],
      "translations": {
        "spa": {
          "official": "Reino de Bélgica",
          "common": "Bélgica"
        }
      },
      "area": 30528,
      "demonyms": "Belgian",
      "population": 11555997,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/be.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/be.png"
    },
    {
      "cca2": "RO",
      "currencies": {
        "RON": {
          "name": "Romanian leu",
          "symbol": "lei"
        }
      },
      "capital": [
        "Bucharest"
      ],
      "languages": {
        "ron": "Romanian"
      },
      "translations": {
        "spa": {
          "official": "Rumania",
          "common": "Rumania"
        }
      },
      "area": 238391,
      "demonyms": "Romanian",
      "population": 19286123,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/ro.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ro.png"
    },
    {
      "cca2": "TZ",
      "currencies": {
        "TZS": {
          "name": "Tanzanian shilling",
          "symbol": "Sh"
        }
      },
      "capital": [
        "Dodoma"
      ],
      "languages": {
        "eng": "English",
        "swa": "Swahili"
      },
      "translations": {
        "spa": {
          "official": "República Unida de Tanzania",
          "common": "Tanzania"
        }
      },
      "area": 945087,
      "demonyms": "Tanzanian",
      "population": 59734213,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/tz.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/tz.png"
    },
    {
      "cca2": "EG",
      "currencies": {
        "EGP": {
          "name": "Egyptian pound",
          "symbol": "£"
        }
      },
      "capital": [
        "Cairo"
      ],
      "languages": {
        "ara": "Arabic"
      },
      "translations": {
        "spa": {
          "official": "República Árabe de Egipto",
          "common": "Egipto"
        }
      },
      "area": 1002450,
      "demonyms": "Egyptian",
      "population": 102334403,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/eg.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/eg.png"
    },
    {
      "cca2": "SI",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Ljubljana"
      ],
      "languages": {
        "slv": "Slovene"
      },
      "translations": {
        "spa": {
          "official": "República de Eslovenia",
          "common": "Eslovenia"
        }
      },
      "area": 20273,
      "demonyms": "Slovene",
      "population": 2100126,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/si.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/si.png"
    },
    {
      "cca2": "JP",
      "currencies": {
        "JPY": {
          "name": "Japanese yen",
          "symbol": "¥"
        }
      },
      "capital": [
        "Tokyo"
      ],
      "languages": {
        "jpn": "Japanese"
      },
      "translations": {
        "spa": {
          "official": "Japón",
          "common": "Japón"
        }
      },
      "area": 377930,
      "demonyms": "Japanese",
      "population": 125836021,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/jp.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/jp.png"
    },
    {
      "cca2": "GD",
      "currencies": {},
      "capital": [
        "St. George's"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "Granada",
          "common": "Grenada"
        }
      },
      "area": 344,
      "demonyms": "Grenadian",
      "population": 112519,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/gd.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/gd.png"
    },
    {
      "cca2": "VA",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Vatican City"
      ],
      "languages": {
        "ita": "Italian",
        "lat": "Latin"
      },
      "translations": {
        "spa": {
          "official": "Ciudad del Vaticano",
          "common": "Ciudad del Vaticano"
        }
      },
      "area": 0.44,
      "demonyms": "Vatican",
      "population": 451,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/va.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/va.png"
    },
    {
      "cca2": "BR",
      "currencies": {
        "BRL": {
          "name": "Brazilian real",
          "symbol": "R$"
        }
      },
      "capital": [
        "Brasília"
      ],
      "languages": {
        "por": "Portuguese"
      },
      "translations": {
        "spa": {
          "official": "República Federativa del Brasil",
          "common": "Brasil"
        }
      },
      "area": 8515767,
      "demonyms": "Brazilian",
      "population": 212559409,
      "continent": "South America",
      "flag": "https://flagcdn.com/w320/br.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/br.png"
    },
    {
      "cca2": "GH",
      "currencies": {
        "GHS": {
          "name": "Ghanaian cedi",
          "symbol": "₵"
        }
      },
      "capital": [
        "Accra"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "República de Ghana",
          "common": "Ghana"
        }
      },
      "area": 238533,
      "demonyms": "Ghanaian",
      "population": 31072945,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/gh.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/gh.png"
    },
    {
      "cca2": "SR",
      "currencies": {
        "SRD": {
          "name": "Surinamese dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Paramaribo"
      ],
      "translations": {
        "spa": {
          "official": "República de Suriname",
          "common": "Surinam"
        }
      },
      "area": 163820,
      "demonyms": "Surinamer",
      "population": 586634,
      "continent": "South America",
      "flag": "https://flagcdn.com/w320/sr.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/sr.png"
    },
    {
      "cca2": "TR",
      "currencies": {
        "TRY": {
          "name": "Turkish lira",
          "symbol": "₺"
        }
      },
      "capital": [
        "Ankara"
      ],
      "languages": {
        "tur": "Turkish"
      },
      "translations": {
        "spa": {
          "official": "República de Turquía",
          "common": "Turquía"
        }
      },
      "area": 783562,
      "demonyms": "Turkish",
      "population": 84339067,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/tr.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/tr.png"
    },
    {
      "cca2": "BW",
      "currencies": {
        "BWP": {
          "name": "Botswana pula",
          "symbol": "P"
        }
      },
      "capital": [
        "Gaborone"
      ],
      "languages": {
        "eng": "English",
        "tsn": "Tswana"
      },
      "translations": {
        "spa": {
          "official": "República de Botswana",
          "common": "Botswana"
        }
      },
      "area": 582000,
      "demonyms": "Motswana",
      "population": 2351625,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/bw.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/bw.png"
    },
    {
      "cca2": "HK",
      "currencies": {
        "HKD": {
          "name": "Hong Kong dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "City of Victoria"
      ],
      "languages": {
        "eng": "English",
        "zho": "Chinese"
      },
      "translations": {
        "spa": {
          "official": "Hong Kong Región Administrativa Especial de la República Popular China",
          "common": "Hong Kong"
        }
      },
      "area": 1104,
      "demonyms": "Hong Konger",
      "population": 7500700,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/hk.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/hk.png"
    },
    {
      "cca2": "XK",
      "capital": [
        "Pristina"
      ],
      "languages": {
        "sqi": "Albanian",
        "srp": "Serbian"
      },
      "translations": {
        "spa": {
          "official": "República de Kosovo",
          "common": "Kosovo"
        }
      },
      "area": 10908,
      "demonyms": "Kosovar",
      "population": 1775378,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/xk.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/xk.png"
    },
    {
      "cca2": "MF",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Marigot"
      ],
      "languages": {
        "fra": "French"
      },
      "translations": {
        "spa": {
          "official": "Saint Martin",
          "common": "Saint Martin"
        }
      },
      "area": 53,
      "demonyms": "Saint Martin Islander",
      "population": 38659,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/mf.png",
      "oatOfArms": {}
    },
    {
      "cca2": "TM",
      "currencies": {
        "TMT": {
          "name": "Turkmenistan manat",
          "symbol": "m"
        }
      },
      "capital": [
        "Ashgabat"
      ],
      "languages": {
        "rus": "Russian",
        "tuk": "Turkmen"
      },
      "translations": {
        "spa": {
          "official": "Turkmenistán",
          "common": "Turkmenistán"
        }
      },
      "area": 488100,
      "demonyms": "Turkmen",
      "population": 6031187,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/tm.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/tm.png"
    },
    {
      "cca2": "AZ",
      "currencies": {
        "AZN": {
          "name": "Azerbaijani manat",
          "symbol": "₼"
        }
      },
      "capital": [
        "Baku"
      ],
      "languages": {
        "aze": "Azerbaijani",
        "rus": "Russian"
      },
      "translations": {
        "spa": {
          "official": "República de Azerbaiyán",
          "common": "Azerbaiyán"
        }
      },
      "area": 86600,
      "demonyms": "Azerbaijani",
      "population": 10110116,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/az.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/az.png"
    },
    {
      "cca2": "ZA",
      "currencies": {
        "ZAR": {
          "name": "South African rand",
          "symbol": "R"
        }
      },
      "capital": [
        "Pretoria",
        "Bloemfontein",
        "Cape Town"
      ],
      "languages": {
        "afr": "Afrikaans",
        "eng": "English",
        "nbl": "Southern Ndebele",
        "nso": "Northern Sotho",
        "sot": "Southern Sotho",
        "ssw": "Swazi",
        "tsn": "Tswana",
        "tso": "Tsonga",
        "ven": "Venda",
        "xho": "Xhosa",
        "zul": "Zulu"
      },
      "translations": {
        "spa": {
          "official": "República de Sudáfrica",
          "common": "Sudáfrica"
        }
      },
      "area": 1221037,
      "demonyms": "South African",
      "population": 59308690,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/za.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/za.png"
    },
    {
      "cca2": "ET",
      "currencies": {
        "ETB": {
          "name": "Ethiopian birr",
          "symbol": "Br"
        }
      },
      "capital": [
        "Addis Ababa"
      ],
      "languages": {
        "amh": "Amharic"
      },
      "translations": {
        "spa": {
          "official": "República Democrática Federal de Etiopía",
          "common": "Etiopía"
        }
      },
      "area": 1104300,
      "demonyms": "Ethiopian",
      "population": 114963583,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/et.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/et.png"
    },
    {
      "cca2": "SK",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Bratislava"
      ],
      "languages": {
        "slk": "Slovak"
      },
      "translations": {
        "spa": {
          "official": "República Eslovaca",
          "common": "República Eslovaca"
        }
      },
      "area": 49037,
      "demonyms": "Slovak",
      "population": 5458827,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/sk.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/sk.png"
    },
    {
      "cca2": "NA",
      "currencies": {
        "NAD": {
          "name": "Namibian dollar",
          "symbol": "$"
        },
        "ZAR": {
          "name": "South African rand",
          "symbol": "R"
        }
      },
      "capital": [
        "Windhoek"
      ],
      "languages": {
        "afr": "Afrikaans",
        "deu": "German",
        "eng": "English",
        "her": "Herero",
        "hgm": "Khoekhoe",
        "kwn": "Kwangali",
        "loz": "Lozi",
        "ndo": "Ndonga",
        "tsn": "Tswana"
      },
      "translations": {
        "spa": {
          "official": "República de Namibia",
          "common": "Namibia"
        }
      },
      "area": 825615,
      "demonyms": "Namibian",
      "population": 2540916,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/na.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/na.png"
    },
    {
      "cca2": "IN",
      "currencies": {
        "INR": {
          "name": "Indian rupee",
          "symbol": "₹"
        }
      },
      "capital": [
        "New Delhi"
      ],
      "languages": {
        "eng": "English",
        "hin": "Hindi",
        "tam": "Tamil"
      },
      "translations": {
        "spa": {
          "official": "República de la India",
          "common": "India"
        }
      },
      "area": 3287590,
      "demonyms": "Indian",
      "population": 1380004385,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/in.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/in.png"
    },
    {
      "cca2": "RE",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Saint-Denis"
      ],
      "languages": {
        "fra": "French"
      },
      "translations": {
        "spa": {
          "official": "Isla de la Reunión",
          "common": "Reunión"
        }
      },
      "area": 2511,
      "demonyms": "Réunionese",
      "population": 840974,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/re.png",
      "oatOfArms": {}
    },
    {
      "cca2": "UG",
      "currencies": {
        "UGX": {
          "name": "Ugandan shilling",
          "symbol": "Sh"
        }
      },
      "capital": [
        "Kampala"
      ],
      "languages": {
        "eng": "English",
        "swa": "Swahili"
      },
      "translations": {
        "spa": {
          "official": "República de Uganda",
          "common": "Uganda"
        }
      },
      "area": 241550,
      "demonyms": "Ugandan",
      "population": 45741000,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/ug.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ug.png"
    },
    {
      "cca2": "TC",
      "currencies": {
        "USD": {
          "name": "United States dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Cockburn Town"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "Islas Turcas y Caicos",
          "common": "Islas Turks y Caicos"
        }
      },
      "area": 948,
      "demonyms": "Turks and Caicos Islander",
      "population": 38718,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/tc.png",
      "oatOfArms": {}
    },
    {
      "cca2": "TT",
      "currencies": {
        "TTD": {
          "name": "Trinidad and Tobago dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Port of Spain"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "República de Trinidad y Tobago",
          "common": "Trinidad y Tobago"
        }
      },
      "area": 5130,
      "demonyms": "Trinidadian",
      "population": 1399491,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/tt.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/tt.png"
    },
    {
      "cca2": "GI",
      "languages": {
        "eng": "English"
      },
      "translations": {},
      "area": 6,
      "demonyms": {},
      "population": 33691,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/gi.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/gi.png"
    },
    {
      "cca2": "MR",
      "currencies": {
        "MRU": {
          "name": "Mauritanian ouguiya",
          "symbol": "UM"
        }
      },
      "capital": [
        "Nouakchott"
      ],
      "languages": {
        "ara": "Arabic"
      },
      "translations": {
        "spa": {
          "official": "República Islámica de Mauritania",
          "common": "Mauritania"
        }
      },
      "area": 1030700,
      "demonyms": "Mauritanian",
      "population": 4649660,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/mr.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/mr.png"
    },
    {
      "cca2": "IE",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Dublin"
      ],
      "languages": {
        "eng": "English",
        "gle": "Irish"
      },
      "translations": {
        "spa": {
          "official": "República de Irlanda",
          "common": "Irlanda"
        }
      },
      "area": 70273,
      "demonyms": "Irish",
      "population": 4994724,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/ie.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ie.png"
    },
    {
      "cca2": "MG",
      "currencies": {
        "MGA": {
          "name": "Malagasy ariary",
          "symbol": "Ar"
        }
      },
      "capital": [
        "Antananarivo"
      ],
      "languages": {
        "fra": "French",
        "mlg": "Malagasy"
      },
      "translations": {},
      "area": 587041,
      "demonyms": "Malagasy",
      "population": 27691019,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/mg.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/mg.png"
    },
    {
      "cca2": "GL",
      "currencies": {
        "DKK": {
          "name": "krone",
          "symbol": "kr."
        }
      },
      "capital": [
        "Nuuk"
      ],
      "languages": {
        "kal": "Greenlandic"
      },
      "translations": {
        "spa": {
          "official": "Groenlandia",
          "common": "Groenlandia"
        }
      },
      "area": 2166086,
      "demonyms": "Greenlandic",
      "population": 56367,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/gl.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/gl.png"
    },
    {
      "cca2": "NI",
      "capital": [
        "Managua"
      ],
      "languages": {
        "spa": "Spanish"
      },
      "translations": {},
      "area": 130373,
      "demonyms": {},
      "population": 6624554,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/ni.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ni.png"
    },
    {
      "cca2": "BN",
      "currencies": {
        "BND": {
          "name": "Brunei dollar",
          "symbol": "$"
        },
        "SGD": {
          "name": "Singapore dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Bandar Seri Begawan"
      ],
      "languages": {
        "msa": "Malay"
      },
      "translations": {
        "spa": {
          "official": "Nación de Brunei, Morada de la Paz",
          "common": "Brunei"
        }
      },
      "area": 5765,
      "demonyms": "Bruneian",
      "population": 437483,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/bn.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/bn.png"
    },
    {
      "cca2": "KM",
      "currencies": {
        "KMF": {
          "name": "Comorian franc",
          "symbol": "Fr"
        }
      },
      "capital": [
        "Moroni"
      ],
      "languages": {
        "ara": "Arabic",
        "fra": "French",
        "zdj": "Comorian"
      },
      "translations": {
        "spa": {
          "official": "Unión de las Comoras",
          "common": "Comoras"
        }
      },
      "area": 1862,
      "demonyms": "Comoran",
      "population": 869595,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/km.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/km.png"
    },
    {
      "cca2": "BF",
      "currencies": {
        "XOF": {
          "name": "West African CFA franc",
          "symbol": "Fr"
        }
      },
      "capital": [
        "Ouagadougou"
      ],
      "languages": {
        "fra": "French"
      },
      "translations": {
        "spa": {
          "official": "Burkina Faso",
          "common": "Burkina Faso"
        }
      },
      "area": 272967,
      "demonyms": "Burkinabe",
      "population": 20903278,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/bf.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/bf.png"
    },
    {
      "cca2": "SX",
      "currencies": {
        "ANG": {
          "name": "Netherlands Antillean guilder",
          "symbol": "ƒ"
        }
      },
      "capital": [
        "Philipsburg"
      ],
      "translations": {
        "spa": {
          "official": "Sint Maarten",
          "common": "Sint Maarten"
        }
      },
      "area": 34,
      "demonyms": "St. Maartener",
      "population": 40812,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/sx.png",
      "oatOfArms": {}
    },
    {
      "cca2": "CF",
      "currencies": {
        "XAF": {
          "name": "Central African CFA franc",
          "symbol": "Fr"
        }
      },
      "capital": [
        "Bangui"
      ],
      "languages": {
        "fra": "French",
        "sag": "Sango"
      },
      "translations": {
        "spa": {
          "official": "República Centroafricana",
          "common": "República Centroafricana"
        },
      },
      "area": 622984,
      "demonyms": "Central African",
      "population": 4829764,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/cf.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/cf.png"
    },
    {
      "cca2": "NU",
      "currencies": {
        "NZD": {
          "name": "New Zealand dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Alofi"
      ],
      "languages": {
        "eng": "English",
        "niu": "Niuean"
      },
      "translations": {
        "spa": {
          "official": "Niue",
          "common": "Niue"
        }
      },
      "area": 260,
      "demonyms": "Niuean",
      "population": 1470,
      "continent": "Oceania",
      "flag": "https://flagcdn.com/w320/nu.png",
      "oatOfArms": {}
    },
    {
      "cca2": "SV",
      "currencies": {
        "USD": {
          "name": "United States dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "San Salvador"
      ],
      "languages": {
        "spa": "Spanish"
      },
      "translations": {
        "spa": {
          "official": "República de El Salvador",
          "common": "El Salvador"
        }
      },
      "area": 21041,
      "demonyms": "Salvadoran",
      "population": 6486201,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/sv.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/sv.png"
    },
    {
      "cca2": "PS",
      "currencies": {
        "EGP": {
          "name": "Egyptian pound",
          "symbol": "E£"
        },
        "ILS": {
          "name": "Israeli new shekel",
          "symbol": "₪"
        },
        "JOD": {
          "name": "Jordanian dinar",
          "symbol": "JD"
        }
      },
      "capital": [
        "Ramallah",
        "Jerusalem"
      ],
      "languages": {
        "ara": "Arabic"
      },
      "translations": {
        "spa": {
          "official": "Estado de Palestina",
          "common": "Palestina"
        }
      },
      "area": 6220,
      "demonyms": "Palestinian",
      "population": 4803269,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/ps.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ps.png"
    },
    {
      "cca2": "TJ",
      "currencies": {
        "TJS": {
          "name": "Tajikistani somoni",
          "symbol": "ЅМ"
        }
      },
      "capital": [
        "Dushanbe"
      ],
      "languages": {
        "rus": "Russian",
        "tgk": "Tajik"
      },
      "translations": {
        "spa": {
          "official": "República de Tayikistán",
          "common": "Tayikistán"
        }
      },
      "area": 143100,
      "demonyms": "Tadzhik",
      "population": 9537642,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/tj.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/tj.png"
    },
    {
      "cca2": "AL",
      "currencies": {
        "ALL": {
          "name": "Albanian lek",
          "symbol": "L"
        }
      },
      "capital": [
        "Tirana"
      ],
      "languages": {
        "sqi": "Albanian"
      },
      "translations": {
        "spa": {
          "official": "República de Albania",
          "common": "Albania"
        }
      },
      "area": 28748,
      "demonyms": "Albanian",
      "population": 2837743,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/al.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/al.png"
    },
    {
      "cca2": "MA",
      "currencies": {
        "MAD": {
          "name": "Moroccan dirham",
          "symbol": "د.م."
        }
      },
      "capital": [
        "Rabat"
      ],
      "languages": {
        "ara": "Arabic",
        "ber": "Berber"
      },
      "translations": {
        "spa": {
          "official": "Reino de Marruecos",
          "common": "Marruecos"
        }
      },
      "area": 446550,
      "demonyms": "Moroccan",
      "population": 36910558,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/ma.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ma.png"
    },
    {
      "cca2": "TH",
      "currencies": {
        "THB": {
          "name": "Thai baht",
          "symbol": "฿"
        }
      },
      "capital": [
        "Bangkok"
      ],
      "languages": {
        "tha": "Thai"
      },
      "translations": {
        "spa": {
          "official": "Reino de Tailandia",
          "common": "Tailandia"
        }
      },
      "area": 513120,
      "demonyms": "Thai",
      "population": 69799978,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/th.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/th.png"
    },
    {
      "cca2": "GN",
      "currencies": {
        "GNF": {
          "name": "Guinean franc",
          "symbol": "Fr"
        }
      },
      "capital": [
        "Conakry"
      ],
      "languages": {
        "fra": "French"
      },
      "translations": {
        "spa": {
          "official": "República de Guinea",
          "common": "Guinea"
        }
      },
      "area": 245857,
      "demonyms": "Guinean",
      "population": 13132792,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/gn.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/gn.png"
    },
    {
      "cca2": "LV",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Riga"
      ],
      "languages": {
        "lav": "Latvian"
      },
      "translations": {
        "spa": {
          "official": "República de Letonia",
          "common": "Letonia"
        }
      },
      "area": 64559,
      "demonyms": "Latvian",
      "population": 1901548,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/lv.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/lv.png"
    },
    {
      "cca2": "MT",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Valletta"
      ],
      "translations": {},
      "area": 316,
      "demonyms": {},
      "population": 525285,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/mt.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/mt.png"
    },
    {
      "cca2": "SS",
      "currencies": {
        "SSP": {
          "name": "South Sudanese pound",
          "symbol": "£"
        }
      },
      "capital": [
        "Juba"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "República de Sudán del Sur",
          "common": "Sudán del Sur"
        }
      },
      "area": 619745,
      "demonyms": "South Sudanese",
      "population": 11193729,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/ss.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ss.png"
    },
    {
      "cca2": "BA",
      "currencies": {
        "BAM": {
          "name": "Bosnia and Herzegovina convertible mark"
        }
      },
      "capital": [
        "Sarajevo"
      ],
      "languages": {
        "bos": "Bosnian",
        "hrv": "Croatian",
        "srp": "Serbian"
      },
      "translations": {
        "spa": {
          "official": "Bosnia y Herzegovina",
          "common": "Bosnia y Herzegovina"
        }
      },
      "area": 51209,
      "demonyms": "Bosnian, Herzegovinian",
      "population": 3280815,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/ba.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ba.png"
    },
    {
      "cca2": "QA",
      "currencies": {
        "QAR": {
          "name": "Qatari riyal",
          "symbol": "ر.ق"
        }
      },
      "capital": [
        "Doha"
      ],
      "languages": {
        "ara": "Arabic"
      },
      "translations": {
        "spa": {
          "official": "Estado de Qatar",
          "common": "Catar"
        }
      },
      "area": 11586,
      "demonyms": "Qatari",
      "population": 2881060,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/qa.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/qa.png"
    },
    {
      "cca2": "BT",
      "currencies": {
        "BTN": {
          "name": "Bhutanese ngultrum",
          "symbol": "Nu."
        },
        "INR": {
          "name": "Indian rupee",
          "symbol": "₹"
        }
      },
      "capital": [
        "Thimphu"
      ],
      "languages": {
        "dzo": "Dzongkha"
      },
      "translations": {
        "spa": {
          "official": "Reino de Bután",
          "common": "Bután"
        }
      },
      "area": 38394,
      "demonyms": "Bhutanese",
      "population": 771612,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/bt.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/bt.png"
    },
    {
      "cca2": "IO",
      "currencies": {
        "USD": {
          "name": "United States dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Diego Garcia"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {},
      "spa": {
        "official": "Territorio Británico del Océano Índico",
        "common": "Territorio Británico del Océano Índico"
      },
      "area": 60,
      "demonyms": "Indian",
      "population": 3000,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/io.png",
      "oatOfArms": {}
    },
    {
      "cca2": "LK",
      "currencies": {
        "LKR": {
          "name": "Sri Lankan rupee",
          "symbol": "Rs  රු"
        }
      },
      "capital": [
        "Sri Jayawardenepura Kotte"
      ],
      "languages": {
        "sin": "Sinhala",
        "tam": "Tamil"
      },
      "translations": {
        "spa": {
          "official": "República Democrática Socialista de Sri Lanka",
          "common": "Sri Lanka"
        }
      },
      "area": 65610,
      "demonyms": "Sri Lankan",
      "population": 21919000,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/lk.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/lk.png"
    },
    {
      "cca2": "GS",
      "currencies": {
        "SHP": {
          "name": "Saint Helena pound",
          "symbol": "£"
        }
      },
      "capital": [
        "King Edward Point"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "Georgia del Sur y las Islas Sandwich del Sur",
          "common": "Islas Georgias del Sur y Sandwich del Sur"
        }
      },
      "area": 3903,
      "demonyms": "South Georgian South Sandwich Islander",
      "population": 30,
      "continent": "Antarctica",
      "flag": "https://flagcdn.com/w320/gs.png",
      "oatOfArms": {}
    },
    {
      "cca2": "GG",
      "currencies": {
        "GBP": {
          "name": "British pound",
          "symbol": "£"
        },
        "GGP": {
          "name": "Guernsey pound",
          "symbol": "£"
        }
      },
      "capital": [
        "St. Peter Port"
      ],
      "languages": {
        "eng": "English",
        "fra": "French",
        "nfr": "Guernésiais"
      },
      "translations": {
        "spa": {
          "official": "Bailía de Guernsey",
          "common": "Guernsey"
        }
      },
      "area": 78,
      "demonyms": "Channel Islander",
      "population": 62999,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/gg.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/gg.png"
    },
    {
      "cca2": "VI",
      "currencies": {
        "USD": {
          "name": "United States dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Charlotte Amalie"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "Islas Vírgenes de los Estados Unidos",
          "common": "Islas Vírgenes de los Estados Unidos"
        }
      },
      "area": 347,
      "demonyms": "Virgin Islander",
      "population": 106290,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/vi.png",
      "oatOfArms": {}
    },
    {
      "cca2": "BH",
      "currencies": {
        "BHD": {
          "name": "Bahraini dinar",
          "symbol": ".د.ب"
        }
      },
      "capital": [
        "Manama"
      ],
      "languages": {
        "ara": "Arabic"
      },
      "translations": {
        "spa": {
          "official": "Reino de Bahrein",
          "common": "Bahrein"
        }
      },
      "area": 765,
      "demonyms": "Bahraini",
      "population": 1701583,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/bh.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/bh.png"
    },
    {
      "cca2": "GB",
      "currencies": {
        "GBP": {
          "name": "British pound",
          "symbol": "£"
        }
      },
      "capital": [
        "London"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "Reino Unido de Gran Bretaña e Irlanda del Norte",
          "common": "Reino Unido"
        }
      },
      "area": 242900,
      "demonyms": "British",
      "population": 67215293,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/gb.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/gb.png"
    },
    {
      "cca2": "ID",
      "currencies": {
        "IDR": {
          "name": "Indonesian rupiah",
          "symbol": "Rp"
        }
      },
      "capital": [
        "Jakarta"
      ],
      "languages": {
        "ind": "Indonesian"
      },
      "translations": {
        "spa": {
          "official": "República de Indonesia",
          "common": "Indonesia"
        }
      },
      "area": 1904569,
      "demonyms": "Indonesian",
      "population": 273523621,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/id.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/id.png"
    },
    {
      "cca2": "JE",
      "currencies": {
        "GBP": {
          "name": "British pound",
          "symbol": "£"
        },
        "JEP": {
          "name": "Jersey pound",
          "symbol": "£"
        }
      },
      "capital": [
        "Saint Helier"
      ],
      "languages": {
        "eng": "English",
        "fra": "French",
        "nrf": "Jèrriais"
      },
      "translations": {
        "spa": {
          "official": "Bailía de Jersey",
          "common": "Jersey"
        }
      },
      "area": 116,
      "demonyms": "Channel Islander",
      "population": 100800,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/je.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/je.png"
    },
    {
      "name": {
        "common": "Falkland Islands",
        "official": "Falkland Islands",
        "nativeName": {
          "eng": {
            "official": "Falkland Islands",
            "common": "Falkland Islands"
          }
        }
      },
      "cca2": "FK",
      "currencies": {
        "FKP": {
          "name": "Falkland Islands pound",
          "symbol": "£"
        }
      },
      "capital": [
        "Stanley"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "islas Malvinas",
          "common": "Islas Malvinas"
        }
      },
      "area": 12173,
      "demonyms": "Falkland Islander",
      "population": 2563,
      "continent": "South America",
      "flag": "https://flagcdn.com/w320/fk.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/fk.png"
    },
    {
      "cca2": "BQ",
      "currencies": {
        "USD": {
          "name": "United States dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Kralendijk"
      ],
      "translations": {
        "spa": {
          "official": "Bonaire, San Eustaquio y Saba"
        }
      },
      "area": 328,
      "demonyms": {},
      "population": 25987,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/bq.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/bq.png"
    },
    {
      "cca2": "MZ",
      "currencies": {
        "MZN": {
          "name": "Mozambican metical",
          "symbol": "MT"
        }
      },
      "capital": [
        "Maputo"
      ],
      "languages": {
        "por": "Portuguese"
      },
      "translations": {
        "spa": {
          "official": "República de Mozambique",
          "common": "Mozambique"
        }
      },
      "area": 801590,
      "demonyms": "Mozambican",
      "population": 31255435,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/mz.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/mz.png"
    },
    {
      "cca2": "PF",
      "currencies": {
        "XPF": {
          "name": "CFP franc",
          "symbol": "₣"
        }
      },
      "capital": [
        "Papeetē"
      ],
      "languages": {
        "fra": "French"
      },
      "translations": {
        "spa": {
          "official": "Polinesia francés",
          "common": "Polinesia Francesa"
        }
      },
      "area": 4167,
      "demonyms": "French Polynesian",
      "population": 280904,
      "continent": "Oceania",
      "flag": "https://flagcdn.com/w320/pf.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/pf.png"
    },
    {
      "cca2": "ER",
      "currencies": {
        "ERN": {
          "name": "Eritrean nakfa",
          "symbol": "Nfk"
        }
      },
      "capital": [
        "Asmara"
      ],
      "languages": {
        "ara": "Arabic",
        "eng": "English",
        "tir": "Tigrinya"
      },
      "translations": {
        "spa": {
          "official": "Estado de Eritrea",
          "common": "Eritrea"
        }
      },
      "area": 117600,
      "demonyms": "Eritrean",
      "population": 5352000,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/er.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/er.png"
    },
    {
      "cca2": "MC",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Monaco"
      ],
      "languages": {
        "fra": "French"
      },
      "translations": {
        "spa": {
          "official": "Principado de Mónaco",
          "common": "Mónaco"
        }
      },
      "area": 2.02,
      "demonyms": "Monegasque",
      "population": 39244,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/mc.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/mc.png"
    },
    {
      "cca2": "BG",
      "currencies": {
        "BGN": {
          "name": "Bulgarian lev",
          "symbol": "лв"
        }
      },
      "capital": [
        "Sofia"
      ],
      "languages": {
        "bul": "Bulgarian"
      },
      "translations": {
        "spa": {
          "official": "República de Bulgaria",
          "common": "Bulgaria"
        }
      },
      "area": 110879,
      "demonyms": "Bulgarian",
      "population": 6927288,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/bg.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/bg.png"
    },
    {
      "cca2": "BL",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Gustavia"
      ],
      "languages": {
        "fra": "French"
      },
      "translations": {
        "spa": {
          "official": "Colectividad de San Barthélemy",
          "common": "San Bartolomé"
        }
      },
      "area": 21,
      "demonyms": "Saint Barthélemy Islander",
      "population": 4255,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/bl.png",
      "oatOfArms": {}
    },
    {
      "cca2": "LC",
      "currencies": {},
      "capital": [
        "Castries"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "Santa Lucía",
          "common": "Santa Lucía"
        }
      },
      "area": 616,
      "demonyms": "Saint Lucian",
      "population": 183629,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/lc.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/lc.png"
    },
    {
      "cca2": "PA",
      "currencies": {
        "PAB": {
          "name": "Panamanian balboa",
          "symbol": "B/."
        },
        "USD": {
          "name": "United States dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Panama City"
      ],
      "languages": {
        "spa": "Spanish"
      },
      "translations": {
        "spa": {
          "official": "República de Panamá",
          "common": "Panamá"
        }
      },
      "area": 75417,
      "demonyms": "Panamanian",
      "population": 4314768,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/pa.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/pa.png"
    },
    {
      "cca2": "US",
      "currencies": {
        "USD": {
          "name": "United States dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Washington, D.C."
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "Estados Unidos de América",
          "common": "Estados Unidos"
        }
      },
      "area": 9372610,
      "demonyms": "American",
      "population": 329484123,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/us.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/us.png"
    },
    {
      "cca2": "GA",
      "currencies": {
        "XAF": {
          "name": "Central African CFA franc",
          "symbol": "Fr"
        }
      },
      "capital": [
        "Libreville"
      ],
      "languages": {
        "fra": "French"
      },
      "translations": {
        "spa": {
          "official": "República de Gabón",
          "common": "Gabón"
        }
      },
      "area": 267668,
      "demonyms": "Gabonese",
      "population": 2225728,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/ga.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ga.png"
    },
    {
      "cca2": "PE",
      "currencies": {
        "PEN": {
          "name": "Peruvian sol",
          "symbol": "S/ "
        }
      },
      "capital": [
        "Lima"
      ],
      "languages": {
        "aym": "Aymara",
        "que": "Quechua",
        "spa": "Spanish"
      },
      "translations": {
        "spa": {
          "official": "República de Perú",
          "common": "Perú"
        }
      },
      "area": 1285216,
      "demonyms": "Peruvian",
      "population": 32971846,
      "continent": "South America",
      "flag": "https://flagcdn.com/w320/pe.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/pe.png"
    },
    {
      "cca2": "PY",
      "currencies": {
        "PYG": {
          "name": "Paraguayan guaraní",
          "symbol": "₲"
        }
      },
      "capital": [
        "Asunción"
      ],
      "languages": {
        "grn": "Guaraní",
        "spa": "Spanish"
      },
      "translations": {
        "spa": {
          "official": "República de Paraguay",
          "common": "Paraguay"
        }
      },
      "area": 406752,
      "demonyms": "Paraguayan",
      "population": 7132530,
      "continent": "South America",
      "flag": "https://flagcdn.com/w320/py.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/py.png"
    },
    {
      "cca2": "NP",
      "currencies": {
        "NPR": {
          "name": "Nepalese rupee",
          "symbol": "₨"
        }
      },
      "capital": [
        "Kathmandu"
      ],
      "languages": {
        "nep": "Nepali"
      },
      "translations": {
        "spa": {
          "official": "República Democrática Federal de Nepal",
          "common": "Nepal"
        }
      },
      "area": 147181,
      "demonyms": "Nepalese",
      "population": 29136808,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/np.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/np.png"
    },
    {
      "cca2": "KH",
      "currencies": {
        "KHR": {
          "name": "Cambodian riel",
          "symbol": "៛"
        },
        "USD": {
          "name": "United States dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Phnom Penh"
      ],
      "languages": {
        "khm": "Khmer"
      },
      "translations": {
        "spa": {
          "official": "Reino de Camboya",
          "common": "Camboya"
        }
      },
      "area": 181035,
      "demonyms": "Cambodian",
      "population": 16718971,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/kh.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/kh.png"
    },
    {
      "cca2": "AW",
      "currencies": {
        "AWG": {
          "name": "Aruban florin",
          "symbol": "ƒ"
        }
      },
      "capital": [
        "Oranjestad"
      ],
      "translations": {
        "spa": {
          "official": "Aruba",
          "common": "Aruba"
        }
      },
      "area": 180,
      "demonyms": "Aruban",
      "population": 106766,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/aw.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/aw.png"
    },
    {
      "cca2": "TG",
      "currencies": {
        "XOF": {
          "name": "West African CFA franc",
          "symbol": "Fr"
        }
      },
      "capital": [
        "Lomé"
      ],
      "languages": {
        "fra": "French"
      },
      "translations": {
        "spa": {
          "official": "República de Togo",
          "common": "Togo"
        }
      },
      "area": 56785,
      "demonyms": "Togolese",
      "population": 8278737,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/tg.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/tg.png"
    },
    {
      "cca2": "SE",
      "currencies": {
        "SEK": {
          "name": "Swedish krona",
          "symbol": "kr"
        }
      },
      "capital": [
        "Stockholm"
      ],
      "languages": {
        "swe": "Swedish"
      },
      "translations": {
        "spa": {
          "official": "Reino de Suecia",
          "common": "Suecia"
        }
      },
      "area": 450295,
      "demonyms": "Swedish",
      "population": 10353442,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/se.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/se.png"
    },
    {
      "cca2": "UY",
      "currencies": {
        "UYU": {
          "name": "Uruguayan peso",
          "symbol": "$"
        }
      },
      "capital": [
        "Montevideo"
      ],
      "languages": {
        "spa": "Spanish"
      },
      "translations": {
        "spa": {
          "official": "República Oriental del Uruguay",
          "common": "Uruguay"
        }
      },
      "area": 181034,
      "demonyms": "Uruguayan",
      "population": 3473727,
      "continent": "South America",
      "flag": "https://flagcdn.com/w320/uy.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/uy.png"
    },
    {
      "cca2": "CN",
      "currencies": {
        "CNY": {
          "name": "Chinese yuan",
          "symbol": "¥"
        }
      },
      "capital": [
        "Beijing"
      ],
      "languages": {
        "zho": "Chinese"
      },
      "translations": {
        "spa": {
          "official": "República Popular de China",
          "common": "China"
        }
      },
      "area": 9706961,
      "demonyms": "Chinese",
      "population": 1402112000,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/cn.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/cn.png"
    },
    {
      "cca2": "GW",
      "currencies": {
        "XOF": {
          "name": "West African CFA franc",
          "symbol": "Fr"
        }
      },
      "capital": [
        "Bissau"
      ],
      "languages": {
        "por": "Portuguese",
        "pov": "Upper Guinea Creole"
      },
      "translations": {
        "spa": {
          "official": "República de Guinea-Bissau",
          "common": "Guinea-Bisáu"
        }
      },
      "area": 36125,
      "demonyms": "Guinea-Bissauan",
      "population": 1967998,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/gw.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/gw.png"
    },
    {
      "cca2": "CZ",
      "currencies": {
        "CZK": {
          "name": "Czech koruna",
          "symbol": "Kč"
        }
      },
      "capital": [
        "Prague"
      ],
      "languages": {
        "ces": "Czech",
        "slk": "Slovak"
      },
      "translations": {
        "spa": {
          "official": "República Checa",
          "common": "Chequia"
        }
      },
      "area": 78865,
      "demonyms": "Czech",
      "population": 10698896,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/cz.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/cz.png"
    },
    {
      "cca2": "VU",
      "currencies": {
        "VUV": {
          "name": "Vanuatu vatu",
          "symbol": "Vt"
        }
      },
      "capital": [
        "Port Vila"
      ],
      "languages": {
        "bis": "Bislama",
        "eng": "English",
        "fra": "French"
      },
      "translations": {
        "spa": {
          "official": "República de Vanuatu",
          "common": "Vanuatu"
        }
      },
      "area": 12189,
      "demonyms": "Ni-Vanuatu",
      "population": 307150,
      "continent": "Oceania",
      "flag": "https://flagcdn.com/w320/vu.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/vu.png"
    },
    {
      "cca2": "AO",
      "currencies": {
        "AOA": {
          "name": "Angolan kwanza",
          "symbol": "Kz"
        }
      },
      "capital": [
        "Luanda"
      ],
      "languages": {
        "por": "Portuguese"
      },
      "translations": {
        "spa": {
          "official": "República de Angola",
          "common": "Angola"
        }
      },
      "area": 1246700,
      "demonyms": "Angolan",
      "population": 32866268,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/ao.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ao.png"
    },
    {
      "cca2": "KI",
      "currencies": {
        "AUD": {
          "name": "Australian dollar",
          "symbol": "$"
        },
        "KID": {
          "name": "Kiribati dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "South Tarawa"
      ],
      "languages": {
        "eng": "English",
        "gil": "Gilbertese"
      },
      "translations": {
        "spa": {
          "official": "República Independiente y Soberano de Kiribati",
          "common": "Kiribati"
        }
      },
      "area": 811,
      "demonyms": "I-Kiribati",
      "population": 119446,
      "continent": "Oceania",
      "flag": "https://flagcdn.com/w320/ki.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ki.png"
    },
    {
      "cca2": "FO",
      "currencies": {
        "DKK": {
          "name": "Danish krone",
          "symbol": "kr"
        },
        "FOK": {
          "name": "Faroese króna",
          "symbol": "kr"
        }
      },
      "capital": [
        "Tórshavn"
      ],
      "languages": {
        "dan": "Danish",
        "fao": "Faroese"
      },
      "translations": {
        "spa": {
          "official": "Islas Feroe",
          "common": "Islas Faroe"
        }
      },
      "area": 1393,
      "demonyms": "Faroese",
      "population": 48865,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/fo.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/fo.png"
    },
    {
      "cca2": "CA",
      "currencies": {
        "CAD": {
          "name": "Canadian dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Ottawa"
      ],
      "languages": {
        "eng": "English",
        "fra": "French"
      },
      "translations": {
        "spa": {
          "official": "Canadá",
          "common": "Canadá"
        }
      },
      "area": 9984670,
      "demonyms": "Canadian",
      "population": 38005238,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/ca.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ca.png"
    },
    {
      "cca2": "BV",
      "languages": {
        "nor": "Norwegian"
      },
      "translations": {
        "spa": {
          "official": "Isla Bouvet",
          "common": "Isla Bouvet"
        }
      },
      "area": 49,
      "population": 0,
      "continent": "Antarctica",
      "flag": "https://flagcdn.com/w320/bv.png",
      "oatOfArms": {}
    },
    {
      "cca2": "TO",
      "currencies": {
        "TOP": {
          "name": "Tongan paʻanga",
          "symbol": "T$"
        }
      },
      "capital": [
        "Nuku'alofa"
      ],
      "languages": {
        "eng": "English",
        "ton": "Tongan"
      },
      "translations": {
        "spa": {
          "official": "Reino de Tonga",
          "common": "Tonga"
        }
      },
      "area": 747,
      "demonyms": "Tongan",
      "population": 105697,
      "continent": "Oceania",
      "flag": "https://flagcdn.com/w320/to.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/to.png"
    },
    {
      "cca2": "YT",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Mamoudzou"
      ],
      "languages": {
        "fra": "French"
      },
      "translations": {
        "spa": {
          "official": "Departamento de Mayotte",
          "common": "Mayotte"
        }
      },
      "area": 374,
      "demonyms": "Mahoran",
      "population": 226915,
      "continent": "Africa",
      "flag": "https://flagcdn.com/w320/yt.png",
      "oatOfArms": {}
    },
    {
      "cca2": "PH",
      "currencies": {
        "PHP": {
          "name": "Philippine peso",
          "symbol": "₱"
        }
      },
      "capital": [
        "Manila"
      ],
      "languages": {
        "eng": "English",
        "fil": "Filipino"
      },
      "translations": {
        "spa": {
          "official": "República de las Filipinas",
          "common": "Filipinas"
        }
      },
      "area": 342353,
      "demonyms": "Filipino",
      "population": 109581085,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/ph.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ph.png"
    },
    {
      "cca2": "OM",
      "currencies": {
        "OMR": {
          "name": "Omani rial",
          "symbol": "ر.ع."
        }
      },
      "capital": [
        "Muscat"
      ],
      "languages": {
        "ara": "Arabic"
      },
      "translations": {
        "spa": {
          "official": "Sultanato de Omán",
          "common": "Omán"
        }
      },
      "area": 309500,
      "demonyms": "Omani",
      "population": 5106622,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/om.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/om.png"
    },
    {
      "cca2": "UM",
      "currencies": {
        "USD": {
          "name": "United States dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Washington DC"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "Estados Unidos Islas menores alejadas de",
          "common": "Islas Ultramarinas Menores de Estados Unidos"
        }
      },
      "area": 34.2,
      "demonyms": "American Islander",
      "population": 300,
      "continent": "Oceania",
      "flag": "https://flagcdn.com/w320/um.png",
      "oatOfArms": {}
    },
    {
      "cca2": "TW",
      "currencies": {
        "TWD": {
          "name": "New Taiwan dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Taipei"
      ],
      "languages": {
        "zho": "Chinese"
      },
      "translations": {
        "spa": {
          "official": "República de China en Taiwán",
          "common": "Taiwán"
        }
      },
      "area": 36193,
      "demonyms": "Taiwanese",
      "population": 23503349,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/tw.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/tw.png"
    },
    {
      "cca2": "RU",
      "currencies": {
        "RUB": {
          "name": "Russian ruble",
          "symbol": "₽"
        }
      },
      "capital": [
        "Moscow"
      ],
      "languages": {
        "rus": "Russian"
      },
      "translations": {
        "spa": {
          "official": "Federación de Rusia",
          "common": "Rusia"
        }
      },
      "area": 17098242,
      "demonyms": "Russian",
      "population": 144104080,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/ru.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ru.png"
    },
    {
      "cca2": "BO",
      "currencies": {
        "BOB": {
          "name": "Bolivian boliviano",
          "symbol": "Bs."
        }
      },
      "capital": [
        "Sucre"
      ],
      "languages": {
        "aym": "Aymara",
        "grn": "Guaraní",
        "que": "Quechua",
        "spa": "Spanish"
      },
      "translations": {
        "spa": {
          "official": "Estado Plurinacional de Bolivia",
          "common": "Bolivia"
        }
      },
      "area": 1098581,
      "demonyms": "Bolivian",
      "population": 11673029,
      "continent": "South America",
      "flag": "https://flagcdn.com/w320/bo.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/bo.png"
    },
    {
      "cca2": "DK",
      "currencies": {
        "DKK": {
          "name": "Danish krone",
          "symbol": "kr"
        }
      },
      "capital": [
        "Copenhagen"
      ],
      "languages": {
        "dan": "Danish"
      },
      "translations": {
        "spa": {
          "official": "Reino de Dinamarca",
          "common": "Dinamarca"
        }
      },
      "area": 43094,
      "demonyms": "Danish",
      "population": 5831404,
      "continent": "Europe",
      "flag": "https://flagcdn.com/w320/dk.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/dk.png"
    },
    {
      "cca2": "AS",
      "currencies": {
        "USD": {
          "name": "United States dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Pago Pago"
      ],
      "languages": {
        "eng": "English",
        "smo": "Samoan"
      },
      "translations": {
        "spa": {
          "official": "Samoa Americana",
          "common": "Samoa Americana"
        }
      },
      "area": 199,
      "demonyms": "American Samoan",
      "population": 55197,
      "continent": "Oceania",
      "flag": "https://flagcdn.com/w320/as.png",
      "oatOfArms": {}
    },
    {
      "cca2": "AI",
      "currencies": {},
      "capital": [
        "The Valley"
      ],
      "languages": {
        "eng": "English"
      },
      "translations": {
        "spa": {
          "official": "Anguila",
          "common": "Anguilla"
        }
      },
      "area": 91,
      "demonyms": "Anguillian",
      "population": 13452,
      "continent": "North America",
      "flag": "https://flagcdn.com/w320/ai.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ai.png"
    },
    {
      "cca2": "KG",
      "currencies": {
        "KGS": {
          "name": "Kyrgyzstani som",
          "symbol": "с"
        }
      },
      "capital": [
        "Bishkek"
      ],
      "languages": {
        "kir": "Kyrgyz",
        "rus": "Russian"
      },
      "translations": {
        "spa": {
          "official": "República Kirguisa",
          "common": "Kirguizistán"
        }
      },
      "area": 199951,
      "demonyms": "Kirghiz",
      "population": 6591600,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/kg.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/kg.png"
    }
  ]

  countriesDataEsp: any = [
    {
      "cca2": "UA",
      "currencies": {
        "UAH": {
          "name": "Grivna ucraniana",
          "symbol": "₴"
        }
      },
      "capital": "Kyiv",
      "languages": {
        "ukr": "ucranio"
      },
      "translations": {
        "spa": {
          "official": "Ucrania",
          "common": "Ucrania"
        }
      },
      "area": 603500,
      "demonyms": "ucranio",
      "population": 44134693,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/ua.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ua.png"
    },
    {
      "cca2": "FR",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Paris",
      "languages": {
        "fra": "francés"
      },
      "translations": {
        "spa": {
          "official": "República francés",
          "common": "Francia"
        }
      },
      "area": 551695,
      "demonyms": "francés",
      "population": 67391582,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/fr.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/fr.png"
    },
    {
      "cca2": "KW",
      "currencies": {
        "KWD": {
          "name": "dinar kuwaití",
          "symbol": "د.ك"
        }
      },
      "capital": "Kuwait City",
      "languages": {
        "ara": "árabe"
      },
      "translations": {
        "spa": {
          "official": "Estado de Kuwait",
          "common": "Kuwait"
        }
      },
      "area": 17818,
      "demonyms": "kuwaití",
      "population": 4270563,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/kw.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/kw.png"
    },
    {
      "cca2": "KZ",
      "currencies": {
        "KZT": {
          "name": "Kazajstán en venta",
          "symbol": "₸"
        }
      },
      "capital": "Nur-Sultan",
      "languages": {
        "kaz": "kazajo",
        "rus": "ruso"
      },
      "translations": {
        "spa": {
          "official": "República de Kazajstán",
          "common": "Kazajistán"
        }
      },
      "area": 2724900,
      "demonyms": "kazajo",
      "population": 18754440,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/kz.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/kz.png"
    },
    {
      "cca2": "GE",
      "currencies": {
        "GEL": {
          "name": "lari",
          "symbol": "₾"
        }
      },
      "capital": "Tbilisi",
      "languages": {
        "kat": "georgiano"
      },
      "translations": {
        "spa": {
          "official": "Georgia",
          "common": "Georgia"
        }
      },
      "area": 69700,
      "demonyms": "georgiano",
      "population": 3714000,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/ge.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ge.png"
    },
    {
      "cca2": "YE",
      "currencies": {
        "YER": {
          "name": "rial yemení",
          "symbol": "﷼"
        }
      },
      "capital": "Sana'a",
      "languages": {
        "ara": "árabe"
      },
      "translations": {
        "spa": {
          "official": "República de Yemen",
          "common": "Yemen"
        }
      },
      "area": 527968,
      "demonyms": "yemenita",
      "population": 29825968,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/ye.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ye.png"
    },
    {
      "cca2": "MQ",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Fort-de-France",
      "languages": {
        "fra": "francés"
      },
      "translations": {
        "spa": {
          "official": "Martinica",
          "common": "Martinica"
        }
      },
      "area": 1128,
      "demonyms": "martiniqueño",
      "population": 378243,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/mq.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/mq.png"
    },
    {
      "cca2": "PN",
      "currencies": {
        "NZD": {
          "name": "Dolar de Nueva Zelanda",
          "symbol": "$"
        }
      },
      "capital": "Adamstown",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "Grupo de Islas Pitcairn",
          "common": "Islas Pitcairn"
        }
      },
      "area": 47,
      "demonyms": "Isleño de Pitcairn",
      "population": 56,
      "continent": "Oceanía",
      "flag": "https://flagcdn.com/w320/pn.png",
      "oatOfArms": {}
    },
    {
      "cca2": "IQ",
      "currencies": {
        "IQD": {
          "name": "dinar iraquí",
          "symbol": "ع.د"
        }
      },
      "capital": "Baghdad",
      "languages": {
        "ara": "árabe",
        "arc": "Amaremo",
        "ckb": "Soraní"
      },
      "translations": {
        "spa": {
          "official": "República de Irak",
          "common": "Irak"
        }
      },
      "area": 438317,
      "demonyms": "iraquí",
      "population": 40222503,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/iq.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/iq.png"
    },
    {
      "cca2": "SJ",
      "currencies": {
        "NOK": {
          "name": "corona",
          "symbol": "kr"
        }
      },
      "capital": "Longyearbyen",
      "languages": {
        "nor": "noruego"
      },
      "translations": {
        "spa": {
          "official": "Svalbard og Jan Mayen",
          "common": "Islas Svalbard y Jan Mayen"
        }
      },
      "area": -1,
      "demonyms": "noruego",
      "population": 2562,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/sj.png",
      "oatOfArms": {}
    },
    {
      "cca2": "CL",
      "currencies": {
        "CLP": {
          "name": "peso chileno",
          "symbol": "$"
        }
      },
      "capital": "Santiago",
      "languages": {
        "spa": "español"
      },
      "translations": {
        "spa": {
          "official": "República de Chile",
          "common": "Chile"
        }
      },
      "area": 756102,
      "demonyms": "chileno",
      "population": 19116209,
      "continent": "Sudamérica",
      "flag": "https://flagcdn.com/w320/cl.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/cl.png"
    },
    {
      "cca2": "EH",
      "currencies": {
        "DZD": {
          "name": "dinar argelino",
          "symbol": "دج"
        },
        "MAD": {
          "name": "dírham marroquí",
          "symbol": "DH"
        },
        "MRU": {
          "name": "guía mauritano",
          "symbol": "UM"
        }
      },
      "capital": "El Aaiún",
      "languages": {
        "ber": "Bereber",
        "mey": "Hassaniya",
        "spa": "español"
      },
      "translations": {
        "spa": {
          "official": "República Árabe Saharaui Democrática",
          "common": "Sahara Occidental"
        }
      },
      "area": 266000,
      "demonyms": "saharaui",
      "population": 510713,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/eh.png",
      "oatOfArms": {}
    },
    {
      "cca2": "CV",
      "currencies": {
        "CVE": {
          "name": "escudo caboverdiano",
          "symbol": "Esc"
        }
      },
      "capital": "Praia",
      "languages": {
        "por": "portugués"
      },
      "translations": {
        "spa": {
          "official": "República de Cabo Verde",
          "common": "Cabo Verde"
        }
      },
      "area": 4033,
      "demonyms": "caboverdiano",
      "population": 555988,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/cv.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/cv.png"
    },
    {
      "cca2": "NZ",
      "currencies": {
        "NZD": {
          "name": "Dolar de Nueva Zelanda",
          "symbol": "$"
        }
      },
      "capital": "Wellington",
      "languages": {
        "eng": "inglés",
        "mri": "maorí",
        "nzs": "lenguaje de signos de Nueva Zelanda"
      },
      "translations": {
        "spa": {
          "official": "nueva Zelanda",
          "common": "Nueva Zelanda"
        }
      },
      "area": 270467,
      "demonyms": "Neozelandés",
      "population": 5084300,
      "continent": "Oceanía",
      "flag": "https://flagcdn.com/w320/nz.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/nz.png"
    },
    {
      "cca2": "AT",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Vienna",
      "languages": {
        "bar": "alemán austro-bávaro"
      },
      "translations": {
        "spa": {
          "official": "República de Austria",
          "common": "Austria"
        }
      },
      "area": 83871,
      "demonyms": "austriaco",
      "population": 8917205,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/at.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/at.png"
    },
    {
      "cca2": "ST",
      "currencies": {
        "STN": {
          "name": "Santo Tomé y Príncipe dobra",
          "symbol": "Db"
        }
      },
      "capital": "São Tomé",
      "languages": {
        "por": "portugués"
      },
      "translations": {
        "spa": {
          "official": "República Democrática de Santo Tomé y Príncipe",
          "common": "Santo Tomé y Príncipe"
        }
      },
      "area": 964,
      "demonyms": "Santo Tomás",
      "population": 219161,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/st.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/st.png"
    },
    {
      "cca2": "LB",
      "currencies": {
        "LBP": {
          "name": "libra libanesa",
          "symbol": "ل.ل"
        }
      },
      "capital": "Beirut",
      "languages": {
        "ara": "árabe",
        "fra": "francés"
      },
      "translations": {
        "spa": {
          "official": "República Libanesa",
          "common": "Líbano"
        }
      },
      "area": 10452,
      "demonyms": "libanés",
      "population": 6825442,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/lb.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/lb.png"
    },
    {
      "cca2": "SN",
      "currencies": {
        "XOF": {
          "name": "Franco CFA de África Occidental",
          "symbol": "Fr"
        }
      },
      "capital": "Dakar",
      "languages": {
        "fra": "francés"
      },
      "translations": {
        "spa": {
          "official": "República de Senegal",
          "common": "Senegal"
        }
      },
      "area": 196722,
      "demonyms": "senegalés",
      "population": 16743930,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/sn.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/sn.png"
    },
    {
      "cca2": "SO",
      "currencies": {
        "SOS": {
          "name": "chelín somalí",
          "symbol": "Sh"
        }
      },
      "capital": "Mogadishu",
      "languages": {
        "ara": "árabe",
        "som": "Somali"
      },
      "translations": {
        "spa": {
          "official": "República Federal de Somalia",
          "common": "Somalia"
        }
      },
      "area": 637657,
      "demonyms": "somalí",
      "population": 15893219,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/so.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/so.png"
    },
    {
      "cca2": "_2",
      "currencies": {
        "SOS": {
          "name": "chelín somalí",
          "symbol": "Sh"
        }
      },
      "capital": "Mogadishu",
      "languages": {
        "ara": "árabe",
        "som": "Somali"
      },
      "translations": {
        "spa": {
          "official": "Somalilandia",
          "common": "Somalilandia"
        }
      },
      "area": 637657,
      "demonyms": "somalí",
      "population": 15893219,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/so.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/so.png"
    },
    {
      "name": {
        "common": "Haiti",
        "official": "Republic of Haiti",
        "nativeName": {
          "hat": {
            "official": "Repiblik Ayiti",
            "common": "Ayiti"
          }
        }
      },
      "cca2": "HT",
      "currencies": {
        "HTG": {
          "name": "calabaza haitiana",
          "symbol": "G"
        }
      },
      "capital": "Port-au-Prince",
      "languages": {
        "fra": "francés",
        "hat": "Haitian Creole"
      },
      "translations": {
        "spa": {
          "official": "República de Haití",
          "common": "Haití"
        }
      },
      "area": 27750,
      "demonyms": "haitiano",
      "population": 11402533,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/ht.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ht.png"
    },
    {
      "cca2": "MV",
      "currencies": {
        "MVR": {
          "name": "rufianes maldivos",
          "symbol": ".ރ"
        }
      },
      "capital": "Malé",
      "languages": {
        "div": "maldivo"
      },
      "translations": {
        "spa": {
          "official": "República de las Maldivas",
          "common": "Maldivas"
        }
      },
      "area": 300,
      "demonyms": "Maldivas",
      "population": 540542,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/mv.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/mv.png"
    },
    {
      "cca2": "TK",
      "currencies": {
        "NZD": {
          "name": "Dolar de Nueva Zelanda",
          "symbol": "$"
        }
      },
      "capital": "Fakaofo",
      "languages": {
        "eng": "inglés",
        "smo": "samoano",
        "tkl": "Tokelauano"
      },
      "translations": {
        "spa": {
          "official": "Tokelau",
          "common": "Islas Tokelau"
        }
      },
      "area": 12,
      "demonyms": "Tokelauano",
      "population": 1411,
      "continent": "Oceanía",
      "flag": "https://flagcdn.com/w320/tk.png",
      "oatOfArms": {}
    },
    {
      "cca2": "JO",
      "currencies": {
        "JOD": {
          "name": "dinar jordano",
          "symbol": "د.ا"
        }
      },
      "capital": "Amman",
      "languages": {
        "ara": "árabe"
      },
      "translations": {
        "spa": {
          "official": "Reino Hachemita de Jordania",
          "common": "Jordania"
        }
      },
      "area": 89342,
      "demonyms": "jordano",
      "population": 10203140,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/jo.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/jo.png"
    },
    {
      "cca2": "AM",
      "currencies": {
        "AMD": {
          "name": "Dram armenio",
          "symbol": "֏"
        }
      },
      "capital": "Yerevan",
      "languages": {
        "hye": "armenio"
      },
      "translations": {
        "spa": {
          "official": "República de Armenia",
          "common": "Armenia"
        }
      },
      "area": 29743,
      "demonyms": "armenio",
      "population": 2963234,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/am.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/am.png"
    },
    {
      "cca2": "VN",
      "currencies": {
        "VND": {
          "name": "pollo vietnamita",
          "symbol": "₫"
        }
      },
      "capital": "Hanoi",
      "languages": {
        "vie": "vietnamita"
      },
      "translations": {
        "spa": {
          "official": "República Socialista de Vietnam",
          "common": "Vietnam"
        }
      },
      "area": 331212,
      "demonyms": "vietnamita",
      "population": 97338583,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/vn.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/vn.png"
    },
    {
      "cca2": "RW",
      "currencies": {
        "RWF": {
          "name": "franco ruandés",
          "symbol": "Fr"
        }
      },
      "capital": "Kigali",
      "languages": {
        "eng": "inglés",
        "fra": "francés",
        "kin": "Kinyarwanda"
      },
      "translations": {
        "spa": {
          "official": "República de Rwanda",
          "common": "Ruanda"
        }
      },
      "area": 26338,
      "demonyms": "ruandés",
      "population": 12952209,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/rw.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/rw.png"
    },
    {
      "cca2": "MW",
      "currencies": {
        "MWK": {
          "name": "Moneda de Malawi",
          "symbol": "MK"
        }
      },
      "capital": "Lilongwe",
      "languages": {
        "eng": "inglés",
        "nya": "chewa"
      },
      "translations": {
        "spa": {
          "official": "República de Malawi",
          "common": "Malawi"
        }
      },
      "area": 118484,
      "demonyms": "malauí",
      "population": 19129955,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/mw.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/mw.png"
    },
    {
      "cca2": "BJ",
      "currencies": {
        "XOF": {
          "name": "Franco CFA de África Occidental",
          "symbol": "Fr"
        }
      },
      "capital": "Porto-Novo",
      "languages": {
        "fra": "francés"
      },
      "translations": {
        "spa": {
          "official": "República de Benin",
          "common": "Benín"
        }
      },
      "area": 112622,
      "demonyms": "beninés",
      "population": 12123198,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/bj.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/bj.png"
    },
    {
      "cca2": "AX",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Mariehamn",
      "languages": {
        "swe": "sueco"
      },
      "translations": {
        "spa": {
          "official": "Islas Åland",
          "common": "Alandia"
        }
      },
      "area": 1580,
      "demonyms": "Ålandés",
      "population": 29458,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/ax.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ax.png"
    },
    {
      "cca2": "IT",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Rome",
      "languages": {
        "ita": "italiano"
      },
      "translations": {
        "spa": {
          "official": "República Italiana",
          "common": "Italia"
        }
      },
      "area": 301336,
      "demonyms": "italiano",
      "population": 59554023,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/it.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/it.png"
    },
    {
      "cca2": "MH",
      "currencies": {
        "USD": {
          "name": "dólar de los Estados Unidos",
          "symbol": "$"
        }
      },
      "capital": "Majuro",
      "languages": {
        "eng": "inglés",
        "mah": "marshalés"
      },
      "translations": {
        "spa": {
          "official": "República de las Islas Marshall",
          "common": "Islas Marshall"
        }
      },
      "area": 181,
      "demonyms": "marshalés",
      "population": 59194,
      "continent": "Oceanía",
      "flag": "https://flagcdn.com/w320/mh.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/mh.png"
    },
    {
      "cca2": "HN",
      "currencies": {
        "HNL": {
          "name": "lempira hondureño",
          "symbol": "L"
        }
      },
      "capital": "Tegucigalpa",
      "languages": {
        "spa": "español"
      },
      "translations": {
        "spa": {
          "official": "República de Honduras",
          "common": "Honduras"
        }
      },
      "area": 112492,
      "demonyms": "hondureño",
      "population": 9904608,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/hn.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/hn.png"
    },
    {
      "cca2": "IL",
      "currencies": {
        "ILS": {
          "name": "nuevo shekel israelí",
          "symbol": "₪"
        }
      },
      "capital": "Jerusalem",
      "languages": {
        "ara": "árabe",
        "heb": "Hebrew"
      },
      "translations": {
        "spa": {
          "official": "Estado de Israel",
          "common": "Israel"
        }
      },
      "area": 20770,
      "demonyms": "israelí",
      "population": 9216900,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/il.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/il.png"
    },
    {
      "cca2": "SB",
      "currencies": {
        "SBD": {
          "name": "Dólar de las Islas Salomón",
          "symbol": "$"
        }
      },
      "capital": "Honiara",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "islas Salomón",
          "common": "Islas Salomón"
        }
      },
      "area": 28896,
      "demonyms": "Isleño de Salomón",
      "population": 686878,
      "continent": "Oceanía",
      "flag": "https://flagcdn.com/w320/sb.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/sb.png"
    },
    {
      "name": {
        "common": "Bermuda",
        "official": "Bermuda",
        "nativeName": {
          "eng": {
            "official": "Bermuda",
            "common": "Bermuda"
          }
        }
      },
      "cca2": "BM",
      "currencies": {
        "BMD": {
          "name": "dólar bermudeño",
          "symbol": "$"
        }
      },
      "capital": "Hamilton",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "Bermuda",
          "common": "Bermudas"
        }
      },
      "area": 54,
      "demonyms": "Bermudas",
      "population": 63903,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/bm.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/bm.png"
    },
    {
      "cca2": "HR",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Zagreb",
      "languages": {
        "hrv": "croata"
      },
      "translations": {
        "spa": {
          "official": "República de Croacia",
          "common": "Croacia"
        }
      },
      "area": 56594,
      "demonyms": "croata",
      "population": 4047200,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/hr.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/hr.png"
    },
    {
      "cca2": "MN",
      "currencies": {
        "MNT": {
          "name": "tren mongol",
          "symbol": "₮"
        }
      },
      "capital": "Ulan Bator",
      "languages": {
        "mon": "mongol"
      },
      "translations": {
        "spa": {
          "official": "Mongolia",
          "common": "Mongolia"
        }
      },
      "area": 1564110,
      "demonyms": "mongol",
      "population": 3278292,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/mn.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/mn.png"
    },
    {
      "cca2": "VG",
      "currencies": {
        "USD": {
          "name": "dólar de los Estados Unidos",
          "symbol": "$"
        }
      },
      "capital": "Road Town",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "Islas Vírgenes",
          "common": "Islas Vírgenes del Reino Unido"
        }
      },
      "area": 151,
      "demonyms": "Islas Vírgenes",
      "population": 30237,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/vg.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/vg.png"
    },
    {
      "name": {
        "common": "Mali",
        "official": "Republic of Mali",
        "nativeName": {}
      },
      "cca2": "ML",
      "currencies": {
        "XOF": {
          "name": "Franco CFA de África Occidental",
          "symbol": "Fr"
        }
      },
      "capital": "Bamako",
      "languages": {
        "fra": "francés"
      },
      "translations": {
        "spa": {
          "official": "República de Malí",
          "common": "Mali"
        }
      },
      "area": 1240192,
      "demonyms": "Malí",
      "population": 20250834,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/ml.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ml.png"
    },
    {
      "cca2": "TL",
      "currencies": {
        "USD": {
          "name": "dólar de los Estados Unidos",
          "symbol": "$"
        }
      },
      "capital": "Dili",
      "languages": {
        "por": "portugués",
        "tet": "Tetum"
      },
      "translations": {
        "spa": {
          "official": "República Democrática de Timor-Leste",
          "common": "Timor Oriental"
        }
      },
      "area": 14874,
      "demonyms": "timorense oriental",
      "population": 1318442,
      "continent": "Oceanía",
      "flag": "https://flagcdn.com/w320/tl.png",
      "oatOfArms": {}
    },
    {
      "cca2": "GF",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Cayenne",
      "languages": {
        "fra": "francés"
      },
      "translations": {
        "spa": {
          "official": "Guayana",
          "common": "Guayana Francesa"
        }
      },
      "area": 83534,
      "demonyms": "guayanés",
      "population": 254541,
      "continent": "Sudamérica",
      "flag": "https://flagcdn.com/w320/gf.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/gf.png"
    },
    {
      "cca2": "FI",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Helsinki",
      "translations": {
        "spa": {
          "official": "República de Finlandia",
          "common": "Finlandia"
        }
      },
      "area": 338424,
      "demonyms": "finlandés",
      "population": 5530719,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/fi.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/fi.png"
    },
    {
      "cca2": "NF",
      "currencies": {
        "AUD": {
          "name": "dólar australiano",
          "symbol": "$"
        }
      },
      "capital": "Kingston",
      "languages": {
        "eng": "inglés",
        "pih": "norfuk"
      },
      "translations": {
        "spa": {
          "official": "Territorio de la Isla Norfolk",
          "common": "Isla de Norfolk"
        }
      },
      "area": 36,
      "demonyms": "Isleño de Norfolk",
      "population": 2302,
      "continent": "Oceanía",
      "flag": "https://flagcdn.com/w320/nf.png",
      "oatOfArms": {}
    },
    {
      "cca2": "SG",
      "currencies": {
        "SGD": {
          "name": "dolar de Singapur",
          "symbol": "$"
        }
      },
      "capital": "Singapore",
      "languages": {
        "zho": "chino",
        "eng": "inglés",
        "msa": "malayo",
        "tam": "tamil"
      },
      "translations": {
        "spa": {
          "official": "República de Singapur",
          "common": "Singapur"
        }
      },
      "area": 710,
      "demonyms": "singapurense",
      "population": 5685807,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/sg.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/sg.png"
    },
    {
      "cca2": "ZW",
      "currencies": {
        "ZWL": {
          "name": "dólar zimbabuense",
          "symbol": "$"
        }
      },
      "capital": "Harare",
      "languages": {
        "bwg": "Chibarwe",
        "eng": "inglés",
        "kck": "Kalanga",
        "khi": "khoisan",
        "ndc": "Ndau",
        "nde": "Ndebele del Norte",
        "nya": "Chewa",
        "sna": "Shona",
        "sot": "Sotho",
        "toi": "tonga",
        "tsn": "Tswana",
        "tso": "Tsonga",
        "ven": "Venda",
        "xho": "Xhosa",
        "zib": "Lenguaje de señas de Zimbabue"
      },
      "translations": {
        "spa": {
          "official": "República de Zimbabue",
          "common": "Zimbabue"
        }
      },
      "area": 390757,
      "demonyms": "zimbabuo",
      "population": 14862927,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/zw.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/zw.png"
    },
    {
      "cca2": "ZM",
      "currencies": {
        "ZMW": {
          "name": "moneda de zambia",
          "symbol": "ZK"
        }
      },
      "capital": "Lusaka",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "República de Zambia",
          "common": "Zambia"
        }
      },
      "area": 752612,
      "demonyms": "zambiano",
      "population": 18383956,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/zm.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/zm.png"
    },
    {
      "cca2": "PL",
      "currencies": {
        "PLN": {
          "name": "vestido polaco",
          "symbol": "zł"
        }
      },
      "capital": "Warsaw",
      "languages": {
        "pol": "Polaco"
      },
      "translations": {
        "spa": {
          "official": "República de Polonia",
          "common": "Polonia"
        }
      },
      "area": 312679,
      "demonyms": "Polaco",
      "population": 37950802,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/pl.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/pl.png"
    },
    {
      "cca2": "LU",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Luxembourg",
      "languages": {
        "deu": "alemán",
        "fra": "francés",
        "ltz": "Luxembourgish"
      },
      "translations": {
        "spa": {
          "official": "Gran Ducado de Luxemburgo",
          "common": "Luxemburgo"
        }
      },
      "area": 2586,
      "demonyms": "luxemburgués",
      "population": 632275,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/lu.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/lu.png"
    },
    {
      "cca2": "KP",
      "currencies": {
        "KPW": {
          "name": "won norcoreano",
          "symbol": "₩"
        }
      },
      "capital": "Pyongyang",
      "languages": {
        "kor": "coreano"
      },
      "translations": {
        "spa": {
          "official": "República Popular Democrática de Corea",
          "common": "Corea del Norte"
        }
      },
      "area": 120538,
      "demonyms": "Norcoreano",
      "population": 25778815,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/kp.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/kp.png"
    },
    {
      "cca2": "DJ",
      "currencies": {
        "DJF": {
          "name": "franco yibutiano",
          "symbol": "Fr"
        }
      },
      "capital": "Djibouti",
      "languages": {
        "ara": "árabe",
        "fra": "francés"
      },
      "translations": {
        "spa": {
          "official": "República de Djibouti",
          "common": "Djibouti"
        }
      },
      "area": 23200,
      "demonyms": "Yibuti",
      "population": 988002,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/dj.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/dj.png"
    },
    {
      "cca2": "GR",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Athens",
      "languages": {
        "ell": "Griego"
      },
      "translations": {
        "spa": {
          "official": "República Helénica",
          "common": "Grecia"
        }
      },
      "area": 131990,
      "demonyms": "Griego",
      "population": 10715549,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/gr.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/gr.png"
    },
    {
      "cca2": "HM",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "Islas Heard y McDonald",
          "common": "Islas Heard y McDonald"
        }
      },
      "area": 412,
      "demonyms": "Isleño de Heard y McDonald",
      "population": 0,
      "continent": "Antártida",
      "flag": "https://flagcdn.com/w320/hm.png",
      "oatOfArms": {}
    },
    {
      "cca2": "SA",
      "currencies": {
        "SAR": {
          "name": "rial saudí",
          "symbol": "ر.س"
        }
      },
      "capital": "Riyadh",
      "languages": {
        "ara": "árabe"
      },
      "translations": {
        "spa": {
          "official": "Reino de Arabia Saudita",
          "common": "Arabia Saudí"
        }
      },
      "area": 2149690,
      "demonyms": "Arabia Saudita",
      "population": 34813867,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/sa.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/sa.png"
    },
    {
      "cca2": "VE",
      "currencies": {
        "VES": {
          "name": "bolívar soberano venezolano",
          "symbol": "Bs.S."
        }
      },
      "capital": "Caracas",
      "languages": {
        "spa": "español"
      },
      "translations": {
        "spa": {
          "official": "República Bolivariana de Venezuela",
          "common": "Venezuela"
        }
      },
      "area": 916445,
      "demonyms": "venezolano",
      "population": 28435943,
      "continent": "Sudamérica",
      "flag": "https://flagcdn.com/w320/ve.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ve.png"
    },
    {
      "cca2": "CO",
      "currencies": {
        "COP": {
          "name": "peso colombiano",
          "symbol": "$"
        }
      },
      "capital": "Bogotá",
      "languages": {
        "spa": "español"
      },
      "translations": {
        "spa": {
          "official": "República de Colombia",
          "common": "Colombia"
        }
      },
      "area": 1141748,
      "demonyms": "Colombiana",
      "population": 50882884,
      "continent": "Sudamérica",
      "flag": "https://flagcdn.com/w320/co.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/co.png"
    },
    {
      "cca2": "GP",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Basse-Terre",
      "languages": {
        "fra": "francés"
      },
      "translations": {
        "spa": {
          "official": "Guadalupe",
          "common": "Guadalupe"
        }
      },
      "area": 1628,
      "demonyms": "guadalupano",
      "population": 400132,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/gp.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/gp.png"
    },
    {
      "cca2": "NO",
      "currencies": {
        "NOK": {
          "name": "corona noruega",
          "symbol": "kr"
        }
      },
      "capital": "Oslo",
      "languages": {
        "nno": "Nynorsk noruego",
        "nob": "Norwegian Bokmål",
        "smi": "Sami"
      },
      "translations": {
        "spa": {
          "official": "Reino de Noruega",
          "common": "Noruega"
        }
      },
      "area": 323802,
      "demonyms": "noruego",
      "population": 5379475,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/no.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/no.png"
    },
    {
      "cca2": "SH",
      "currencies": {
        "GBP": {
          "name": "Libra esterlina",
          "symbol": "£"
        },
        "SHP": {
          "name": "Libra de Santa Elena",
          "symbol": "£"
        }
      },
      "capital": "Jamestown",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "Santa Elena, Ascensión y Tristán de Acuña",
          "common": "Santa Elena, Ascensión y Tristán de Acuña"
        }
      },
      "area": 394,
      "demonyms": "santa helena",
      "population": 53192,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/sh.png",
      "oatOfArms": {}
    },
    {
      "cca2": "PW",
      "currencies": {
        "USD": {
          "name": "dólar de los Estados Unidos",
          "symbol": "$"
        }
      },
      "capital": "Ngerulmud",
      "languages": {
        "eng": "inglés",
        "pau": "Palauano"
      },
      "translations": {
        "spa": {
          "official": "República de Palau",
          "common": "Palau"
        }
      },
      "area": 459,
      "demonyms": "Palauano",
      "population": 18092,
      "continent": "Oceanía",
      "flag": "https://flagcdn.com/w320/pw.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/pw.png"
    },
    {
      "cca2": "CU",
      "currencies": {
        "CUC": {
          "name": "peso cubano convertible",
          "symbol": "$"
        },
        "CUP": {
          "name": "peso cubano",
          "symbol": "$"
        }
      },
      "capital": "Havana",
      "languages": {
        "spa": "español"
      },
      "translations": {
        "spa": {
          "official": "República de Cuba",
          "common": "Cuba"
        }
      },
      "area": 109884,
      "demonyms": "cubano",
      "population": 11326616,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/cu.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/cu.png"
    },
    {
      "cca2": "WS",
      "currencies": {
        "WST": {
          "name": "Montañas de Samoa",
          "symbol": "T"
        }
      },
      "capital": "Apia",
      "languages": {
        "eng": "inglés",
        "smo": "samoano"
      },
      "translations": {
        "spa": {
          "official": "Estado Independiente de Samoa",
          "common": "Samoa"
        }
      },
      "area": 2842,
      "demonyms": "samoanoo",
      "population": 198410,
      "continent": "Oceanía",
      "flag": "https://flagcdn.com/w320/ws.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ws.png"
    },
    {
      "cca2": "PR",
      "currencies": {
        "USD": {
          "name": "dólar de los Estados Unidos",
          "symbol": "$"
        }
      },
      "capital": "San Juan",
      "languages": {
        "eng": "inglés",
        "spa": "español"
      },
      "translations": {
        "spa": {
          "official": "Asociado de Puerto Rico",
          "common": "Puerto Rico"
        }
      },
      "area": 8870,
      "demonyms": "puertorriqueño",
      "population": 3194034,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/pr.png",
      "oatOfArms": {}
    },
    {
      "cca2": "IM",
      "currencies": {
        "GBP": {
          "name": "Libra británica",
          "symbol": "£"
        },
        "IMP": {
          "name": "Libra manesa",
          "symbol": "£"
        }
      },
      "capital": "Douglas",
      "languages": {
        "eng": "inglés",
        "glv": "Manx"
      },
      "translations": {
        "spa": {
          "official": "Isla de Man",
          "common": "Isla de Man"
        }
      },
      "area": 572,
      "demonyms": "de la isla de Man",
      "population": 85032,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/im.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/im.png"
    },
    {
      "cca2": "MU",
      "currencies": {
        "MUR": {
          "name": "rupias de Mauricio",
          "symbol": "₨"
        }
      },
      "capital": "Port Louis",
      "languages": {
        "eng": "inglés",
        "fra": "francés",
        "mfe": "criollo mauriciano"
      },
      "translations": {
        "spa": {
          "official": "República de Mauricio",
          "common": "Mauricio"
        }
      },
      "area": 2040,
      "demonyms": "mauriciano",
      "population": 1265740,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/mu.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/mu.png"
    },
    {
      "cca2": "SL",
      "currencies": {
        "SLL": {
          "name": "León de Sierra Leona",
          "symbol": "Le"
        }
      },
      "capital": "Freetown",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "República de Sierra Leona",
          "common": "Sierra Leone"
        }
      },
      "area": 71740,
      "demonyms": "Sierra Leona",
      "population": 7976985,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/sl.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/sl.png"
    },
    {
      "cca2": "NL",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Amsterdam",
      "translations": {
        "spa": {
          "official": "Países Bajos",
          "common": "Países Bajos"
        }
      },
      "area": 41850,
      "demonyms": {},
      "population": 16655799,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/nl.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/nl.png"
    },
    {
      "cca2": "MP",
      "currencies": {
        "USD": {
          "name": "dólar de los Estados Unidos",
          "symbol": "$"
        }
      },
      "capital": "Saipan",
      "translations": {
        "spa": {
          "official": "Mancomunidad de las Islas Marianas del Norte",
          "common": "Islas Marianas del Norte"
        }
      },
      "area": 464,
      "demonyms": "Americano",
      "population": 57557,
      "continent": "Oceanía",
      "flag": "https://flagcdn.com/w320/mp.png",
      "oatOfArms": {}
    },
    {
      "cca2": "KY",
      "currencies": {
        "KYD": {
          "name": "Dólar de las Islas Caimán",
          "symbol": "$"
        }
      },
      "capital": "George Town",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "Islas Caimán",
          "common": "Islas Caimán"
        }
      },
      "area": 264,
      "demonyms": "Caimán",
      "population": 65720,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/ky.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ky.png"
    },
    {
      "cca2": "MS",
      "currencies": {},
      "capital": "Plymouth",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "Montserrat",
          "common": "Montserrat"
        }
      },
      "area": 102,
      "demonyms": "montserratian",
      "population": 4922,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/ms.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ms.png"
    },
    {
      "cca2": "EE",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Tallinn",
      "languages": {
        "est": "estonio"
      },
      "translations": {
        "spa": {
          "official": "República de Estonia",
          "common": "Estonia"
        }
      },
      "area": 45227,
      "demonyms": "estonio",
      "population": 1331057,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/ee.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ee.png"
    },
    {
      "cca2": "HU",
      "currencies": {
        "HUF": {
          "name": "Forex húngaro",
          "symbol": "Ft"
        }
      },
      "capital": "Budapest",
      "languages": {
        "hun": "húngaro"
      },
      "translations": {
        "spa": {
          "official": "Hungría",
          "common": "Hungría"
        }
      },
      "area": 93028,
      "demonyms": "húngaro",
      "population": 9749763,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/hu.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/hu.png"
    },
    {
      "cca2": "AQ",
      "translations": {
        "spa": {
          "official": "Antártida",
          "common": "Antártida"
        }
      },
      "area": 14000000,
      "demonyms": "antártico",
      "population": 1000,
      "continent": "Antártida",
      "flag": "https://flagcdn.com/w320/aq.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/aq.png"
    },
    {
      "cca2": "CC",
      "currencies": {
        "AUD": {
          "name": "dólar australiano",
          "symbol": "$"
        }
      },
      "capital": "West Island",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "Territorio de los (Keeling) Islas Cocos",
          "common": "Islas Cocos o Islas Keeling"
        }
      },
      "area": 14,
      "demonyms": "Isleño del coco",
      "population": 544,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/cc.png",
      "oatOfArms": {}
    },
    {
      "cca2": "LR",
      "currencies": {
        "LRD": {
          "name": "dólar liberiano",
          "symbol": "$"
        }
      },
      "capital": "Monrovia",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "República de Liberia",
          "common": "Liberia"
        }
      },
      "area": 111369,
      "demonyms": "liberiano",
      "population": 5057677,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/lr.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/lr.png"
    },
    {
      "cca2": "NC",
      "currencies": {
        "XPF": {
          "name": "franco CFP",
          "symbol": "₣"
        }
      },
      "capital": "Nouméa",
      "languages": {
        "fra": "francés"
      },
      "translations": {
        "spa": {
          "official": "nueva Caledonia",
          "common": "Nueva Caledonia"
        }
      },
      "area": 18575,
      "demonyms": "Nueva Caledonia",
      "population": 271960,
      "continent": "Oceanía",
      "flag": "https://flagcdn.com/w320/nc.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/nc.png"
    },
    {
      "cca2": "SM",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "City of San Marino",
      "languages": {
        "ita": "italiano"
      },
      "translations": {
        "spa": {
          "official": "Serenísima República de San Marino",
          "common": "San Marino"
        }
      },
      "area": 61,
      "demonyms": "Sammarinés",
      "population": 33938,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/sm.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/sm.png"
    },
    {
      "cca2": "AR",
      "currencies": {
        "ARS": {
          "name": "peso argentino",
          "symbol": "$"
        }
      },
      "capital": "Buenos Aires",
      "languages": {
        "grn": "Guaraní",
        "spa": "español"
      },
      "translations": {
        "spa": {
          "official": "República Argentina",
          "common": "Argentina"
        }
      },
      "area": 2780400,
      "demonyms": "Argentino",
      "population": 45376763,
      "continent": "Sudamérica",
      "flag": "https://flagcdn.com/w320/ar.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ar.png"
    },
    {
      "cca2": "AU",
      "currencies": {
        "AUD": {
          "name": "dólar australiano",
          "symbol": "$"
        }
      },
      "capital": "Canberra",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "Mancomunidad de Australia",
          "common": "Australia"
        }
      },
      "area": 7692024,
      "demonyms": "australiano",
      "population": 25687041,
      "continent": "Oceanía",
      "flag": "https://flagcdn.com/w320/au.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/au.png"
    },
    {
      "cca2": "PG",
      "currencies": {
        "PGK": {
          "name": "Papúa Nueva Guinea",
          "symbol": "K"
        }
      },
      "capital": "Port Moresby",
      "languages": {
        "eng": "inglés",
        "hmo": "Hiri Motu",
        "tpi": "Tok Pisin"
      },
      "translations": {
        "spa": {
          "official": "Estado Independiente de Papúa Nueva Guinea",
          "common": "Papúa Nueva Guinea"
        }
      },
      "area": 462840,
      "demonyms": "Papúa Nueva Guinea",
      "population": 8947027,
      "continent": "Oceanía",
      "flag": "https://flagcdn.com/w320/pg.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/pg.png"
    },
    {
      "cca2": "FM",
      "currencies": {
        "USD": {
          "name": "dólar de los Estados Unidos",
          "symbol": "$"
        }
      },
      "capital": "Palikir",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "Estados Federados de Micronesia",
          "common": "Micronesia"
        }
      },
      "area": 702,
      "demonyms": "micronesio",
      "population": 115021,
      "continent": "Oceanía",
      "flag": "https://flagcdn.com/w320/fm.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/fm.png"
    },
    {
      "cca2": "WF",
      "currencies": {
        "XPF": {
          "name": "franco CFP",
          "symbol": "₣"
        }
      },
      "capital": "Mata-Utu",
      "languages": {
        "fra": "francés"
      },
      "translations": {
        "spa": {
          "official": "Territorio de las Islas Wallis y Futuna",
          "common": "Wallis y Futuna"
        }
      },
      "area": 142,
      "demonyms": "Isleño de Wallis y Futuna",
      "population": 11750,
      "continent": "Oceanía",
      "flag": "https://flagcdn.com/w320/wf.png",
      "oatOfArms": {}
    },
    {
      "cca2": "LS",
      "currencies": {
        "LSL": {
          "name": "Lesoto loti",
          "symbol": "L"
        },
        "ZAR": {
          "name": "rand sudafricano",
          "symbol": "R"
        }
      },
      "capital": "Maseru",
      "languages": {
        "eng": "inglés",
        "sot": "sotho"
      },
      "translations": {
        "spa": {
          "official": "Reino de Lesotho",
          "common": "Lesotho"
        }
      },
      "area": 30355,
      "demonyms": "Mosotho",
      "population": 2142252,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/ls.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ls.png"
    },
    {
      "cca2": "GU",
      "currencies": {
        "USD": {
          "name": "dólar de los Estados Unidos",
          "symbol": "$"
        }
      },
      "capital": "Hagåtña",
      "languages": {
        "cha": "Chamorro",
        "eng": "inglés",
        "spa": "español"
      },
      "translations": {
        "spa": {
          "official": "Guam",
          "common": "Guam"
        }
      },
      "area": 549,
      "demonyms": "Guameña",
      "population": 168783,
      "continent": "Oceanía",
      "flag": "https://flagcdn.com/w320/gu.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/gu.png"
    },
    {
      "cca2": "ES",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Madrid",
      "languages": {
        "spa": "español"
      },
      "translations": {
        "spa": {
          "official": "Reino de España",
          "common": "España"
        }
      },
      "area": 505992,
      "demonyms": "español",
      "population": 47351567,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/es.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/es.png"
    },
    {
      "cca2": "AD",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Andorra la Vella",
      "languages": {
        "cat": "catalán"
      },
      "translations": {
        "spa": {
          "official": "Principado de Andorra",
          "common": "Andorra"
        }
      },
      "area": 468,
      "demonyms": "andorrano",
      "population": 77265,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/ad.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ad.png"
    },
    {
      "cca2": "IS",
      "currencies": {
        "ISK": {
          "name": "corona islandesa",
          "symbol": "kr"
        }
      },
      "capital": "Reykjavik",
      "languages": {
        "isl": "islandés"
      },
      "translations": {
        "spa": {
          "official": "Islandia",
          "common": "Islandia"
        }
      },
      "area": 103000,
      "demonyms": "islandés",
      "population": 366425,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/is.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/is.png"
    },
    {
      "cca2": "AE",
      "currencies": {
        "AED": {
          "name": "Dírham de los Emiratos Árabes Unidos",
          "symbol": "د.إ"
        }
      },
      "capital": "Abu Dhabi",
      "languages": {
        "ara": "árabe"
      },
      "translations": {
        "spa": {
          "official": "Emiratos Árabes Unidos",
          "common": "Emiratos Árabes Unidos"
        }
      },
      "area": 83600,
      "demonyms": "emiratí",
      "population": 9890400,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/ae.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ae.png"
    },
    {
      "cca2": "MX",
      "currencies": {
        "MXN": {
          "name": "peso mexicano",
          "symbol": "$"
        }
      },
      "capital": "Mexico City",
      "languages": {
        "spa": "español"
      },
      "translations": {
        "spa": {
          "official": "Estados Unidos Mexicanos",
          "common": "México"
        }
      },
      "area": 1964375,
      "demonyms": "mexicano",
      "population": 128932753,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/mx.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/mx.png"
    },
    {
      "cca2": "TV",
      "currencies": {
        "AUD": {
          "name": "dólar australiano",
          "symbol": "$"
        },
        "TVD": {
          "name": "dólar tuvaluano",
          "symbol": "$"
        }
      },
      "capital": "Funafuti",
      "languages": {
        "eng": "inglés",
        "tvl": "tuvaluano"
      },
      "translations": {
        "spa": {
          "official": "Tuvalu",
          "common": "Tuvalu"
        }
      },
      "area": 26,
      "demonyms": "tuvaluano",
      "population": 11792,
      "continent": "Oceanía",
      "flag": "https://flagcdn.com/w320/tv.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/tv.png"
    },
    {
      "cca2": "UZ",
      "currencies": {
        "UZS": {
          "name": "So'm uzbeko",
          "symbol": "so'm"
        }
      },
      "capital": "Tashkent",
      "languages": {
        "rus": "ruso",
        "uzb": "Uzbek"
      },
      "translations": {
        "spa": {
          "official": "República de Uzbekistán",
          "common": "Uzbekistán"
        }
      },
      "area": 447400,
      "demonyms": "uzbekistaní",
      "population": 34232050,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/uz.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/uz.png"
    },
    {
      "cca2": "EC",
      "currencies": {
        "USD": {
          "name": "dólar de los Estados Unidos",
          "symbol": "$"
        }
      },
      "capital": "Quito",
      "languages": {
        "spa": "español"
      },
      "translations": {
        "spa": {
          "official": "República del Ecuador",
          "common": "Ecuador"
        }
      },
      "area": 276841,
      "demonyms": "ecuatoriano",
      "population": 17643060,
      "continent": "Sudamérica",
      "flag": "https://flagcdn.com/w320/ec.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ec.png"
    },
    {
      "cca2": "VC",
      "currencies": {},
      "capital": "Kingstown",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "San Vicente y las Granadinas",
          "common": "San Vicente y Granadinas"
        }
      },
      "area": 389,
      "demonyms": "San Vicentino",
      "population": 110947,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/vc.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/vc.png"
    },
    {
      "cca2": "AF",
      "currencies": {
        "AFN": {
          "name": "afgano afgano",
          "symbol": "؋"
        }
      },
      "capital": "Kabul",
      "languages": {
        "prs": "Darí",
        "pus": "Pashto",
        "tuk": "Turkmen"
      },
      "translations": {
        "spa": {
          "official": "República Islámica de Afganistán",
          "common": "Afganistán"
        }
      },
      "area": 652230,
      "demonyms": "afgano",
      "population": 40218234,
      "continent": "Asia",
      "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/af.png"
    },
    {
      "cca2": "SY",
      "currencies": {
        "SYP": {
          "name": "libra siria",
          "symbol": "£"
        }
      },
      "capital": "Damascus",
      "languages": {
        "ara": "árabe"
      },
      "translations": {
        "spa": {
          "official": "República Árabe Siria",
          "common": "Siria"
        }
      },
      "area": 185180,
      "demonyms": "sirio",
      "population": 17500657,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/sy.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/sy.png"
    },
    {
      "cca2": "SC",
      "currencies": {
        "SCR": {
          "name": "Rupia de Seychelles",
          "symbol": "₨"
        }
      },
      "capital": "Victoria",
      "languages": {
        "crs": "criollo de Seychelles",
        "eng": "inglés",
        "fra": "francés"
      },
      "translations": {
        "spa": {
          "official": "República de las Seychelles",
          "common": "Seychelles"
        }
      },
      "area": 452,
      "demonyms": "Seychelles",
      "population": 98462,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/sc.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/sc.png"
    },
    {
      "cca2": "BD",
      "currencies": {
        "BDT": {
          "name": "carácter bangladesí",
          "symbol": "৳"
        }
      },
      "capital": "Dhaka",
      "languages": {
        "ben": "bengalí"
      },
      "translations": {
        "spa": {
          "official": "República Popular de Bangladesh",
          "common": "Bangladesh"
        }
      },
      "area": 147570,
      "demonyms": "bangladesí",
      "population": 164689383,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/bd.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/bd.png"
    },
    {
      "cca2": "TN",
      "currencies": {
        "TND": {
          "name": "dinar tunecino",
          "symbol": "د.ت"
        }
      },
      "capital": "Tunis",
      "languages": {
        "ara": "árabe"
      },
      "translations": {
        "spa": {
          "official": "República de Túnez",
          "common": "Túnez"
        }
      },
      "area": 163610,
      "demonyms": "tunecino",
      "population": 11818618,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/tn.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/tn.png"
    },
    {
      "cca2": "ME",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Podgorica",
      "languages": {
        "cnr": "montenegrino"
      },
      "translations": {
        "spa": {
          "official": "Montenegro",
          "common": "Montenegro"
        }
      },
      "area": 13812,
      "demonyms": "montenegrino",
      "population": 621718,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/me.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/me.png"
    },
    {
      "cca2": "PT",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Lisbon",
      "languages": {
        "por": "portugués"
      },
      "translations": {
        "spa": {
          "official": "República Portuguesa",
          "common": "Portugal"
        }
      },
      "area": 92090,
      "demonyms": "portugués",
      "population": 10305564,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/pt.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/pt.png"
    },
    {
      "cca2": "DM",
      "currencies": {},
      "capital": "Roseau",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "Mancomunidad de Dominica",
          "common": "Dominica"
        }
      },
      "area": 751,
      "demonyms": "dominicano",
      "population": 71991,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/dm.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/dm.png"
    },
    {
      "cca2": "CM",
      "currencies": {
        "XAF": {
          "name": "franco CFA centroafricano",
          "symbol": "Fr"
        }
      },
      "capital": "Yaoundé",
      "languages": {
        "eng": "inglés",
        "fra": "francés"
      },
      "translations": {
        "spa": {
          "official": "República de Camerún",
          "common": "Camerún"
        }
      },
      "area": 475442,
      "demonyms": "camerunés",
      "population": 26545864,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/cm.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/cm.png"
    },
    {
      "cca2": "GQ",
      "currencies": {
        "XAF": {
          "name": "franco CFA centroafricano",
          "symbol": "Fr"
        }
      },
      "capital": "Malabo",
      "languages": {
        "fra": "francés",
        "por": "portugués",
        "spa": "español"
      },
      "translations": {
        "spa": {
          "official": "República de Guinea Ecuatorial",
          "common": "Guinea Ecuatorial"
        }
      },
      "area": 28051,
      "demonyms": "ecuatoguineano",
      "population": 1402985,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/gq.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/gq.png"
    },
    {
      "cca2": "PM",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Saint-Pierre",
      "languages": {
        "fra": "francés"
      },
      "translations": {
        "spa": {
          "official": "San Pedro y Miquelón",
          "common": "San Pedro y Miquelón"
        }
      },
      "area": 242,
      "demonyms": "Saint-Pierrais, Miquelónnais",
      "population": 6069,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/pm.png",
      "oatOfArms": {}
    },
    {
      "cca2": "BB",
      "currencies": {
        "BBD": {
          "name": "dólar barbadense",
          "symbol": "$"
        }
      },
      "capital": "Bridgetown",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "Barbados",
          "common": "Barbados"
        }
      },
      "area": 430,
      "demonyms": "barbadense",
      "population": 287371,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/bb.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/bb.png"
    },
    {
      "cca2": "CR",
      "currencies": {
        "CRC": {
          "name": "colón costarricense",
          "symbol": "₡"
        }
      },
      "capital": "San José",
      "languages": {
        "spa": "español"
      },
      "translations": {
        "spa": {
          "official": "República de Costa Rica",
          "common": "Costa Rica"
        }
      },
      "area": 51100,
      "demonyms": "Costa Rica",
      "population": 5094114,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/cr.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/cr.png"
    },
    {
      "cca2": "MD",
      "currencies": {
        "MDL": {
          "name": "leu moldavo",
          "symbol": "L"
        }
      },
      "capital": "Chișinău",
      "languages": {
        "ron": "rumano"
      },
      "translations": {
        "spa": {
          "official": "República de Moldova",
          "common": "Moldavia"
        }
      },
      "area": 33846,
      "demonyms": "moldavo",
      "population": 2617820,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/md.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/md.png"
    },
    {
      "cca2": "NR",
      "currencies": {
        "AUD": {
          "name": "dólar australiano",
          "symbol": "$"
        }
      },
      "capital": "Yaren",
      "languages": {
        "eng": "inglés",
        "nau": "Nauru"
      },
      "translations": {
        "spa": {
          "official": "República de Nauru",
          "common": "Nauru"
        }
      },
      "area": 21,
      "demonyms": "nauruano",
      "population": 10834,
      "continent": "Oceanía",
      "flag": "https://flagcdn.com/w320/nr.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/nr.png"
    },
    {
      "cca2": "CX",
      "currencies": {
        "AUD": {
          "name": "dólar australiano",
          "symbol": "$"
        }
      },
      "capital": "Flying Fish Cove",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "Territorio de la Isla de Navidad",
          "common": "Isla de Navidad"
        }
      },
      "area": 135,
      "demonyms": "isleño de navidad",
      "population": 2072,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/cx.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/cx.png"
    },
    {
      "cca2": "LT",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Vilnius",
      "languages": {
        "lit": "lituano"
      },
      "translations": {
        "spa": {
          "official": "República de Lituania",
          "common": "Lituania"
        }
      },
      "area": 65300,
      "demonyms": "lituano",
      "population": 2794700,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/lt.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/lt.png"
    },
    {
      "cca2": "KR",
      "currencies": {
        "KRW": {
          "name": "Won surcoreano",
          "symbol": "₩"
        }
      },
      "capital": "Seoul",
      "languages": {
        "kor": "coreano"
      },
      "translations": {
        "spa": {
          "official": "República de Corea",
          "common": "Corea del Sur"
        }
      },
      "area": 100210,
      "demonyms": "Sur coreano",
      "population": 51780579,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/kr.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/kr.png"
    },
    {
      "cca2": "GT",
      "currencies": {
        "GTQ": {
          "name": "quetzal guatemalteco",
          "symbol": "Q"
        }
      },
      "capital": "Guatemala City",
      "languages": {
        "spa": "español"
      },
      "translations": {
        "spa": {
          "official": "República de Guatemala",
          "common": "Guatemala"
        }
      },
      "area": 108889,
      "demonyms": "guatemalteco",
      "population": 16858333,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/gt.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/gt.png"
    },
    {
      "cca2": "IR",
      "currencies": {
        "IRR": {
          "name": "rial iraní",
          "symbol": "﷼"
        }
      },
      "capital": "Tehran",
      "languages": {
        "fas": "persa (farsi)"
      },
      "translations": {
        "spa": {
          "official": "República Islámica de Irán",
          "common": "Iran"
        }
      },
      "area": 1648195,
      "demonyms": "iraní",
      "population": 83992953,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/ir.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ir.png"
    },
    {
      "cca2": "GM",
      "currencies": {
        "GMD": {
          "name": "dalasi",
          "symbol": "D"
        }
      },
      "capital": "Banjul",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "República de Gambia",
          "common": "Gambia"
        }
      },
      "area": 10689,
      "demonyms": "gambiano",
      "population": 2416664,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/gm.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/gm.png"
    },
    {
      "cca2": "BY",
      "currencies": {
        "BYN": {
          "name": "rublo bielorruso",
          "symbol": "Br"
        }
      },
      "capital": "Minsk",
      "languages": {
        "bel": "bielorruso",
        "rus": "ruso"
      },
      "translations": {
        "spa": {
          "official": "República de Belarús",
          "common": "Bielorrusia"
        }
      },
      "area": 207600,
      "demonyms": "bielorruso",
      "population": 9398861,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/by.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/by.png"
    },
    {
      "cca2": "RS",
      "currencies": {
        "RSD": {
          "name": "dinar serbio",
          "symbol": "дин."
        }
      },
      "capital": "Belgrade",
      "languages": {
        "srp": "serbio"
      },
      "translations": {
        "spa": {
          "official": "República de Serbia",
          "common": "Serbia"
        }
      },
      "area": 88361,
      "demonyms": "serbio",
      "population": 6908224,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/rs.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/rs.png"
    },
    {
      "cca2": "BS",
      "currencies": {
        "BSD": {
          "name": "dólar bahameño",
          "symbol": "$"
        },
        "USD": {
          "name": "dólar de los Estados Unidos",
          "symbol": "$"
        }
      },
      "capital": "Nassau",
      "languages": {
        "eng": "inglés"
      },
      "translations": {},
      "area": 13943,
      "demonyms": "bahameño",
      "population": 393248,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/bs.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/bs.png"
    },
    {
      "cca2": "MK",
      "currencies": {
        "MKD": {
          "name": "denar",
          "symbol": "den"
        }
      },
      "capital": "Skopje",
      "languages": {
        "mkd": "macedónio"
      },
      "translations": {
        "spa": {
          "official": "República de Macedonia del Norte",
          "common": "Macedonia del Norte"
        }
      },
      "area": 25713,
      "demonyms": "macedónio",
      "population": 2077132,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/mk.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/mk.png"
    },
    {
      "cca2": "MO",
      "currencies": {
        "MOP": {
          "name": "papas de Macao",
          "symbol": "P"
        }
      },
      "languages": {
        "por": "portugués",
        "zho": "chino"
      },
      "translations": {
        "spa": {
          "official": "Macao, Región Administrativa Especial de la República Popular China",
          "common": "Macao"
        }
      },
      "area": 30,
      "demonyms": "macaense",
      "population": 649342,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/mo.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/mo.png"
    },
    {
      "cca2": "CH",
      "currencies": {
        "CHF": {
          "name": "Franco suizo",
          "symbol": "Fr."
        }
      },
      "capital": "Bern",
      "languages": {
        "fra": "francés",
        "gsw": "Swiss alemán",
        "ita": "Italian",
        "roh": "Romansh"
      },
      "translations": {
        "spa": {
          "official": "Confederación Suiza",
          "common": "Suiza"
        }
      },
      "area": 41284,
      "demonyms": "suizo",
      "population": 8654622,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/ch.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ch.png"
    },
    {
      "cca2": "SD",
      "currencies": {
        "SDG": {
          "name": "libra sudanesad"
        }
      },
      "capital": "Khartoum",
      "languages": {
        "ara": "árabe",
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "República de Sudán",
          "common": "Sudán"
        }
      },
      "area": 1886068,
      "demonyms": "sudanés",
      "population": 43849269,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/sd.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/sd.png"
    },
    {
      "cca2": "TF",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Port-aux-Français",
      "languages": {
        "fra": "francés"
      },
      "translations": {
        "spa": {
          "official": "Territorio del francés Tierras australes y antárticas",
          "common": "Tierras Australes y Antárticas Francesas"
        }
      },
      "area": 7747,
      "demonyms": "francés",
      "population": 400,
      "continent": "Antártida",
      "flag": "https://flagcdn.com/w320/tf.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/tf.png"
    },
    {
      "cca2": "DZ",
      "currencies": {
        "DZD": {
          "name": "dinar argelino",
          "symbol": "د.ج"
        }
      },
      "capital": "Algiers",
      "languages": {
        "ara": "árabe"
      },
      "translations": {
        "spa": {
          "official": "República Argelina Democrática y Popular",
          "common": "Argelia"
        }
      },
      "area": 2381741,
      "demonyms": "argelino",
      "population": 44700000,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/dz.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/dz.png"
    },
    {
      "cca2": "NG",
      "currencies": {
        "NGN": {
          "name": "naira nigeriana",
          "symbol": "₦"
        }
      },
      "capital": "Abuja",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "República Federal de Nigeria",
          "common": "Nigeria"
        }
      },
      "area": 923768,
      "demonyms": "nigeriano",
      "population": 206139587,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/ng.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ng.png"
    },
    {
      "cca2": "FJ",
      "currencies": {
        "FJD": {
          "name": "dólar fiyiano",
          "symbol": "$"
        }
      },
      "capital": "Suva",
      "languages": {
        "eng": "inglés",
        "fij": "fiyiano",
        "hif": "Fiji hindi"
      },
      "translations": {
        "spa": {
          "official": "República de Fiji",
          "common": "Fiyi"
        }
      },
      "area": 18272,
      "demonyms": "fiyiano",
      "population": 896444,
      "continent": "Oceanía",
      "flag": "https://flagcdn.com/w320/fj.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/fj.png"
    },
    {
      "cca2": "KE",
      "currencies": {
        "KES": {
          "name": "chelín keniano",
          "symbol": "Sh"
        }
      },
      "capital": "Nairobi",
      "languages": {
        "eng": "inglés",
        "swa": "swahili"
      },
      "translations": {
        "spa": {
          "official": "República de Kenya",
          "common": "Kenia"
        }
      },
      "area": 580367,
      "demonyms": "keniano",
      "population": 53771300,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/ke.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ke.png"
    },
    {
      "cca2": "LY",
      "currencies": {
        "LYD": {
          "name": "dinar libio",
          "symbol": "ل.د"
        }
      },
      "capital": "Tripoli",
      "languages": {
        "ara": "árabe"
      },
      "translations": {
        "spa": {
          "official": "Estado de Libia",
          "common": "Libia"
        }
      },
      "area": 1759540,
      "demonyms": "libio",
      "population": 6871287,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/ly.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ly.png"
    },
    {
      "cca2": "KN",
      "currencies": {},
      "capital": "Basseterre",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "Federación de San Cristóbal y Nevis",
          "common": "San Cristóbal y Nieves"
        }
      },
      "area": 261,
      "demonyms": "Kittitian o Nevisian",
      "population": 53192,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/kn.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/kn.png"
    },
    {
      "cca2": "BZ",
      "currencies": {
        "BZD": {
          "name": "dólar beliceño",
          "symbol": "$"
        }
      },
      "capital": "Belmopan",
      "languages": {
        "bjz": "criollo beliceño",
        "eng": "inglés",
        "spa": "español"
      },
      "translations": {
        "spa": {
          "official": "Belice",
          "common": "Belice"
        }
      },
      "area": 22966,
      "demonyms": "beliceño",
      "population": 397621,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/bz.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/bz.png"
    },
    {
      "cca2": "CI",
      "currencies": {
        "XOF": {
          "name": "Franco CFA de África Occidental",
          "symbol": "Fr"
        }
      },
      "capital": "Yamoussoukro",
      "languages": {
        "fra": "francés"
      },
      "translations": {
        "spa": {
          "official": "República de Côte d'Ivoire",
          "common": "Costa de Marfil"
        }
      },
      "area": 322463,
      "demonyms": "marfileño",
      "population": 26378275,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/ci.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ci.png"
    },
    {
      "cca2": "DE",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Berlin",
      "languages": {
        "deu": "alemán"
      },
      "translations": {
        "spa": {
          "official": "República Federal de Alemania",
          "common": "Alemania"
        }
      },
      "area": 357114,
      "demonyms": "alemán",
      "population": 83240525,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/de.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/de.png"
    },
    {
      "cca2": "LI",
      "currencies": {
        "CHF": {
          "name": "Franco suizo",
          "symbol": "Fr"
        }
      },
      "capital": "Vaduz",
      "languages": {
        "deu": "alemán"
      },
      "translations": {
        "spa": {
          "official": "Principado de Liechtenstein",
          "common": "Liechtenstein"
        }
      },
      "area": 160,
      "demonyms": "Liechtenstein",
      "population": 38137,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/li.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/li.png"
    },
    {
      "cca2": "NE",
      "currencies": {
        "XOF": {
          "name": "Franco CFA de África Occidental",
          "symbol": "Fr"
        }
      },
      "capital": "Niamey",
      "languages": {
        "fra": "francés"
      },
      "translations": {
        "spa": {
          "official": "República de Níger",
          "common": "Níger"
        }
      },
      "area": 1267000,
      "demonyms": "Níger",
      "population": 24206636,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/ne.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ne.png"
    },
    {
      "cca2": "CW",
      "currencies": {
        "ANG": {
          "name": "Gremios de las Antillas Neerlandesas",
          "symbol": "ƒ"
        }
      },
      "capital": "Willemstad",
      "translations": {
        "spa": {
          "official": "País de Curazao",
          "common": "Curazao"
        }
      },
      "area": 444,
      "demonyms": "curazaoano",
      "population": 155014,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/cw.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/cw.png"
    },
    {
      "cca2": "JM",
      "currencies": {
        "JMD": {
          "name": "dólar jamaiquino",
          "symbol": "$"
        }
      },
      "capital": "Kingston",
      "languages": {
        "eng": "inglés",
        "jam": "patois de Jamaica"
      },
      "translations": {
        "spa": {
          "official": "Jamaica",
          "common": "Jamaica"
        }
      },
      "area": 10991,
      "demonyms": "jamaicano",
      "population": 2961161,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/jm.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/jm.png"
    },
    {
      "cca2": "MM",
      "currencies": {
        "MMK": {
          "name": "Kyat birmano",
          "symbol": "Ks"
        }
      },
      "capital": "Naypyidaw",
      "languages": {
        "mya": "birmano"
      },
      "translations": {
        "spa": {
          "official": "República de la Unión de Myanmar",
          "common": "Myanmar"
        }
      },
      "area": 676578,
      "demonyms": "birmano",
      "population": 54409794,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/mm.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/mm.png"
    },
    {
      "cca2": "DO",
      "currencies": {
        "DOP": {
          "name": "peso dominicano",
          "symbol": "$"
        }
      },
      "capital": "Santo Domingo",
      "languages": {
        "spa": "español"
      },
      "translations": {
        "spa": {
          "official": "República Dominicana",
          "common": "República Dominicana"
        }
      },
      "area": 48671,
      "demonyms": "dominicano",
      "population": 10847904,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/do.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/do.png"
    },
    {
      "cca2": "LA",
      "currencies": {
        "LAK": {
          "name": "kip laosiano",
          "symbol": "₭"
        }
      },
      "capital": "Vientiane",
      "languages": {
        "lao": "laosiano"
      },
      "translations": {
        "spa": {
          "official": "República Democrática Popular Lao",
          "common": "Laos"
        }
      },
      "area": 236800,
      "demonyms": "laosiano",
      "population": 7275556,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/la.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/la.png"
    },
    {
      "cca2": "MY",
      "currencies": {
        "MYR": {
          "name": "Ringgit malayoo",
          "symbol": "RM"
        }
      },
      "capital": "Kuala Lumpur",
      "languages": {
        "eng": "inglés",
        "msa": "malayo"
      },
      "translations": {
        "spa": {
          "official": "Malasia",
          "common": "Malasia"
        }
      },
      "area": 330803,
      "demonyms": "malasio",
      "population": 32365998,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/my.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/my.png"
    },
    {
      "cca2": "TD",
      "currencies": {
        "XAF": {
          "name": "franco CFA centroafricano",
          "symbol": "Fr"
        }
      },
      "capital": "N'Djamena",
      "languages": {
        "ara": "árabe",
        "fra": "francés"
      },
      "translations": {
        "spa": {
          "official": "República de Chad",
          "common": "Chad"
        }
      },
      "area": 1284000,
      "demonyms": "Chadiano",
      "population": 16425859,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/td.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/td.png"
    },
    {
      "cca2": "BI",
      "currencies": {
        "BIF": {
          "name": "franco burundés",
          "symbol": "Fr"
        }
      },
      "capital": "Gitega",
      "languages": {
        "fra": "francés",
        "run": "Kirundi"
      },
      "translations": {
        "spa": {
          "official": "República de Burundi",
          "common": "Burundi"
        }
      },
      "area": 27834,
      "demonyms": "burundés",
      "population": 11890781,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/bi.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/bi.png"
    },
    {
      "cca2": "CK",
      "currencies": {
        "CKD": {
          "name": "Dólar de las Islas Cook",
          "symbol": "$"
        },
        "NZD": {
          "name": "Dolar de Nueva Zelanda",
          "symbol": "$"
        }
      },
      "capital": "Avarua",
      "languages": {
        "eng": "inglés",
        "rar": "maorí de las Islas Cook"
      },
      "translations": {
        "spa": {
          "official": "Islas Cook",
          "common": "Islas Cook"
        }
      },
      "area": 236,
      "demonyms": "Isleño de Cook",
      "population": 18100,
      "continent": "Oceanía",
      "flag": "https://flagcdn.com/w320/ck.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ck.png"
    },
    {
      "cca2": "CG",
      "currencies": {
        "XAF": {
          "name": "franco CFA centroafricano",
          "symbol": "Fr"
        }
      },
      "capital": "Brazzaville",
      "languages": {
        "fra": "francés",
        "kon": "Kikongo",
        "lin": "Lingala"
      },
      "translations": {
        "spa": {
          "official": "República del Congo",
          "common": "Congo"
        }
      },
      "area": 342000,
      "demonyms": "congoleño",
      "population": 5657000,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/cg.png",
      "oatOfArms": {}
    },
    {
      "cca2": "CY",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Nicosia",
      "languages": {
        "ell": "Griego",
        "tur": "Turkish"
      },
      "translations": {
        "spa": {
          "official": "República de Chipre",
          "common": "Chipre"
        }
      },
      "area": 9251,
      "demonyms": "chipriota",
      "population": 1207361,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/cy.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/cy.png"
    },
    {
      "cca2": "GY",
      "currencies": {
        "GYD": {
          "name": "dólar guyanés",
          "symbol": "$"
        }
      },
      "capital": "Georgetown",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "República Cooperativa de Guyana",
          "common": "Guyana"
        }
      },
      "area": 214969,
      "demonyms": "guyanés",
      "population": 786559,
      "continent": "Sudamérica",
      "flag": "https://flagcdn.com/w320/gy.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/gy.png"
    },
    {
      "cca2": "PK",
      "currencies": {
        "PKR": {
          "name": "rupia paquistaní",
          "symbol": "₨"
        }
      },
      "capital": "Islamabad",
      "languages": {
        "eng": "inglés",
        "urd": "urdu"
      },
      "translations": {
        "spa": {
          "official": "República Islámica de Pakistán",
          "common": "Pakistán"
        }
      },
      "area": 881912,
      "demonyms": "pakistaní",
      "population": 220892331,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/pk.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/pk.png"
    },
    {
      "cca2": "SZ",
      "currencies": {
        "SZL": {
          "name": "Suazilandia no es",
          "symbol": "L"
        },
        "ZAR": {
          "name": "rand sudafricano",
          "symbol": "R"
        }
      },
      "capital": "Mbabane",
      "languages": {
        "eng": "inglés",
        "ssw": "swazi"
      },
      "translations": {
        "spa": {
          "official": "Reino de Swatini",
          "common": "Suazilandia"
        }
      },
      "area": 17364,
      "demonyms": "suazi",
      "population": 1160164,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/sz.png",
      "oatOfArms": {}
    },
    {
      "cca2": "AG",
      "currencies": {},
      "capital": "Saint John's",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "Antigua y Barbuda",
          "common": "Antigua y Barbuda"
        }
      },
      "area": 442,
      "demonyms": "Antigua, Barbuda",
      "population": 97928,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/ag.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ag.png"
    },
    {
      "cca2": "CD",
      "currencies": {
        "CDF": {
          "name": "franco congoleño",
          "symbol": "FC"
        }
      },
      "capital": "Kinshasa",
      "languages": {
        "fra": "francés",
        "kon": "Kikongo",
        "lin": "Lingala",
        "lua": "Tshiluba",
        "swa": "swahili"
      },
      "translations": {
        "spa": {
          "official": "República Democrática del Congo",
          "common": "Congo (Rep. Dem.)"
        }
      },
      "area": 2344858,
      "demonyms": "congoleño",
      "population": 108407721,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/cd.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/cd.png"
    },
    {
      "cca2": "BE",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Brussels",
      "translations": {
        "spa": {
          "official": "Reino de Bélgica",
          "common": "Bélgica"
        }
      },
      "area": 30528,
      "demonyms": "Belga",
      "population": 11555997,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/be.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/be.png"
    },
    {
      "cca2": "RO",
      "currencies": {
        "RON": {
          "name": "leu rumano",
          "symbol": "lei"
        }
      },
      "capital": "Bucharest",
      "languages": {
        "ron": "rumano"
      },
      "translations": {
        "spa": {
          "official": "Rumania",
          "common": "Rumania"
        }
      },
      "area": 238391,
      "demonyms": "rumano",
      "population": 19286123,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/ro.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ro.png"
    },
    {
      "cca2": "TZ",
      "currencies": {
        "TZS": {
          "name": "chelín tanzano",
          "symbol": "Sh"
        }
      },
      "capital": "Dodoma",
      "languages": {
        "eng": "inglés",
        "swa": "swahili"
      },
      "translations": {
        "spa": {
          "official": "República Unida de Tanzania",
          "common": "Tanzania"
        }
      },
      "area": 945087,
      "demonyms": "tanzano",
      "population": 59734213,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/tz.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/tz.png"
    },
    {
      "cca2": "EG",
      "currencies": {
        "EGP": {
          "name": "libra egipcia",
          "symbol": "£"
        }
      },
      "capital": "Cairo",
      "languages": {
        "ara": "árabe"
      },
      "translations": {
        "spa": {
          "official": "República Árabe de Egipto",
          "common": "Egipto"
        }
      },
      "area": 1002450,
      "demonyms": "egipcio",
      "population": 102334403,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/eg.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/eg.png"
    },
    {
      "cca2": "SI",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Ljubljana",
      "languages": {
        "slv": "esloveno"
      },
      "translations": {
        "spa": {
          "official": "República de Eslovenia",
          "common": "Eslovenia"
        }
      },
      "area": 20273,
      "demonyms": "esloveno",
      "population": 2100126,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/si.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/si.png"
    },
    {
      "cca2": "JP",
      "currencies": {
        "JPY": {
          "name": "yen japonés",
          "symbol": "¥"
        }
      },
      "capital": "Tokyo",
      "languages": {
        "jpn": "japonés"
      },
      "translations": {
        "spa": {
          "official": "Japón",
          "common": "Japón"
        }
      },
      "area": 377930,
      "demonyms": "japonés",
      "population": 125836021,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/jp.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/jp.png"
    },
    {
      "cca2": "GD",
      "currencies": {},
      "capital": "St. George's",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "Granada",
          "common": "Grenada"
        }
      },
      "area": 344,
      "demonyms": "granadino",
      "population": 112519,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/gd.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/gd.png"
    },
    {
      "cca2": "VA",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Vatican City",
      "languages": {
        "ita": "Italiano",
        "lat": "Latin"
      },
      "translations": {
        "spa": {
          "official": "Ciudad del Vaticano",
          "common": "Ciudad del Vaticano"
        }
      },
      "area": 0.44,
      "demonyms": "Vaticano",
      "population": 451,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/va.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/va.png"
    },
    {
      "cca2": "BR",
      "currencies": {
        "BRL": {
          "name": "Real brasileño",
          "symbol": "R$"
        }
      },
      "capital": "Brasília",
      "languages": {
        "por": "portugués"
      },
      "translations": {
        "spa": {
          "official": "República Federativa del Brasil",
          "common": "Brasil"
        }
      },
      "area": 8515767,
      "demonyms": "brasileño",
      "population": 212559409,
      "continent": "Sudamérica",
      "flag": "https://flagcdn.com/w320/br.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/br.png"
    },
    {
      "cca2": "GH",
      "currencies": {
        "GHS": {
          "name": "cedi ghanés",
          "symbol": "₵"
        }
      },
      "capital": "Accra",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "República de Ghana",
          "common": "Ghana"
        }
      },
      "area": 238533,
      "demonyms": "ghanés",
      "population": 31072945,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/gh.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/gh.png"
    },
    {
      "cca2": "SR",
      "currencies": {
        "SRD": {
          "name": "dólar surinamés",
          "symbol": "$"
        }
      },
      "capital": "Paramaribo",
      "translations": {
        "spa": {
          "official": "República de Suriname",
          "common": "Surinam"
        }
      },
      "area": 163820,
      "demonyms": "Surinam",
      "population": 586634,
      "continent": "Sudamérica",
      "flag": "https://flagcdn.com/w320/sr.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/sr.png"
    },
    {
      "cca2": "TR",
      "currencies": {
        "TRY": {
          "name": "Lira turca",
          "symbol": "₺"
        }
      },
      "capital": "Ankara",
      "languages": {
        "tur": "turco"
      },
      "translations": {
        "spa": {
          "official": "República de Turquía",
          "common": "Turquía"
        }
      },
      "area": 783562,
      "demonyms": "turco",
      "population": 84339067,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/tr.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/tr.png"
    },
    {
      "cca2": "BW",
      "currencies": {
        "BWP": {
          "name": "Lluvia de Botsuana",
          "symbol": "P"
        }
      },
      "capital": "Gaborone",
      "languages": {
        "eng": "inglés",
        "tsn": "tswana"
      },
      "translations": {
        "spa": {
          "official": "República de Botswana",
          "common": "Botswana"
        }
      },
      "area": 582000,
      "demonyms": "Motsuana",
      "population": 2351625,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/bw.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/bw.png"
    },
    {
      "cca2": "HK",
      "currencies": {
        "HKD": {
          "name": "Dolar de Hong Kong",
          "symbol": "$"
        }
      },
      "capital": "City of Victoria",
      "languages": {
        "eng": "inglés",
        "zho": "chino"
      },
      "translations": {
        "spa": {
          "official": "Hong Kong Región Administrativa Especial de la República Popular China",
          "common": "Hong Kong"
        }
      },
      "area": 1104,
      "demonyms": "hongkonés",
      "population": 7500700,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/hk.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/hk.png"
    },
    {
      "cca2": "XK",
      "capital": "Pristina",
      "languages": {
        "sqi": "Albanés",
        "srp": "Serbian"
      },
      "translations": {
        "spa": {
          "official": "República de Kosovo",
          "common": "Kosovo"
        }
      },
      "area": 10908,
      "demonyms": "kosovar",
      "population": 1775378,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/xk.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/xk.png"
    },
    {
      "cca2": "MF",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Marigot",
      "languages": {
        "fra": "francés"
      },
      "translations": {
        "spa": {
          "official": "Saint Martin",
          "common": "Saint Martin"
        }
      },
      "area": 53,
      "demonyms": "Isleño de San Martín",
      "population": 38659,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/mf.png",
      "oatOfArms": {}
    },
    {
      "cca2": "TM",
      "currencies": {
        "TMT": {
          "name": "manat turkmenistán",
          "symbol": "m"
        }
      },
      "capital": "Ashgabat",
      "languages": {
        "rus": "ruso",
        "tuk": "Turkmen"
      },
      "translations": {
        "spa": {
          "official": "Turkmenistán",
          "common": "Turkmenistán"
        }
      },
      "area": 488100,
      "demonyms": "turkmeno",
      "population": 6031187,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/tm.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/tm.png"
    },
    {
      "cca2": "AZ",
      "currencies": {
        "AZN": {
          "name": "manat azerbaiyano",
          "symbol": "₼"
        }
      },
      "capital": "Baku",
      "languages": {
        "aze": "azerbaiyano",
        "rus": "ruso"
      },
      "translations": {
        "spa": {
          "official": "República de Azerbaiyán",
          "common": "Azerbaiyán"
        }
      },
      "area": 86600,
      "demonyms": "azerbaiyano",
      "population": 10110116,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/az.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/az.png"
    },
    {
      "cca2": "ZA",
      "currencies": {
        "ZAR": {
          "name": "rand sudafricano",
          "symbol": "R"
        }
      },
      "capital": "Pretoria",
      "languages": {
        "afr": "africano",
        "eng": "inglés",
        "nbl": "Ndebele del Sur",
        "nso": "Sotho del Norte",
        "sot": "Sotho del Sur",
        "ssw": "suazi",
        "tsn": "Tswana",
        "tso": "Tsonga",
        "ven": "Venda",
        "xho": "Xhosa",
        "zul": "zulú"
      },
      "translations": {
        "spa": {
          "official": "República de Sudáfrica",
          "common": "Sudáfrica"
        }
      },
      "area": 1221037,
      "demonyms": "sudafricano",
      "population": 59308690,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/za.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/za.png"
    },
    {
      "cca2": "ET",
      "currencies": {
        "ETB": {
          "name": "Birr etíope",
          "symbol": "Br"
        }
      },
      "capital": "Addis Ababa",
      "languages": {
        "amh": "amárico"
      },
      "translations": {
        "spa": {
          "official": "República Democrática Federal de Etiopía",
          "common": "Etiopía"
        }
      },
      "area": 1104300,
      "demonyms": "etíope",
      "population": 114963583,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/et.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/et.png"
    },
    {
      "cca2": "SK",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Bratislava",
      "languages": {
        "slk": "eslovaco"
      },
      "translations": {
        "spa": {
          "official": "República Eslovaca",
          "common": "República Eslovaca"
        }
      },
      "area": 49037,
      "demonyms": "eslovaco",
      "population": 5458827,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/sk.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/sk.png"
    },
    {
      "cca2": "NA",
      "currencies": {
        "NAD": {
          "name": "dólar namibio",
          "symbol": "$"
        },
        "ZAR": {
          "name": "rand sudafricano",
          "symbol": "R"
        }
      },
      "capital": "Windhoek",
      "languages": {
        "afr": "africano",
        "deu": "alemán",
        "eng": "inglés",
        "her": "Herero",
        "hgm": "Khoekhoe",
        "kwn": "Kwangali",
        "loz": "Lozi",
        "ndo": "Ndonga",
        "tsn": "Tswana"
      },
      "translations": {
        "spa": {
          "official": "República de Namibia",
          "common": "Namibia"
        }
      },
      "area": 825615,
      "demonyms": "namibio",
      "population": 2540916,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/na.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/na.png"
    },
    {
      "cca2": "IN",
      "currencies": {
        "INR": {
          "name": "Rupia india",
          "symbol": "₹"
        }
      },
      "capital": "New Delhi",
      "languages": {
        "eng": "inglés",
        "hin": "hindi",
        "tam": "Tamil"
      },
      "translations": {
        "spa": {
          "official": "República de la India",
          "common": "India"
        }
      },
      "area": 3287590,
      "demonyms": "indio",
      "population": 1380004385,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/in.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/in.png"
    },
    {
      "cca2": "RE",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Saint-Denis",
      "languages": {
        "fra": "francés"
      },
      "translations": {
        "spa": {
          "official": "Isla de la Reunión",
          "common": "Reunión"
        }
      },
      "area": 2511,
      "demonyms": "reunionés",
      "population": 840974,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/re.png",
      "oatOfArms": {}
    },
    {
      "cca2": "UG",
      "currencies": {
        "UGX": {
          "name": "chelín ugandés",
          "symbol": "Sh"
        }
      },
      "capital": "Kampala",
      "languages": {
        "eng": "inglés",
        "swa": "swahili"
      },
      "translations": {
        "spa": {
          "official": "República de Uganda",
          "common": "Uganda"
        }
      },
      "area": 241550,
      "demonyms": "ugandés",
      "population": 45741000,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/ug.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ug.png"
    },
    {
      "cca2": "TC",
      "currencies": {
        "USD": {
          "name": "dólar de los Estados Unidos",
          "symbol": "$"
        }
      },
      "capital": "Cockburn Town",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "Islas Turcas y Caicos",
          "common": "Islas Turks y Caicos"
        }
      },
      "area": 948,
      "demonyms": "Isleño de las Islas Turcas y Caicos",
      "population": 38718,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/tc.png",
      "oatOfArms": {}
    },
    {
      "cca2": "TT",
      "currencies": {
        "TTD": {
          "name": "Dólar de Trinidad y Tobago",
          "symbol": "$"
        }
      },
      "capital": "Port of Spain",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "República de Trinidad y Tobago",
          "common": "Trinidad y Tobago"
        }
      },
      "area": 5130,
      "demonyms": "trinitense",
      "population": 1399491,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/tt.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/tt.png"
    },
    {
      "cca2": "GI",
      "languages": {
        "eng": "inglés"
      },
      "translations": {},
      "area": 6,
      "demonyms": {},
      "population": 33691,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/gi.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/gi.png"
    },
    {
      "cca2": "MR",
      "currencies": {
        "MRU": {
          "name": "guía mauritano",
          "symbol": "UM"
        }
      },
      "capital": "Nouakchott",
      "languages": {
        "ara": "árabe"
      },
      "translations": {
        "spa": {
          "official": "República Islámica de Mauritania",
          "common": "Mauritania"
        }
      },
      "area": 1030700,
      "demonyms": "mauritano",
      "population": 4649660,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/mr.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/mr.png"
    },
    {
      "cca2": "IE",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Dublin",
      "languages": {
        "eng": "inglés",
        "gle": "Irish"
      },
      "translations": {
        "spa": {
          "official": "República de Irlanda",
          "common": "Irlanda"
        }
      },
      "area": 70273,
      "demonyms": "irlandesa",
      "population": 4994724,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/ie.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ie.png"
    },
    {
      "cca2": "MG",
      "currencies": {
        "MGA": {
          "name": "Ariary malgache",
          "symbol": "Ar"
        }
      },
      "capital": "Antananarivo",
      "languages": {
        "fra": "francés",
        "mlg": "Malagasy"
      },
      "translations": {
        "spa": {
          "official": "Madagascar",
          "common": "Madagascar"
        },
      },
      "area": 587041,
      "demonyms": "madagascarí",
      "population": 27691019,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/mg.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/mg.png"
    },
    {
      "cca2": "GL",
      "currencies": {
        "DKK": {
          "name": "corona",
          "symbol": "kr."
        }
      },
      "capital": "Nuuk",
      "languages": {
        "kal": "groenlandés"
      },
      "translations": {
        "spa": {
          "official": "Groenlandia",
          "common": "Groenlandia"
        }
      },
      "area": 2166086,
      "demonyms": "groenlandés",
      "population": 56367,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/gl.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/gl.png"
    },
    {
      "cca2": "NI",
      "capital": "Managua",
      "languages": {
        "spa": "español"
      },
      "translations": {
        "spa": {
          "common": "Nicaragua"
        }
      },      "area": 130373,
      "demonyms": {},
      "population": 6624554,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/ni.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ni.png"
    },
    {
      "cca2": "BN",
      "currencies": {
        "BND": {
          "name": "dólar bruneano",
          "symbol": "$"
        },
        "SGD": {
          "name": "dolar de Singapur",
          "symbol": "$"
        }
      },
      "capital": "Bandar Seri Begawan",
      "languages": {
        "msa": "malayoo"
      },
      "translations": {
        "spa": {
          "official": "Nación de Brunei, Morada de la Paz",
          "common": "Brunei"
        }
      },
      "area": 5765,
      "demonyms": "bruneano",
      "population": 437483,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/bn.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/bn.png"
    },
    {
      "cca2": "KM",
      "currencies": {
        "KMF": {
          "name": "franco comorano",
          "symbol": "Fr"
        }
      },
      "capital": "Moroni",
      "languages": {
        "ara": "árabe",
        "fra": "francés",
        "zdj": "Comorian"
      },
      "translations": {
        "spa": {
          "official": "Unión de las Comoras",
          "common": "Comoras"
        }
      },
      "area": 1862,
      "demonyms": "Comoran",
      "population": 869595,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/km.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/km.png"
    },
    {
      "cca2": "BF",
      "currencies": {
        "XOF": {
          "name": "Franco CFA de África Occidental",
          "symbol": "Fr"
        }
      },
      "capital": "Ouagadougou",
      "languages": {
        "fra": "francés"
      },
      "translations": {
        "spa": {
          "official": "Burkina Faso",
          "common": "Burkina Faso"
        }
      },
      "area": 272967,
      "demonyms": "burkinabe",
      "population": 20903278,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/bf.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/bf.png"
    },
    {
      "cca2": "SX",
      "currencies": {
        "ANG": {
          "name": "Gremios de las Antillas Neerlandesas",
          "symbol": "ƒ"
        }
      },
      "capital": "Philipsburg",
      "translations": {
        "spa": {
          "official": "Sint Maarten",
          "common": "Sint Maarten"
        }
      },
      "area": 34,
      "demonyms": "San Martín",
      "population": 40812,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/sx.png",
      "oatOfArms": {}
    },
    {
      "cca2": "CF",
      "currencies": {
        "XAF": {
          "name": "franco CFA centroafricano",
          "symbol": "Fr"
        }
      },
      "capital": "Bangui",
      "languages": {
        "fra": "francés",
        "sag": "Sango"
      },
      "translations": {
        "spa": {
          "official": "República Centroafricana",
          "common": "República Centroafricana"
        },
      },
      "area": 622984,
      "demonyms": "centroafricano",
      "population": 4829764,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/cf.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/cf.png"
    },
    {
      "cca2": "NU",
      "currencies": {
        "NZD": {
          "name": "Dolar de Nueva Zelanda",
          "symbol": "$"
        }
      },
      "capital": "Alofi",
      "languages": {
        "eng": "inglés",
        "niu": "niueano"
      },
      "translations": {
        "spa": {
          "official": "Niue",
          "common": "Niue"
        }
      },
      "area": 260,
      "demonyms": "niueano",
      "population": 1470,
      "continent": "Oceanía",
      "flag": "https://flagcdn.com/w320/nu.png",
      "oatOfArms": {}
    },
    {
      "cca2": "SV",
      "currencies": {
        "USD": {
          "name": "dólar de los Estados Unidos",
          "symbol": "$"
        }
      },
      "capital": "San Salvador",
      "languages": {
        "spa": "español"
      },
      "translations": {
        "spa": {
          "official": "República de El Salvador",
          "common": "El Salvador"
        }
      },
      "area": 21041,
      "demonyms": "salvadoreño",
      "population": 6486201,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/sv.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/sv.png"
    },
    {
      "cca2": "PS",
      "currencies": {
        "EGP": {
          "name": "libra egipcia",
          "symbol": "E£"
        },
        "ILS": {
          "name": "nuevo shekel israelí",
          "symbol": "₪"
        },
        "JOD": {
          "name": "dinar jordano",
          "symbol": "JD"
        }
      },
      "capital": "Ramallah",
      "languages": {
        "ara": "árabe"
      },
      "translations": {
        "spa": {
          "official": "Estado de Palestina",
          "common": "Palestina"
        }
      },
      "area": 6220,
      "demonyms": "palestino",
      "population": 4803269,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/ps.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ps.png"
    },
    {
      "cca2": "TJ",
      "currencies": {
        "TJS": {
          "name": "Tayikistán somoni",
          "symbol": "ЅМ"
        }
      },
      "capital": "Dushanbe",
      "languages": {
        "rus": "ruso",
        "tgk": "Tajik"
      },
      "translations": {
        "spa": {
          "official": "República de Tayikistán",
          "common": "Tayikistán"
        }
      },
      "area": 143100,
      "demonyms": "Tadzhik",
      "population": 9537642,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/tj.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/tj.png"
    },
    {
      "cca2": "AL",
      "currencies": {
        "ALL": {
          "name": "lago albanés",
          "symbol": "L"
        }
      },
      "capital": "Tirana",
      "languages": {
        "sqi": "albanés"
      },
      "translations": {
        "spa": {
          "official": "República de Albania",
          "common": "Albania"
        }
      },
      "area": 28748,
      "demonyms": "albanés",
      "population": 2837743,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/al.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/al.png"
    },
    {
      "cca2": "MA",
      "currencies": {
        "MAD": {
          "name": "dírham marroquí",
          "symbol": "د.م."
        }
      },
      "capital": "Rabat",
      "languages": {
        "ara": "árabe",
        "ber": "Bereber"
      },
      "translations": {
        "spa": {
          "official": "Reino de Marruecos",
          "common": "Marruecos"
        }
      },
      "area": 446550,
      "demonyms": "marroquí",
      "population": 36910558,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/ma.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ma.png"
    },
    {
      "cca2": "TH",
      "currencies": {
        "THB": {
          "name": "baht tailandés",
          "symbol": "฿"
        }
      },
      "capital": "Bangkok",
      "languages": {
        "tha": "tailandés"
      },
      "translations": {
        "spa": {
          "official": "Reino de Tailandia",
          "common": "Tailandia"
        }
      },
      "area": 513120,
      "demonyms": "tailandés",
      "population": 69799978,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/th.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/th.png"
    },
    {
      "cca2": "GN",
      "currencies": {
        "GNF": {
          "name": "franco guineano",
          "symbol": "Fr"
        }
      },
      "capital": "Conakry",
      "languages": {
        "fra": "francés"
      },
      "translations": {
        "spa": {
          "official": "República de Guinea",
          "common": "Guinea"
        }
      },
      "area": 245857,
      "demonyms": "guineano",
      "population": 13132792,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/gn.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/gn.png"
    },
    {
      "cca2": "LV",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Riga",
      "languages": {
        "lav": "letón"
      },
      "translations": {
        "spa": {
          "official": "República de Letonia",
          "common": "Letonia"
        }
      },
      "area": 64559,
      "demonyms": "letón",
      "population": 1901548,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/lv.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/lv.png"
    },
    {
      "cca2": "MT",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Valletta",
      "translations": {},
      "area": 316,
      "demonyms": {},
      "population": 525285,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/mt.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/mt.png"
    },
    {
      "cca2": "SS",
      "currencies": {
        "SSP": {
          "name": "Libra sursudanesa",
          "symbol": "£"
        }
      },
      "capital": "Juba",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "República de Sudán del Sur",
          "common": "Sudán del Sur"
        }
      },
      "area": 619745,
      "demonyms": "sudanés del sur",
      "population": 11193729,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/ss.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ss.png"
    },
    {
      "cca2": "BA",
      "currencies": {
        "BAM": {
          "name": "Mar convertible de Bosnia y Herzegovinak"
        }
      },
      "capital": "Sarajevo",
      "languages": {
        "bos": "Bosnio",
        "hrv": "Croatian",
        "srp": "Serbian"
      },
      "translations": {
        "spa": {
          "official": "Bosnia y Herzegovina",
          "common": "Bosnia y Herzegovina"
        }
      },
      "area": 51209,
      "demonyms": "bosnio, herzegoviniano",
      "population": 3280815,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/ba.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ba.png"
    },
    {
      "cca2": "QA",
      "currencies": {
        "QAR": {
          "name": "Riyal qatarí",
          "symbol": "ر.ق"
        }
      },
      "capital": "Doha",
      "languages": {
        "ara": "árabe"
      },
      "translations": {
        "spa": {
          "official": "Estado de Qatar",
          "common": "Catar"
        }
      },
      "area": 11586,
      "demonyms": "catarí",
      "population": 2881060,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/qa.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/qa.png"
    },
    {
      "cca2": "BT",
      "currencies": {
        "BTN": {
          "name": "idioma butanés",
          "symbol": "Nu."
        },
        "INR": {
          "name": "Rupia india",
          "symbol": "₹"
        }
      },
      "capital": "Thimphu",
      "languages": {
        "dzo": "Dzongkha"
      },
      "translations": {
        "spa": {
          "official": "Reino de Bután",
          "common": "Bután"
        }
      },
      "area": 38394,
      "demonyms": "butanés",
      "population": 771612,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/bt.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/bt.png"
    },
    {
      "cca2": "IO",
      "currencies": {
        "USD": {
          "name": "dólar de los Estados Unidos",
          "symbol": "$"
        }
      },
      "capital": "Diego Garcia",
      "languages": {
        "eng": "inglés"
      },
      "translations": {},
      "spa": {
        "official": "Territorio Británico del Océano Índico",
        "common": "Territorio Británico del Océano Índico"
      },
      "area": 60,
      "demonyms": "indio",
      "population": 3000,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/io.png",
      "oatOfArms": {}
    },
    {
      "cca2": "LK",
      "currencies": {
        "LKR": {
          "name": "Rupia de Sri Lanka",
          "symbol": "Rs  රු"
        }
      },
      "capital": "Sri Jayawardenepura Kotte",
      "languages": {
        "sin": "cingalés",
        "tam": "Tamil"
      },
      "translations": {
        "spa": {
          "official": "República Democrática Socialista de Sri Lanka",
          "common": "Sri Lanka"
        }
      },
      "area": 65610,
      "demonyms": "de Sri Lanka",
      "population": 21919000,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/lk.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/lk.png"
    },
    {
      "cca2": "GS",
      "currencies": {
        "SHP": {
          "name": "Libra de Santa Elena",
          "symbol": "£"
        }
      },
      "capital": "King Edward Point",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "Georgia del Sur y las Islas Sandwich del Sur",
          "common": "Islas Georgias del Sur y Sandwich del Sur"
        }
      },
      "area": 3903,
      "demonyms": "Isleño de Sandwich del Sur de Georgia del Sur",
      "population": 30,
      "continent": "Antártida",
      "flag": "https://flagcdn.com/w320/gs.png",
      "oatOfArms": {}
    },
    {
      "cca2": "GG",
      "currencies": {
        "GBP": {
          "name": "Libra británica",
          "symbol": "£"
        },
        "GGP": {
          "name": "Libra de Guernesey",
          "symbol": "£"
        }
      },
      "capital": "St. Peter Port",
      "languages": {
        "eng": "inglés",
        "fra": "francés",
        "nfr": "guernesai"
      },
      "translations": {
        "spa": {
          "official": "Bailía de Guernsey",
          "common": "Guernsey"
        }
      },
      "area": 78,
      "demonyms": "Isleño del Canal",
      "population": 62999,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/gg.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/gg.png"
    },
    {
      "cca2": "VI",
      "currencies": {
        "USD": {
          "name": "dólar de los Estados Unidos",
          "symbol": "$"
        }
      },
      "capital": "Charlotte Amalie",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "Islas Vírgenes de los Estados Unidos",
          "common": "Islas Vírgenes de los Estados Unidos"
        }
      },
      "area": 347,
      "demonyms": "Islas Vírgenes",
      "population": 106290,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/vi.png",
      "oatOfArms": {}
    },
    {
      "cca2": "BH",
      "currencies": {
        "BHD": {
          "name": "dinar bahreiní",
          "symbol": ".د.ب"
        }
      },
      "capital": "Manama",
      "languages": {
        "ara": "árabe"
      },
      "translations": {
        "spa": {
          "official": "Reino de Bahrein",
          "common": "Bahrein"
        }
      },
      "area": 765,
      "demonyms": "bahreiní",
      "population": 1701583,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/bh.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/bh.png"
    },
    {
      "cca2": "GB",
      "currencies": {
        "GBP": {
          "name": "Libra británica",
          "symbol": "£"
        }
      },
      "capital": "London",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "Reino Unido de Gran Bretaña e Irlanda del Norte",
          "common": "Reino Unido"
        }
      },
      "area": 242900,
      "demonyms": "británico",
      "population": 67215293,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/gb.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/gb.png"
    },
    {
      "cca2": "ID",
      "currencies": {
        "IDR": {
          "name": "rupia indonesia",
          "symbol": "Rp"
        }
      },
      "capital": "Jakarta",
      "languages": {
        "ind": "indonesio"
      },
      "translations": {
        "spa": {
          "official": "República de Indonesia",
          "common": "Indonesia"
        }
      },
      "area": 1904569,
      "demonyms": "indonesio",
      "population": 273523621,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/id.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/id.png"
    },
    {
      "cca2": "JE",
      "currencies": {
        "GBP": {
          "name": "Libra británica",
          "symbol": "£"
        },
        "JEP": {
          "name": "Libra de Jersey",
          "symbol": "£"
        }
      },
      "capital": "Saint Helier",
      "languages": {
        "eng": "inglés",
        "fra": "francés",
        "nrf": "Jerriais"
      },
      "translations": {
        "spa": {
          "official": "Bailía de Jersey",
          "common": "Jersey"
        }
      },
      "area": 116,
      "demonyms": "Isleño del Canal",
      "population": 100800,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/je.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/je.png"
    },
    {
      "name": {
        "common": "Falkland Islands",
        "official": "Falkland Islands",
        "nativeName": {
          "eng": {
            "official": "Falkland Islands",
            "common": "Falkland Islands"
          }
        }
      },
      "cca2": "FK",
      "currencies": {
        "FKP": {
          "name": "Libra malvinense",
          "symbol": "£"
        }
      },
      "capital": "Stanley",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "islas Malvinas",
          "common": "Islas Malvinas"
        }
      },
      "area": 12173,
      "demonyms": "Isleño de las Malvinas",
      "population": 2563,
      "continent": "Sudamérica",
      "flag": "https://flagcdn.com/w320/fk.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/fk.png"
    },
    {
      "cca2": "BQ",
      "currencies": {
        "USD": {
          "name": "dólar de los Estados Unidos",
          "symbol": "$"
        }
      },
      "capital": "Kralendijk",
      "translations": {
        "spa": {
          "official": "Bonaire, San Eustaquio y Saba"
        }
      },
      "area": 328,
      "demonyms": {},
      "population": 25987,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/bq.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/bq.png"
    },
    {
      "cca2": "MZ",
      "currencies": {
        "MZN": {
          "name": "mozambique metical",
          "symbol": "MT"
        }
      },
      "capital": "Maputo",
      "languages": {
        "por": "portugués"
      },
      "translations": {
        "spa": {
          "official": "República de Mozambique",
          "common": "Mozambique"
        }
      },
      "area": 801590,
      "demonyms": "mozambiqueño",
      "population": 31255435,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/mz.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/mz.png"
    },
    {
      "cca2": "PF",
      "currencies": {
        "XPF": {
          "name": "franco CFP",
          "symbol": "₣"
        }
      },
      "capital": "Papeetē",
      "languages": {
        "fra": "francés"
      },
      "translations": {
        "spa": {
          "official": "Polinesia francés",
          "common": "Polinesia Francesa"
        }
      },
      "area": 4167,
      "demonyms": "polinesio francés",
      "population": 280904,
      "continent": "Oceanía",
      "flag": "https://flagcdn.com/w320/pf.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/pf.png"
    },
    {
      "cca2": "ER",
      "currencies": {
        "ERN": {
          "name": "participación de Eritrea",
          "symbol": "Nfk"
        }
      },
      "capital": "Asmara",
      "languages": {
        "ara": "árabe",
        "eng": "inglés",
        "tir": "tigrinya"
      },
      "translations": {
        "spa": {
          "official": "Estado de Eritrea",
          "common": "Eritrea"
        }
      },
      "area": 117600,
      "demonyms": "eritreo",
      "population": 5352000,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/er.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/er.png"
    },
    {
      "cca2": "MC",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Monaco",
      "languages": {
        "fra": "francés"
      },
      "translations": {
        "spa": {
          "official": "Principado de Mónaco",
          "common": "Mónaco"
        }
      },
      "area": 2.02,
      "demonyms": "monegasco",
      "population": 39244,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/mc.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/mc.png"
    },
    {
      "cca2": "BG",
      "currencies": {
        "BGN": {
          "name": "lev búlgaro",
          "symbol": "лв"
        }
      },
      "capital": "Sofia",
      "languages": {
        "bul": "búlgaro"
      },
      "translations": {
        "spa": {
          "official": "República de Bulgaria",
          "common": "Bulgaria"
        }
      },
      "area": 110879,
      "demonyms": "búlgaro",
      "population": 6927288,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/bg.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/bg.png"
    },
    {
      "cca2": "BL",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Gustavia",
      "languages": {
        "fra": "francés"
      },
      "translations": {
        "spa": {
          "official": "Colectividad de San Barthélemy",
          "common": "San Bartolomé"
        }
      },
      "area": 21,
      "demonyms": "Isleño de San Bartolomé",
      "population": 4255,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/bl.png",
      "oatOfArms": {}
    },
    {
      "cca2": "LC",
      "currencies": {},
      "capital": "Castries",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "Santa Lucía",
          "common": "Santa Lucía"
        }
      },
      "area": 616,
      "demonyms": "Santa Lucía",
      "population": 183629,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/lc.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/lc.png"
    },
    {
      "cca2": "PA",
      "currencies": {
        "PAB": {
          "name": "balboa panameña",
          "symbol": "B/."
        },
        "USD": {
          "name": "dólar de los Estados Unidos",
          "symbol": "$"
        }
      },
      "capital": "Panama City",
      "languages": {
        "spa": "español"
      },
      "translations": {
        "spa": {
          "official": "República de Panamá",
          "common": "Panamá"
        }
      },
      "area": 75417,
      "demonyms": "panameño",
      "population": 4314768,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/pa.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/pa.png"
    },
    {
      "cca2": "US",
      "currencies": {
        "USD": {
          "name": "dólar de los Estados Unidos",
          "symbol": "$"
        }
      },
      "capital": "Washington, D.C.",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "Estados Unidos de América",
          "common": "Estados Unidos"
        }
      },
      "area": 9372610,
      "demonyms": "Americano",
      "population": 329484123,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/us.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/us.png"
    },
    {
      "cca2": "GA",
      "currencies": {
        "XAF": {
          "name": "franco CFA centroafricano",
          "symbol": "Fr"
        }
      },
      "capital": "Libreville",
      "languages": {
        "fra": "francés"
      },
      "translations": {
        "spa": {
          "official": "República de Gabón",
          "common": "Gabón"
        }
      },
      "area": 267668,
      "demonyms": "gabonés",
      "population": 2225728,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/ga.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ga.png"
    },
    {
      "cca2": "PE",
      "currencies": {
        "PEN": {
          "name": "sol peruano",
          "symbol": "S/ "
        }
      },
      "capital": "Lima",
      "languages": {
        "aym": "Aymara",
        "que": "Quechua",
        "spa": "español"
      },
      "translations": {
        "spa": {
          "official": "República de Perú",
          "common": "Perú"
        }
      },
      "area": 1285216,
      "demonyms": "peruano",
      "population": 32971846,
      "continent": "Sudamérica",
      "flag": "https://flagcdn.com/w320/pe.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/pe.png"
    },
    {
      "cca2": "PY",
      "currencies": {
        "PYG": {
          "name": "guaraní paraguayo",
          "symbol": "₲"
        }
      },
      "capital": "Asunción",
      "languages": {
        "grn": "Guaraní",
        "spa": "español"
      },
      "translations": {
        "spa": {
          "official": "República de Paraguay",
          "common": "Paraguay"
        }
      },
      "area": 406752,
      "demonyms": "paraguayo",
      "population": 7132530,
      "continent": "Sudamérica",
      "flag": "https://flagcdn.com/w320/py.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/py.png"
    },
    {
      "cca2": "NP",
      "currencies": {
        "NPR": {
          "name": "rupia nepalí",
          "symbol": "₨"
        }
      },
      "capital": "Kathmandu",
      "languages": {
        "nep": "nepalí"
      },
      "translations": {
        "spa": {
          "official": "República Democrática Federal de Nepal",
          "common": "Nepal"
        }
      },
      "area": 147181,
      "demonyms": "nepalés",
      "population": 29136808,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/np.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/np.png"
    },
    {
      "cca2": "KH",
      "currencies": {
        "KHR": {
          "name": "Ferrocarril camboyano",
          "symbol": "៛"
        },
        "USD": {
          "name": "dólar de los Estados Unidos",
          "symbol": "$"
        }
      },
      "capital": "Phnom Penh",
      "languages": {
        "khm": "jemer"
      },
      "translations": {
        "spa": {
          "official": "Reino de Camboya",
          "common": "Camboya"
        }
      },
      "area": 181035,
      "demonyms": "camboyano",
      "population": 16718971,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/kh.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/kh.png"
    },
    {
      "cca2": "AW",
      "currencies": {
        "AWG": {
          "name": "florín de Aruba",
          "symbol": "ƒ"
        }
      },
      "capital": "Oranjestad",
      "translations": {
        "spa": {
          "official": "Aruba",
          "common": "Aruba"
        }
      },
      "area": 180,
      "demonyms": "arubeño",
      "population": 106766,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/aw.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/aw.png"
    },
    {
      "cca2": "TG",
      "currencies": {
        "XOF": {
          "name": "Franco CFA de África Occidental",
          "symbol": "Fr"
        }
      },
      "capital": "Lomé",
      "languages": {
        "fra": "francés"
      },
      "translations": {
        "spa": {
          "official": "República de Togo",
          "common": "Togo"
        }
      },
      "area": 56785,
      "demonyms": "togolés",
      "population": 8278737,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/tg.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/tg.png"
    },
    {
      "cca2": "SE",
      "currencies": {
        "SEK": {
          "name": "Corona sueca",
          "symbol": "kr"
        }
      },
      "capital": "Stockholm",
      "languages": {
        "swe": "sueco"
      },
      "translations": {
        "spa": {
          "official": "Reino de Suecia",
          "common": "Suecia"
        }
      },
      "area": 450295,
      "demonyms": "sueco",
      "population": 10353442,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/se.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/se.png"
    },
    {
      "cca2": "UY",
      "currencies": {
        "UYU": {
          "name": "peso uruguayo",
          "symbol": "$"
        }
      },
      "capital": "Montevideo",
      "languages": {
        "spa": "español"
      },
      "translations": {
        "spa": {
          "official": "República Oriental del Uruguay",
          "common": "Uruguay"
        }
      },
      "area": 181034,
      "demonyms": "uruguayo",
      "population": 3473727,
      "continent": "Sudamérica",
      "flag": "https://flagcdn.com/w320/uy.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/uy.png"
    },
    {
      "cca2": "CN",
      "currencies": {
        "CNY": {
          "name": "yuan chino",
          "symbol": "¥"
        }
      },
      "capital": "Beijing",
      "languages": {
        "zho": "chino"
      },
      "translations": {
        "spa": {
          "official": "República Popular de China",
          "common": "China"
        }
      },
      "area": 9706961,
      "demonyms": "chino",
      "population": 1402112000,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/cn.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/cn.png"
    },
    {
      "cca2": "GW",
      "currencies": {
        "XOF": {
          "name": "Franco CFA de África Occidental",
          "symbol": "Fr"
        }
      },
      "capital": "Bissau",
      "languages": {
        "por": "portugués",
        "pov": "Upper Guinea Creole"
      },
      "translations": {
        "spa": {
          "official": "República de Guinea-Bissau",
          "common": "Guinea-Bisáu"
        }
      },
      "area": 36125,
      "demonyms": "guinea-bissauana",
      "population": 1967998,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/gw.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/gw.png"
    },
    {
      "cca2": "CZ",
      "currencies": {
        "CZK": {
          "name": "corona checa",
          "symbol": "Kč"
        }
      },
      "capital": "Prague",
      "languages": {
        "ces": "Checo",
        "slk": "Slovak"
      },
      "translations": {
        "spa": {
          "official": "República Checa",
          "common": "Chequia"
        }
      },
      "area": 78865,
      "demonyms": "checo",
      "population": 10698896,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/cz.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/cz.png"
    },
    {
      "cca2": "VU",
      "currencies": {
        "VUV": {
          "name": "Gente de Vanuatu",
          "symbol": "Vt"
        }
      },
      "capital": "Port Vila",
      "languages": {
        "bis": "bislama",
        "eng": "inglés",
        "fra": "francés"
      },
      "translations": {
        "spa": {
          "official": "República de Vanuatu",
          "common": "Vanuatu"
        }
      },
      "area": 12189,
      "demonyms": "Ni-Vanuatu",
      "population": 307150,
      "continent": "Oceanía",
      "flag": "https://flagcdn.com/w320/vu.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/vu.png"
    },
    {
      "cca2": "AO",
      "currencies": {
        "AOA": {
          "name": "nieve angolana",
          "symbol": "Kz"
        }
      },
      "capital": "Luanda",
      "languages": {
        "por": "portugués"
      },
      "translations": {
        "spa": {
          "official": "República de Angola",
          "common": "Angola"
        }
      },
      "area": 1246700,
      "demonyms": "angoleño",
      "population": 32866268,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/ao.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ao.png"
    },
    {
      "cca2": "KI",
      "currencies": {
        "AUD": {
          "name": "dólar australiano",
          "symbol": "$"
        },
        "KID": {
          "name": "dólar de Kiribati",
          "symbol": "$"
        }
      },
      "capital": "South Tarawa",
      "languages": {
        "eng": "inglés",
        "gil": "Giblartareño"
      },
      "translations": {
        "spa": {
          "official": "República Independiente y Soberano de Kiribati",
          "common": "Kiribati"
        }
      },
      "area": 811,
      "demonyms": "I-Kiribati",
      "population": 119446,
      "continent": "Oceanía",
      "flag": "https://flagcdn.com/w320/ki.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ki.png"
    },
    {
      "cca2": "FO",
      "currencies": {
        "DKK": {
          "name": "corona danesa",
          "symbol": "kr"
        },
        "FOK": {
          "name": "corona feroesa",
          "symbol": "kr"
        }
      },
      "capital": "Tórshavn",
      "languages": {
        "dan": "Danés",
        "fao": "Faroese"
      },
      "translations": {
        "spa": {
          "official": "Islas Feroe",
          "common": "Islas Faroe"
        }
      },
      "area": 1393,
      "demonyms": "feroés",
      "population": 48865,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/fo.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/fo.png"
    },
    {
      "cca2": "CA",
      "currencies": {
        "CAD": {
          "name": "Dolar canadiense",
          "symbol": "$"
        }
      },
      "capital": "Ottawa",
      "languages": {
        "eng": "inglés",
        "fra": "francés"
      },
      "translations": {
        "spa": {
          "official": "Canadá",
          "common": "Canadá"
        }
      },
      "area": 9984670,
      "demonyms": "canadiense",
      "population": 38005238,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/ca.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ca.png"
    },
    {
      "cca2": "BV",
      "languages": {
        "nor": "noruego"
      },
      "translations": {
        "spa": {
          "official": "Isla Bouvet",
          "common": "Isla Bouvet"
        }
      },
      "area": 49,
      "population": 0,
      "continent": "Antártida",
      "flag": "https://flagcdn.com/w320/bv.png",
      "oatOfArms": {}
    },
    {
      "cca2": "TO",
      "currencies": {
        "TOP": {
          "name": "Tonga paʻanga",
          "symbol": "T$"
        }
      },
      "capital": "Nuku'alofa",
      "languages": {
        "eng": "inglés",
        "ton": "tongano"
      },
      "translations": {
        "spa": {
          "official": "Reino de Tonga",
          "common": "Tonga"
        }
      },
      "area": 747,
      "demonyms": "tongano",
      "population": 105697,
      "continent": "Oceanía",
      "flag": "https://flagcdn.com/w320/to.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/to.png"
    },
    {
      "cca2": "YT",
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": "Mamoudzou",
      "languages": {
        "fra": "francés"
      },
      "translations": {
        "spa": {
          "official": "Departamento de Mayotte",
          "common": "Mayotte"
        }
      },
      "area": 374,
      "demonyms": "Mahoran",
      "population": 226915,
      "continent": "África",
      "flag": "https://flagcdn.com/w320/yt.png",
      "oatOfArms": {}
    },
    {
      "cca2": "PH",
      "currencies": {
        "PHP": {
          "name": "peso filipino",
          "symbol": "₱"
        }
      },
      "capital": "Manila",
      "languages": {
        "eng": "inglés",
        "fil": "Filipino"
      },
      "translations": {
        "spa": {
          "official": "República de las Filipinas",
          "common": "Filipinas"
        }
      },
      "area": 342353,
      "demonyms": "filipino",
      "population": 109581085,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/ph.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ph.png"
    },
    {
      "cca2": "OM",
      "currencies": {
        "OMR": {
          "name": "Rial omaní",
          "symbol": "ر.ع."
        }
      },
      "capital": "Muscat",
      "languages": {
        "ara": "árabe"
      },
      "translations": {
        "spa": {
          "official": "Sultanato de Omán",
          "common": "Omán"
        }
      },
      "area": 309500,
      "demonyms": "omaní",
      "population": 5106622,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/om.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/om.png"
    },
    {
      "cca2": "UM",
      "currencies": {
        "USD": {
          "name": "dólar de los Estados Unidos",
          "symbol": "$"
        }
      },
      "capital": "Washington DC",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "Estados Unidos Islas menores alejadas de",
          "common": "Islas Ultramarinas Menores de Estados Unidos"
        }
      },
      "area": 34.2,
      "demonyms": "isleño americano",
      "population": 300,
      "continent": "Oceanía",
      "flag": "https://flagcdn.com/w320/um.png",
      "oatOfArms": {}
    },
    {
      "cca2": "TW",
      "currencies": {
        "TWD": {
          "name": "Nuevo dólar taiwanés",
          "symbol": "$"
        }
      },
      "capital": "Taipei",
      "languages": {
        "zho": "chino"
      },
      "translations": {
        "spa": {
          "official": "República de China en Taiwán",
          "common": "Taiwán"
        }
      },
      "area": 36193,
      "demonyms": "taiwanés",
      "population": 23503349,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/tw.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/tw.png"
    },
    {
      "cca2": "RU",
      "currencies": {
        "RUB": {
          "name": "Rublo ruso",
          "symbol": "₽"
        }
      },
      "capital": "Moscow",
      "languages": {
        "rus": "ruso"
      },
      "translations": {
        "spa": {
          "official": "Federación de Rusia",
          "common": "Rusia"
        }
      },
      "area": 17098242,
      "demonyms": "ruso",
      "population": 144104080,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/ru.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ru.png"
    },
    {
      "cca2": "BO",
      "currencies": {
        "BOB": {
          "name": "boliviano boliviano",
          "symbol": "Bs."
        }
      },
      "capital": "Sucre",
      "languages": {
        "aym": "Aymara",
        "grn": "Guaraní",
        "que": "Quechua",
        "spa": "español"
      },
      "translations": {
        "spa": {
          "official": "Estado Plurinacional de Bolivia",
          "common": "Bolivia"
        }
      },
      "area": 1098581,
      "demonyms": "boliviano",
      "population": 11673029,
      "continent": "Sudamérica",
      "flag": "https://flagcdn.com/w320/bo.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/bo.png"
    },
    {
      "cca2": "DK",
      "currencies": {
        "DKK": {
          "name": "corona danesa",
          "symbol": "kr"
        }
      },
      "capital": "Copenhagen",
      "languages": {
        "dan": "danés"
      },
      "translations": {
        "spa": {
          "official": "Reino de Dinamarca",
          "common": "Dinamarca"
        }
      },
      "area": 43094,
      "demonyms": "danés",
      "population": 5831404,
      "continent": "Europa",
      "flag": "https://flagcdn.com/w320/dk.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/dk.png"
    },
    {
      "cca2": "AS",
      "currencies": {
        "USD": {
          "name": "dólar de los Estados Unidos",
          "symbol": "$"
        }
      },
      "capital": "Pago Pago",
      "languages": {
        "eng": "inglés",
        "smo": "samoano"
      },
      "translations": {
        "spa": {
          "official": "Samoa Americana",
          "common": "Samoa Americana"
        }
      },
      "area": 199,
      "demonyms": "samoanoo americano",
      "population": 55197,
      "continent": "Oceanía",
      "flag": "https://flagcdn.com/w320/as.png",
      "oatOfArms": {}
    },
    {
      "cca2": "AI",
      "currencies": {},
      "capital": "The Valley",
      "languages": {
        "eng": "inglés"
      },
      "translations": {
        "spa": {
          "official": "Anguila",
          "common": "Anguilla"
        }
      },
      "area": 91,
      "demonyms": "anguila",
      "population": 13452,
      "continent": "América del norte",
      "flag": "https://flagcdn.com/w320/ai.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/ai.png"
    },
    {
      "cca2": "KG",
      "currencies": {
        "KGS": {
          "name": "Kirguistán como",
          "symbol": "с"
        }
      },
      "capital": "Bishkek",
      "languages": {
        "kir": "kirguís",
        "rus": "ruso"
      },
      "translations": {
        "spa": {
          "official": "República Kirguisa",
          "common": "Kirguizistán"
        }
      },
      "area": 199951,
      "demonyms": "kirguís",
      "population": 6591600,
      "continent": "Asia",
      "flag": "https://flagcdn.com/w320/kg.png",
      "coatOfArms": "https://mainfacts.com/media/images/coats_of_arms/kg.png"
    }
  ]
}

