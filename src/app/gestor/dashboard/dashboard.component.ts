import { Component, OnInit } from '@angular/core';

import { GenericDashboard } from '../../shared/components/Generics/generic-dashboard';

import { DashboardService } from '../../services/Dashboard/dashboard.service';
import { AppStateService } from '../../services/app-state/app-state.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends GenericDashboard implements OnInit {

  constructor(
    protected dashboard:DashboardService,
    protected appState:AppStateService
    )
     {
    super(dashboard,appState)
   }

  ngOnInit(): void {
    this.runInOnInit();
  }

}
