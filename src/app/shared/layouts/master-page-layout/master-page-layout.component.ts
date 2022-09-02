import { Component, Input, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { trigger, style, state, animate, transition } from '@angular/animations';

import { CicloEntity } from '../../../main/Shared/Entities/Master-Page/ciclo-entity';

import { AppStateService } from '../../../services/app-state/app-state.service';
import { MasterPageService } from '../../../services/master-page/master-page.service';
import { TreinamentoDialogComponent } from '../../components/master-page/treinamento-dialog/treinamento-dialog.component';

import { IMasterPage } from '../../../../liguagens/Linguagem-modulos/master-page-linguagem-entities';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-master-page-layout',
  templateUrl: './master-page-layout.component.html',
  styleUrls: ['./master-page-layout.component.scss']
})
export class MasterPageLayoutComponent implements OnInit {

  masterPageLinguagem: IMasterPage | undefined;
  ciclo: CicloEntity | undefined;
  open: boolean = true;
  @Input() showNotificationButton: boolean = true;

  constructor(
    protected masterPage: MasterPageService,
    protected appState: AppStateService,
    protected dialog: MatDialog
  ) { }

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

  CicloSelecionado(x: Event): void {
    let htmlElement = x.target as HTMLSelectElement;

    this.appState.SetCiclo(Number.parseInt(htmlElement.value));
  }

  ChangeState(): void {
    this.open = !this.open;
  }

}
