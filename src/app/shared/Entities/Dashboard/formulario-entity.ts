import { IIndicadorEntity } from './indicador-entity';

export interface IFormularioEntity{
    titulo: string | undefined;
    status: string | undefined;
    indicadores: IIndicadorEntity[];
}