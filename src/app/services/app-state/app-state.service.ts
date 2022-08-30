import { Injectable } from '@angular/core';

import { IAppEstruturaLinguagem } from '../../../liguagens/Linguagem-entities'
import { appLinguagemPT } from '../../../liguagens/Metas.pt-BR';
import { appLinguagemES } from '../../../liguagens/Metas.es-MX';
import { DomElementSchemaRegistry } from '@angular/compiler';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  ciclo: number = 2022;

  appLinguagemSubject: Subject<IAppEstruturaLinguagem> = new Subject<IAppEstruturaLinguagem>()
  appLinguagem: IAppEstruturaLinguagem | undefined;
  linguagem: boolean = true;

  constructor() {
    this.SelectLingugem();
  }

  SelectLingugem():void {
    if(this.linguagem) {
      this.appLinguagem = appLinguagemPT;
    } else{
      this.appLinguagem = appLinguagemES;
    }
  }

  MudarLinguagem(): void {
    this.linguagem = !this.linguagem;
    this.SelectLingugem();

    this.appLinguagemSubject.next(this.appLinguagem as IAppEstruturaLinguagem);
  }

  GetAppLinguagem(): Subject<IAppEstruturaLinguagem>{
    setTimeout(() => {
      this.appLinguagemSubject.next(this.appLinguagem as IAppEstruturaLinguagem);
    }, 10);
    return this.appLinguagemSubject;
  }

  GetCiclo(): number{
    return this.ciclo;
  }

  SetCiclo(x: number): void{
    this.ciclo = x 
  }
}
