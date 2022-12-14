import { Component, Input, OnInit } from '@angular/core';

import { FaltaEntity } from '../../../Entities/Dashboard/falta-entity';
import { ITabelaFalta } from '../../../../../liguagens/Linguagem-modulos/home-linguagem-entities';

@Component({
  selector: 'app-faltahome-table',
  templateUrl: './faltahome-table.component.html',
  styleUrls: ['./faltahome-table.component.scss']
})
export class FaltahomeTableComponent implements OnInit {

  constructor() { }

  @Input() faltas: FaltaEntity[] = [];
  @Input() faltasLinguagem: ITabelaFalta | undefined;

  ngOnInit(): void {
  }
}
