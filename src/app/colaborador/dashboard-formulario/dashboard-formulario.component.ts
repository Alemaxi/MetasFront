import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { DashboardService } from '../../services/Dashboard/dashboard.service';
import { AppStateService } from '../../services/app-state/app-state.service';
import { GenericDashboard } from '../../shared/components/Generics/generic-dashboard';


@Component({
  selector: 'app-dashboard-formulario',
  templateUrl: './dashboard-formulario.component.html',
  styleUrls: ['./dashboard-formulario.component.scss']
})
export class DashboardFormularioComponent extends GenericDashboard implements OnInit {


  
  constructor(
    public dashboard: DashboardService,
    public appState: AppStateService
  ) { super(dashboard,appState) }

  ngOnInit(): void {

    this.dashboard.GetFormularios().subscribe(x => {
      this.formularioList = x;
    });

    this.appState.GetAppLinguagem().subscribe(x=> {
      this.dashboardLinguagem = x.main.home;
    })
  }
}
