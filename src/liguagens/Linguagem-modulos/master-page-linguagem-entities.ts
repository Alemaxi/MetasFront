export interface IMasterPage {
    notificacoes: INotificacoes;
    tutorial: ITutorial;

    dropdownText: string;
    menuLabel: string;
    DashboardLabel: string;
    formularioMetas:string;
    simuladorLabel:string;
    planejamentoLabel:string;
    historicoLabel:string;
    cronogramaLabel:string;
    configuracoesLabel:string;
    culturaLabel:string;
    orientacoesLabel:string;
    HelpLabel:string;
}

export interface INotificacoes {
    title:string;
    subtitle:string;
    limparButton:string;
    MostrarMaisButton:string;
}

export interface ITutorial {
    title: string;
    subtitle:string;
    button1:string;
    button2:string;
}