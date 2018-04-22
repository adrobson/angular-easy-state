import { Component, OnInit } from '@angular/core';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-child-reporting',
  templateUrl: './child-reporting.component.html',
  styleUrls: ['./child-reporting.component.css']
})
export class ChildReportingComponent implements OnInit {

  constructor(public AppState:AppStateService) { }

  ngOnInit() {
  }

}
