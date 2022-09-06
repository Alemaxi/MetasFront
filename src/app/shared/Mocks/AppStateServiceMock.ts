import { Subject } from "rxjs";
import { IAppEstruturaLinguagem } from "src/liguagens/Linguagem-entities";


export class AppStateServiceMock {

    ciclo: number = 2022;

    appLinguagemSubject: Subject<IAppEstruturaLinguagem> = new Subject<IAppEstruturaLinguagem>()
    appLinguagem: IAppEstruturaLinguagem | undefined;
    linguagem: boolean = true;

    SelectLingugem(): void {
        
    }

    MudarLinguagem(): void {

    }

    GetAppLinguagem(): Subject<IAppEstruturaLinguagem> {
        setTimeout(() => {
            this.appLinguagemSubject.next(this.appLinguagem as IAppEstruturaLinguagem);
        }, 10);
        return this.appLinguagemSubject;
    }

    GetCiclo(): number {
        return this.ciclo;
    }

    SetCiclo(x: number): void {
        this.ciclo = x
    }

}