import { Injectable } from '@angular/core';
import { InputData } from '../data-classes/input-data';
import { ReportData } from '../data-classes/report-data';
import { Observable } from 'rxjs';

@Injectable()
export class ReportDataService {

  constructor() { }

  public GetReportData(inputData:InputData):Observable<ReportData[]>{

    var reportData:ReportData[] = [

      { ObsDate:inputData.ObsDate, Calc1:inputData.Input1*1000, Calc2:inputData.Input1*200 },

      { ObsDate:inputData.ObsDate, Calc1:inputData.Input1*1000, Calc2:inputData.Input1*200 },

      { ObsDate:inputData.ObsDate, Calc1:inputData.Input1*1000, Calc2:inputData.Input1*200 },

      { ObsDate:inputData.ObsDate, Calc1:inputData.Input1*1000, Calc2:inputData.Input1*200 }

    ];

    return Observable.of(reportData);

  }﻿

}
