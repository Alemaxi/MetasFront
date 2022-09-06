export class ResultadoEntity{
    titulo:string | undefined;
    semestre1: Semestre | undefined;
    semestre2: Semestre | undefined;
}

export class Semestre{
    resultado:number | undefined;
    periodo:string | undefined;
}