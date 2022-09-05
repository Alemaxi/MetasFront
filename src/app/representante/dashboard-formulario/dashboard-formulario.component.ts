import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { AppStateService } from '../../services/app-state/app-state.service';
import { DashboardService } from '../../services/Dashboard/dashboard.service';
import { GenericDashboard } from '../../shared/components/Generics/generic-dashboard';

import { FormularioIndicadorEntity } from '../../shared/Entities/Dashboard/representante/formulario-state-indicador';


@Component({
  selector: 'app-dashboard-formulario',
  templateUrl: './dashboard-formulario.component.html',
  styleUrls: ['./dashboard-formulario.component.scss']
})
export class DashboardFormularioComponent extends GenericDashboard implements OnInit {

  formState: FormularioIndicadorEntity = new FormularioIndicadorEntity();

  formStateSubject: Subject<FormularioIndicadorEntity> = new Subject<FormularioIndicadorEntity>();

  constructor(
    public dashboard: DashboardService,
    protected appState: AppStateService
  ) { super(dashboard,appState); }

  ngOnInit(): void {
    this.runInOnInit();

    this.dashboard.GetFormulariosRepresentante().subscribe(x => {
      this.formState.indicadores = x;
      this.formStateSubject.next(this.formState);
    })
  }

  override MesNavegado(mes: number): void {
    this.selectedMes = mes;

        if (this.selectedMes != 12) {
            this.showMes = true;
            this.dashboard.GetFormulariosRepresentante().subscribe(x => {
                this.formState.indicadores = x;
                this.formStateSubject.next(this.formState);
            });
        }
        else {

            this.dashboard.GetFaltas().subscribe(x => {
                this.faltas = x;
            });

            this.dashboard.GetResultados().subscribe(x => {
                this.resultadosList = x;
            });

            this.showMes = false;
        }
  }

}
