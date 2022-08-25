import { Component, OnInit } from '@angular/core';

import { AppStateService } from '../../services/app-state/app-state.service';
import { IMasterPageService } from '../../services/master-page/master-page.service';
import { IMasterPage } from '../../../liguagens/Linguagem-modulos/master-page-linguagem-entities';
import { CicloEntity } from '../Shared/Entities/Master-Page/ciclo-entity';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.scss']
})
export class MasterPageComponent implements OnInit {

  constructor(
    protected appState: AppStateService,
    protected masterPage: IMasterPageService
  ) { }


  masterPageLinguagem: IMasterPage | undefined;
  ciclo: CicloEntity |undefined;
  open:boolean = true;

  ngOnInit(): void {

    this.masterPageLinguagem = this.appState.GetAppLinguagem().main.masterpage;
    this.masterPage.GetCiclos().subscribe( x => {
      this.ciclo = x;
    })

  }

  ToggleMatSidenav(){
  }

  ChangeState():void{
    this.open = !this.open;
  }

  LimparNotificacoes():void{
    
  }

  CicloSelecionado(x: Event): void{
    let htmlElement = x.target as HTMLSelectElement;

    this.appState.SetCiclo(Number.parseInt(htmlElement.value));
  }

}
