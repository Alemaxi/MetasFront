export interface IMasterPage {
    notificacoes: INotificacoes;
    tutorial: ITutorial;

    dropdownText: string;
    ItemMenu1: string;
    ItemMenu2: string;
    ItemMenu3:string;
    ItemMenu4:string;
    ItemMenu5:string;
    ItemMenu6:string;
    ItemMenu7:string;
    ItemMenu8:string;
    ItemMenu9:string;
    ItemMenu10:string;
    ItemMenu11:string;
    ItemMenu12:string;
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