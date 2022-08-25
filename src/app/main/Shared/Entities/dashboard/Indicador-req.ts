export interface IndicadorReq{
    idIndicador: number;
    nomeIndicador: string;
    nomeUnidadeMedida: string;
    descricao:'Mensal';
    peso:number;
    minimo:number;
    planejado:number;
    desafio:number;
    resultadoApurado:number;
    simuladoApurado: number;
    dataApuracao: Date;
}