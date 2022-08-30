import { Component, OnInit } from '@angular/core';

import { ITabelaCampos } from '../../../liguagens/Linguagem-modulos/home-linguagem-entities'
import { AppStateService } from '../../services/app-state/app-state.service';

@Component({
  selector: 'app-dashboard-formulario',
  templateUrl: './dashboard-formulario.component.html',
  styleUrls: ['./dashboard-formulario.component.scss']
})
export class DashboardFormularioComponent implements OnInit {

  indicadoresLinguagem!: ITabelaCampos;

  constructor(
    protected appState: AppStateService
  ) { }

  ngOnInit(): void {
    this.appState.GetAppLinguagem().subscribe( x => {
      this.indicadoresLinguagem = x.main.home.tabela;
    })
  }

}
