export interface ResultadoEntity{
    titulo:string;
    semestre1: Semestre;
    semestre2: Semestre;
}

export interface Semestre{
    resultado:number;
    periodo:string;
}