import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AppStateService } from '../../../services/app-state/app-state.service';
import { DashboardService } from '../../../services/Dashboard/dashboard.service';
import { IDashboardStatus } from '../../../main/Shared/Entities/Dashboard/dashboard-celula-status';
import { IHome } from '../../../../liguagens/Linguagem-modulos/home-linguagem-entities';

@Component({
  selector: 'app-dashboard-formulario-layout',
  templateUrl: './dashboard-formulario-layout.component.html',
  styleUrls: ['./dashboard-formulario-layout.component.scss']
})
export class DashboardFormularioLayoutComponent implements OnInit {

  @Output() mesNavegado: EventEmitter<number> = new EventEmitter<number>();

  @Input() public dashboardLinguagem: IHome | undefined;

  status: IDashboardStatus = {
    dataAtualizacao: new Date('1994/06/30'),
    status:2
  }

  constructor(
    protected appState: AppStateService,
    public home: DashboardService,
  ) { 
    
  }

  MesNavegado(num: number):void {
    this.mesNavegado.emit(num);
  }

  ngOnInit(): void {
    this.home.GetDashboardStatus().subscribe(x => {
      this.status = x;
    });
  }

}
