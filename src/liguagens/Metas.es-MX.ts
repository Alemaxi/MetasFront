import { IAppEstruturaLinguagem } from './Linguagem-entities';

export const appLinguagemES:IAppEstruturaLinguagem = {
    main: {
        home:{
            Title:"Panel de Control Formulario Metas",
            subTitle:"Atualizado",
            Stepper: {
                step1:{
                    line1:"Completar",
                    line2:"Indicadores"
                },
                step2:{
                    line1:"Planificado/habilitado",
                    line2:"para check-in"
                },
                step3:{
                    line1:"En aprobación",
                    line2:""
                },
                step4:{
                    line1:"Aprobado",
                    line2:""
                },
                step5:{
                    line1:"Planificado/habilitado",
                    line2:"para check-in"
                },
                step6:{
                    line1:"En aprovbación",
                    line2:""
                },
                step7:{
                    line1:"Aprobado",
                    line2:""
                },
            },
            navegacaoMeses: {
                item1: "Enero",
                item2: "Febrero",
                item3: "Marzo",
                item4: "Abril",
                item5: "Mayo",
                item6: "Junio",
                item7: "Julio",
                item8: "Agosto",
                item9: "Septiembre",
                item10: "Octubre",
                item11: "Novembre",
                item12: "Diciembre",
                item13: "Resultado"
            },
            tabela:{
                column1: "Nome del indicador",
                column2: "Un. de medida",
                column3: "Frecuencia",
                column4: "Peso",
                column5: "Mínimo",
                column6: "Planificado",
                column7: "Desafio",
                column8: "Resultado",
                column9: "Simulación (SAL)",
                resumoCelula: "Total"
            },
            tabelaResultado: {
                column2:"Resultado",
                column3:"Período",
                row2:"Total 1º semestre",
                row3:"Total 2º semestre",
                row4:"TOTAL AÑO"
            },
            tabelaFalta:{
                column1: "Mis ausências",
                column2: "Fecha de inicio",
                column3: "Fecha de finalización",
                row1: "ausencia injustificada",
                row2: "Suspensión",
                row3: "Aislamiento"
            }
        },
        masterpage: {
            dropdownText:"Ciclo",
            tutorial: {
                button1:"Ler instrucciones",
                button2:"Continuar",
                title:"Bienvenidos al Programa Metas",
                subtitle:"Vea un breve tutorial de nuestro sistema."
            },
            menuLabel:"Menu",
            DashboardLabel:"Panel de control",
            formularioMetas:"Formulario Metas",
            simuladorLabel:"Simular Dashboard",
            planejamentoLabel:"Planejamento Metas",
            historicoLabel:"Historial de solicitudes",
            cronogramaLabel:"Cronograma Metas",
            configuracoesLabel:"Configurações",
            culturaLabel:"Cultura Gerdau",
            orientacoesLabel:"Instrucciones",
            HelpLabel:"Control de ayuda",
            notificacoes: {
                limparButton:"Limpiar todo",
                MostrarMaisButton:"Mostrar Más",
                subtitle: "Últimas solicitudes",
                title: "Notificaciones",
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