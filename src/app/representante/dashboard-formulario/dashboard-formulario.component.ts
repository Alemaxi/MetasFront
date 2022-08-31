import { Component, OnInit } from '@angular/core';

import { ITabelaCampos } from '../../../liguagens/Linguagem-modulos/home-linguagem-entities'
import { AppStateService } from '../../services/app-state/app-state.service';
import { DashboardService } from '../../services/Dashboard/dashboard.service';
import { GenericDashboard } from '../../shared/components/Generics/generic-dashboard';

@Component({
  selector: 'app-dashboard-formulario',
  templateUrl: './dashboard-formulario.component.html',
  styleUrls: ['./dashboard-formulario.component.scss']
})
export class DashboardFormularioComponent extends GenericDashboard implements OnInit {

  constructor(
    public dashboard: DashboardService,
    protected appState: AppStateService
  ) { super(dashboard,appState); }

  ngOnInit(): void {
    this.runInOnInit();
  }

}
