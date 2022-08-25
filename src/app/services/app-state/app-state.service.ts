import { Injectable } from '@angular/core';

import { IAppEstruturaLinguagem } from '../../../liguagens/Linguagem-entities'
import { appLinguagemPT } from '../../../liguagens/Metas.pt-BR';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  ciclo: number = 2022;

  appLinguagem: IAppEstruturaLinguagem | undefined;

  constructor() {
    if(true){
      this.appLinguagem = appLinguagemPT;
    } 
  }

  GetAppLinguagem(): IAppEstruturaLinguagem{
    return this.appLinguagem as IAppEstruturaLinguagem;
  }

  GetCiclo(): number{
    return this.ciclo;
  }

  SetCiclo(x: number): void{
    this.ciclo = x 
  }
}
