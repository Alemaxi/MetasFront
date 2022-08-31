import { Component, Input, OnInit } from '@angular/core';

import { DashboardService } from '../../../../services/Dashboard/dashboard.service';
import { IRepresentanteIndicadorEntity } from '../../../Entities/Dashboard/representante-indicador-entity';
import { ITabelaCampos } from '../../../../../liguagens/Linguagem-modulos/home-linguagem-entities';
import { edicaoTabelaEnum } from '../../../Enum/edicao-tabela-enum';

import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-representante-indicadores-table',
  templateUrl: './representante-indicadores-table.component.html',
  styleUrls: ['./representante-indicadores-table.component.scss']
})
export class RepresentanteIndicadoresTableComponent implements OnInit {

  @Input() itemList: IRepresentanteIndicadorEntity[] = [];
  @Input() tabelaLinguagem: ITabelaCampos | undefined;
  @Input() showSelect: boolean = true;
  @Input() edicao: edicaoTabelaEnum = 1;


  constructor(
    protected dashboard:DashboardService
  ) { }

  ngOnInit(): void {
    this.dashboard.GetFormulariosRepresentante().subscribe(x => {
      this.itemList = x;
    })
  }

  GetFrequenciaTotal(): number {
    let result: number = 0;

    this.itemList.forEach((x: IRepresentanteIndicadorEntity) => {
      result += x.peso;
    })

    return result;
  }

  Change(item: MatCheckboxChange): void{
    if(item.checked){
      this.itemList.forEach( x => {
        x.selected = true;
      })
    }
  }

  ChangeRow(item: IRepresentanteIndicadorEntity){
    console.log(item);
  }
}
