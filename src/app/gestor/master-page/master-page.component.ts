import { Component, OnInit } from '@angular/core';

import { GenericMasterPage } from '../../shared/components/Generics/generic-master-page';
import { AppStateService } from '../../services/app-state/app-state.service';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.scss']
})
export class MasterPageComponent extends GenericMasterPage implements OnInit {

  constructor(protected appState:AppStateService) {
    super(appState);
   }

  ngOnInit(): void {
    this.RunInOnInit();
  }

}
