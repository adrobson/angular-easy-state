import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';﻿

import { AppComponent } from './app.component';
import { DataEntryComponent } from './components/data-entry/data-entry.component';
import { ReportingComponent } from './components/reporting/reporting.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildReportingComponent } from './components/child-reporting/child-reporting.component';

import { AppStateService } from './services/app-state.service';

import { InitialDataService } from  './services/initial-data.service';

import { ReportDataService } from './services/report-data.service';﻿

@NgModule({
  declarations: [
    AppComponent,
    DataEntryComponent,
    ReportingComponent,
    ParentComponent,
    ChildReportingComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [AppStateService, ReportDataService, InitialDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
