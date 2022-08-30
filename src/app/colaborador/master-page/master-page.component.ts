import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { trigger, style, state, animate, transition } from '@angular/animations';

import { MatDialog } from '@angular/material/dialog';

import { AppStateService } from '../../services/app-state/app-state.service';
import { MasterPageService } from '../../services/master-page/master-page.service';
import { IMasterPage } from '../../../liguagens/Linguagem-modulos/master-page-linguagem-entities';
import { CicloEntity } from '../../main/Shared/Entities/Master-Page/ciclo-entity';
import { TreinamentoDialogComponent } from '../../main/treinamento-dialog/treinamento-dialog.component';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.scss'],
  animations: [
    trigger("MainRouter",[
      transition("state1 <=> state2",[
        animate('0s ease',style({
          opacity:0
          })
        ),
        animate('0.5s ease', style({
          opacity:1
          })
        )
      ])
    ])
  ]
})
export class MasterPageComponent implements OnInit {

  constructor(
    protected appState: AppStateService,
    protected masterPage: MasterPageService,
    protected dialog: MatDialog,
    protected contexts: ChildrenOutletContexts
  ) { }


  masterPageLinguagem: IMasterPage | undefined;
  ciclo: CicloEntity | undefined;
  open: boolean = true;
  transicaoState: string = 'state1';
  actualComponent: string | undefined = '';

  ngOnInit(): void {

    this.appState.GetAppLinguagem().subscribe(x => {
      this.masterPageLinguagem = x.main.masterpage;
    })
    this.masterPage.GetCiclos().subscribe(x => {
      this.ciclo = x;
    })

    this.dialog.open(TreinamentoDialogComponent,
      {
        minWidth: 700,
        data: this.appState.GetAppLinguagem(),
      });
  }

  MudarLingua(): void {
    this.appState.MudarLinguagem();
    console.log('oi')
    
    this.Transicao();
  }

  ChangeState(): void {
    this.open = !this.open;
  }

  LimparNotificacoes(): void {

  }

  CicloSelecionado(x: Event): void {
    let htmlElement = x.target as HTMLSelectElement;

    this.appState.SetCiclo(Number.parseInt(htmlElement.value));
  }

  Transicao(): string {
    let auxActual: string | undefined = this.contexts.getContext('primary')?.route?.snapshot.component?.name;

    console.log(auxActual);
    console.log(this.actualComponent);

    if(auxActual != this.actualComponent){
      this.actualComponent = auxActual;
      this.transicaoState == 'state1'?this.transicaoState = 'state2':this.transicaoState = 'state1';
    }

    return this.transicaoState;
  }

  ToggleSidenav():void {
    document.getElementById('toggle')?.click();
  }

}
