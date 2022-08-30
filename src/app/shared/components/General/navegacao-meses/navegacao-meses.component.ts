import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AppStateService } from '../../../../services/app-state/app-state.service';
import { INavegacaoMeses } from '../../../../../liguagens/Linguagem-modulos/home-linguagem-entities'
import { DashboardService } from '../../../../services/Dashboard/dashboard.service';
import { IIndicadorEntity } from '../../../../main/Shared/Entities/Dashboard/indicador-entity';
import { IResultadoEntity } from '../../../../main/Shared/Entities/Dashboard/resultado-entity';
import { IFaltasEntity } from '../../../../main/Shared/Entities/Dashboard/falta-entity';

enum MesEnum{
  jan, fev,mar,abr,mai,jun,jul,ago,set,out,nov,dec,res
}

@Component({
  selector: 'app-navegacao-meses',
  templateUrl: './navegacao-meses.component.html',
  styleUrls: ['./navegacao-meses.component.scss']
})
export class NavegacaoMesesComponent implements OnInit {

  selectedMes: MesEnum = MesEnum.jan;

  @Input() navegacaoMesesLinguagem: INavegacaoMeses | undefined;
  @Output() mesNavegado: EventEmitter<number> = new EventEmitter();

  constructor(
    protected appState: AppStateService,
    public home: DashboardService,
  ) { }

  ngOnInit(): void {
  }

  CheckMes(mes: MesEnum): boolean{
    return this.selectedMes == mes;
  }

  ChangeMes(mes: MesEnum): void{
    this.selectedMes = mes;

    this.mesNavegado.emit(mes);
  }

}
