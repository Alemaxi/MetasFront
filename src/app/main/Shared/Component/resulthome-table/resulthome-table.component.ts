import { Component, Input, OnInit } from '@angular/core';

import { IResultadoEntity } from '../../Entities/dashboard/resultado-entity';

@Component({
  selector: 'app-resulthome-table',
  templateUrl: './resulthome-table.component.html',
  styleUrls: ['./resulthome-table.component.scss']
})
export class ResulthomeTableComponent implements OnInit {

  @Input() resultados: IResultadoEntity[] | undefined;

  constructor() { 
    this.resultados = [
      {periodo:'um ai', resultado:10,titulo:'mocked'},
      {periodo:'um ai', resultado:10,titulo:'mocked'},
      {periodo:'um ai', resultado:10,titulo:'mocked'},
      {periodo:'um ai', resultado:10,titulo:'mocked'},
      {periodo:'um ai', resultado:10,titulo:'mocked'},
      {periodo:'um ai', resultado:10,titulo:'mocked'},
    ];
  }



  ngOnInit(): void {
  }

}
