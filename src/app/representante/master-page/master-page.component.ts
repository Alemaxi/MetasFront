import { Component, OnInit, AfterViewChecked } from '@angular/core';

import { GenericMasterPage } from '../../shared/components/Generics/generic-master-page';

import { IMasterPage } from '../../../liguagens/Linguagem-modulos/master-page-linguagem-entities';
import { AppStateService } from '../../services/app-state/app-state.service';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.scss']
})
export class MasterPageComponent extends GenericMasterPage implements OnInit, AfterViewChecked {

  constructor(
    protected appState: AppStateService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.appState.GetAppLinguagem().subscribe(x => {
      this.masterPageLinguagem = x.main.masterpage;
    })
  }

  ngAfterViewChecked(): void {

  }
}
