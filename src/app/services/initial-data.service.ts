import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Country } from '../data-classes/country';



@Injectable()

export class InitialDataService {

  constructor() { }



  public GetCountryList():Observable<Country[]>{

    var countryList:Country[] = [

      {id:1, name: "France", multiplier: 1000},

      {id:2, name: "Germany", multiplier: 5000},

      {id:3, name: "Spain", multiplier: 7500}

    ];

    return Observable.of(countryList);

  }

}


