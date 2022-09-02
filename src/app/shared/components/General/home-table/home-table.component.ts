import { Component, Input, OnInit } from '@angular/core';

import { IndicadorEntity } from '../../../Entities/Dashboard/indicador-entity';
import { ITabelaCampos } from '../../../../../liguagens/Linguagem-modulos/home-linguagem-entities';

@Component({
  selector: 'app-home-table',
  templateUrl: './home-table.component.html',
  styleUrls: ['./home-table.component.scss']
})
export class HomeTableComponent implements OnInit {

  @Input() itemList: IndicadorEntity[] = [];
  @Input() tabelaLinguagem: ITabelaCampos | undefined;

  constructor() {   
  }

  html: string = '<h1>oi</h1>';

  ngOnInit(): void {
  }

  GetFrequenciaTotal():number{
    let result: number = 0;

    this.itemList.forEach( (x:IndicadorEntity) =>{
      result += x.peso as number;
    })

    return result;
  }

}
