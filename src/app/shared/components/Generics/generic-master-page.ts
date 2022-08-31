import { IMasterPage } from '../../../../liguagens/Linguagem-modulos/master-page-linguagem-entities';

export abstract class GenericMasterPage {

    masterPageLinguagem: IMasterPage | undefined;

    ToggleSidenav(): void {
        document.getElementById('toggle')?.click();
    }
}