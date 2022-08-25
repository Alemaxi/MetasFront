export interface IHome {
    Title:string;
    subTitle:string;
    Stepper: IStepper;
    navegacaoMeses: INavegacaoMeses
    tabela: ITabelaCampos;
    tabelaResultado: ITabelaResultado;
    tabelaFalta: ITabelaFalta;
}

export interface ITabelaFalta{
    column1:string;
    column2:string;
    column3:string;
    row1:string;
    row2:string;
    row3:string;
}

export interface ITabelaResultado{
    column2: string;
    column3: string;
    row2:string;
    row3:string;
    row4:string;
}

export interface ITabelaCampos {
    column1: string;
    column2: string;
    column3: string;
    column4: string;
    column5: string;
    column6: string;
    column7: string;
    column8: string;
    column9: string;
    resumoCelula:string;
}

export interface INavegacaoMeses {
    item1:string
    item2:string
    item3:string
    item4:string
    item5:string
    item6:string
    item7:string
    item8:string
    item9:string
    item10:string
    item11:string
    item12:string
    item13:string
}

export interface IStepper {
    step1:ILines;
    step2:ILines;
    step3:ILines;
    step4:ILines;
    step5:ILines;
    step6:ILines;
    step7:ILines;
}

export interface ILines {
    line1: string;
    line2: string;
}