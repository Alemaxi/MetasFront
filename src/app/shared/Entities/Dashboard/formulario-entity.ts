import { IndicadorEntity } from './indicador-entity';

export interface IFormularioEntity{
    titulo: string | undefined;
    status: string | undefined;
    indicadores: IndicadorEntity[];
}