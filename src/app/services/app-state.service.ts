import { Injectable } from '@angular/core';

import { InitialDataService } from './initial-data.service';

import { ReportDataService } from './report-data.service';

import { Country } from '../data-classes/country';
import { InputData } from '../data-classes/input-data';
import { ReportData } from '../data-classes/report-data';


@Injectable()

export class AppStateService {

SelectedCountryId:number;

SelectedCountry:Country; 

CountryList:Country[];

ModelInput:InputData = { ObsDate:new Date(2018,3,1), Input1:0 };

ReportData:ReportData[];﻿

  constructor(private initialDataService:InitialDataService, private reportDataService:ReportDataService) { 

    this.initialDataService.GetCountryList().subscribe(

      x => this.CountryList = x

    );  

  }

  public CountrySelectionChanged():void{

    this.SelectedCountry = this.CountryList.find(x => x.id == this.SelectedCountryId);
    this.ModelInput.Input1 = this.SelectedCountry.multiplier;
  }

  public GetReportData():void{

    this.reportDataService.GetReportData(this.ModelInput).subscribe(

        x => this.ReportData = x

    );

  }

You 
}


