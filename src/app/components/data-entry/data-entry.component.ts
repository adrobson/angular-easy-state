import { Component, OnInit } from '@angular/core';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {

  constructor(public AppState:AppStateService) { }

  ngOnInit() {
  }

  public onChange(){

    this.AppState.CountrySelectionChanged();

  }

  public getData(){

    this.AppState.GetReportData();

  }
}
