import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { trigger, style, state, animate, transition } from '@angular/animations';


import { AppStateService } from '../../services/app-state/app-state.service';
import { MasterPageService } from '../../services/master-page/master-page.service';
import { IMasterPage } from '../../../liguagens/Linguagem-modulos/master-page-linguagem-entities';
import { CicloEntity } from '../../main/Shared/Entities/Master-Page/ciclo-entity';
import { GenericMasterPage } from '../../shared/components/Generics/generic-master-page';

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
export class MasterPageComponent extends GenericMasterPage implements OnInit {

  constructor(
    protected appState: AppStateService,
    protected masterPage: MasterPageService,
    protected contexts: ChildrenOutletContexts
  ) { super(appState); }


  ciclo: CicloEntity | undefined;
  open: boolean = true;
  transicaoState: string = 'state1';
  actualComponent: string | undefined = '';

  ngOnInit(): void {

    this.RunInOnInit();

    this.masterPage.GetCiclos().subscribe(x => {
      this.ciclo = x;
    })
  }

  MudarLingua(): void {
    this.appState.MudarLinguagem();
    console.log('oi')
    
    this.Transicao();
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

}
