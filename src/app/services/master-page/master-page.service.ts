import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GenericService } from '../Generic-service';
import { AppStateService } from '../app-state/app-state.service'
import { INotificacaoEntity } from '../../main/Shared/Entities/Master-Page/notificacao-entity';
import { Subject, take, takeLast } from 'rxjs';
import { CicloEntity } from '../../main/Shared/Entities/Master-Page/ciclo-entity';

@Injectable({
  providedIn: 'root'
})
export class MasterPageService extends GenericService{

  constructor(
    protected http:HttpClient,
    protected appState: AppStateService
    ) { 
    super()
  }

  public GetCiclos(): Subject<CicloEntity> {
    let resultado = new Subject<CicloEntity>();

    setTimeout(() => {
      resultado.next({
        ciclos: ["2022","2021","2020"]
      })
    }, 2);

    return resultado;
  }

  public GetNotificacoes(user: string): Subject<INotificacaoEntity[]>{

    var result:Subject<INotificacaoEntity[]> = new Subject<INotificacaoEntity[]>();
    
    setTimeout(() =>{
      result.next([
        {
          prazo:new Date(),
          texto:"that's the text guys!! that's it",
          titulo:"That's the title",
          dataPostagem:new Date()
        },
        {
          prazo:new Date(),
          texto:"that's the text guys!! that's it",
          titulo:"That's the title",
          dataPostagem:new Date()
        },
        {
          prazo:new Date(),
          texto:"that's the text guys!! that's it",
          titulo:"That's the title",
          dataPostagem:new Date()
        }
      ]);
    },.1)



    return result;
  }

  public NotificacoesLidas(): Subject<boolean>{
    let resultado = new Subject<boolean>();


    setTimeout(() => {
      resultado.next(true);
    }, 3);

    return resultado;
  }
}
