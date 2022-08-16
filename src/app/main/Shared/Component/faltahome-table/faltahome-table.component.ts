import { Component, Input, OnInit } from '@angular/core';

import { FaltaEntity } from '../../Entities/dashboard/falta-entity';

@Component({
  selector: 'app-faltahome-table',
  templateUrl: './faltahome-table.component.html',
  styleUrls: ['./faltahome-table.component.scss']
})
export class FaltahomeTableComponent implements OnInit {

  constructor() { }

  @Input() faltas: FaltaEntity[] = [
    {nomeAusencia:"ausente",dataInicio:new Date(), dataFim: new Date()},
    {nomeAusencia:"ausente",dataInicio:new Date(), dataFim: new Date()},
    {nomeAusencia:"ausente",dataInicio:new Date(), dataFim: new Date()},
    {nomeAusencia:"ausente",dataInicio:new Date(), dataFim: new Date()},
  ]

  ngOnInit(): void {
  }

}
