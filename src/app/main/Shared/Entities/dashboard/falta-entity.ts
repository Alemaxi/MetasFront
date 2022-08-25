export interface IFaltasEntity{
    faltaInjustificada: DatasFalta | undefined;
    suspensao: DatasFalta | undefined;
    afastamento: DatasFalta | undefined;
}

export interface DatasFalta{
    dataInicio: Date | undefined;
    dataFim: Date | undefined;
}