import { IHome } from './Linguagem-modulos/home-linguagem-entities';
import { IMasterPage } from './Linguagem-modulos/master-page-linguagem-entities';
/**
 * Interface criada pra representar cada um dos campos que serão traduzidos na aplicação
 * 
 */
export interface IAppEstruturaLinguagem {
    main: Main;
    access: undefined;
}

export interface Main {
    masterpage: IMasterPage;
    home: IHome;
    minhaCelula: undefined;
    orientacoes: undefined;
    planejamento: undefined;
    simulador: undefined;
    treinamento: undefined;
}

