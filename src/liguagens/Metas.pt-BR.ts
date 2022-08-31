import { IAppEstruturaLinguagem } from './Linguagem-entities';

export const appLinguagemPT:IAppEstruturaLinguagem = {
    main: {
        home:{
            Title:"Dashboard da minha celula",
            subTitle:"Ultima Atualização",
            Stepper: {
                step1:{
                    line1:"Preencher",
                    line2:"Indicadores"
                },
                step2:{
                    line1:"Planejado/aberto",
                    line2:"para check-in"
                },
                step3:{
                    line1:"Em aprovação",
                    line2:""
                },
                step4:{
                    line1:"Aprovado",
                    line2:""
                },
                step5:{
                    line1:"Planejado/aberto",
                    line2:"para check-in"
                },
                step6:{
                    line1:"Em aprovação",
                    line2:""
                },
                step7:{
                    line1:"Aprovado",
                    line2:""
                },
            },
            navegacaoMeses: {
                item1: "Janeiro",
                item2: "Fevereiro",
                item3: "Março",
                item4: "Abril",
                item5: "Maio",
                item6: "Junho",
                item7: "Julho",
                item8: "Agosto",
                item9: "Setembro",
                item10: "Outubro",
                item11: "Novembro",
                item12: "Dezembro",
                item13: "Resultado"
            },
            tabela:{
                column1: "indicador",
                column2: "Un. de medida",
                column3: "Frequência",
                column4: "Peso",
                column5: "Mínimo",
                column6: "Planejado",
                column7: "Desafio",
                column8: "Resultado",
                column9: "Simulação (SAL)",
                resumoCelula: "Total"
            },
            tabelaResultado: {
                column2:"Resultado",
                column3:"Período",
                row2:"Total do 1º semestre",
                row3:"Total do 2º semestre",
                row4:"TOTAL ANO"
            },
            tabelaFalta:{
                column1: "Minhas ausências",
                column2: "Data inicio",
                column3: "Data fim",
                row1: "Faltas injustificadas",
                row2: "Suspensão",
                row3: "Afastamento"
            }
        },
        masterpage: {
            dropdownText:"Ciclo",
            tutorial: {
                button1:"Ler orientações",
                button2:"Fechar",
                title:"Seja bem vindo ao programa de metas!",
                subtitle:"Confira um breve tutorial do nosso sistema."
            },
            menuLabel:"Menu",
            DashboardLabel:"Dashoboard Formulário Metas",
            formularioMetas:"Formulario Metas",
            simuladorLabel:"Simular Dashboard",
            planejamentoLabel:"Planejamento Metas",
            historicoLabel:"Histórico de solicitações",
            cronogramaLabel:"Cronograma Metas",
            configuracoesLabel:"Configurações",
            culturaLabel:"Cultura Gerdau",
            orientacoesLabel:"Orientações",
            HelpLabel:"Help Desk",
            notificacoes: {
                limparButton:"Limpar tudo",
                MostrarMaisButton:"Mostrar Mais",
                subtitle: "Ultimas solicações",
                title: "Notificações",
            }
        },
        minhaCelula: undefined,
        orientacoes: undefined,
        planejamento: undefined,
        simulador: undefined,
        treinamento: undefined,
    },
    
    access: undefined
}