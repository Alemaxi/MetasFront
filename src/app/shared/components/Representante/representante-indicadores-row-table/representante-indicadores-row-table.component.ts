import { Component, OnInit, Input, DoCheck } from '@angular/core';

import { IRepresentanteIndicadorEntity } from '../../../Entities/Dashboard/representante-indicador-entity';

@Component({
  selector: 'app-representante-indicadores-row-table',
  templateUrl: './representante-indicadores-row-table.component.html',
  styleUrls: ['./representante-indicadores-row-table.component.scss']
})
export class RepresentanteIndicadoresRowTableComponent implements OnInit {

  @Input() item: IRepresentanteIndicadorEntity | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log(this.item);
  }

  ngDoCheck(): void{
  }

}
