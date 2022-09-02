import { IMasterPage } from '../../../../liguagens/Linguagem-modulos/master-page-linguagem-entities';

import { AppStateService } from '../../../services/app-state/app-state.service';

export abstract class GenericMasterPage {

    masterPageLinguagem: IMasterPage | undefined;

    constructor(private appStateGeneric: AppStateService){
    }

    ToggleSidenav(): void {
        document.getElementById('toggle')?.click();
    }

    RunInOnInit():void {
        this.appStateGeneric.GetAppLinguagem().subscribe(x => {
            this.masterPageLinguagem = x.main.masterpage;
        })
    }
}