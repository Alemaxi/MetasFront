import { IndicadorReq } from './Indicador-req';

export interface IFormularioReq{
    descricao:string;
    status: number
    listMeta: IndicadorReq[];
}