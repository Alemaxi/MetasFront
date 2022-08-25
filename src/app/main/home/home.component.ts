import { Component, OnInit } from '@angular/core';

import { TreinamentoDialogComponent } from '../treinamento-dialog/treinamento-dialog.component';
import { IIndicadorEntity } from '../Shared/Entities/Dashboard/indicador-entity';
import { IDashboardStatus } from '../Shared/Entities/Dashboard/dashboard-celula-status';
import { HomeService } from '../../services/Home/home.service';
import { AppStateService } from '../../services/app-state/app-state.service';
import { IHome } from '../../../liguagens/Linguagem-modulos/home-linguagem-entities';

import { MatDialog } from '@angular/material/dialog';
import { IResultadoEntity } from '../Shared/Entities/Dashboard/resultado-entity';
import { IFormularioEntity } from '../Shared/Entities/Dashboard/formulario-entity';
import { IFaltasEntity } from '../Shared/Entities/Dashboard/falta-entity';


enum MesEnum{
  jan, fev,mar,abr,mai,jun,jul,ago,set,out,nov,dec,res
}

const listSimulator: IIndicadorEntity[] = [
  {
    indicador: 'nomeIndicador',
    unidadeMedida: '%',
    frequencia:10,
    desafio:5,
    minimo:3,
    planejado:4,
    resultado:5,
    simulacao:4.5,
    peso:5,
  },
]



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedMes: MesEnum = MesEnum.jan;
  showMes: boolean = true;
  status: IDashboardStatus = {
    dataAtualizacao: new Date('1994/06/30'),
    status:2
  }
  
  
  homeLinguagem: IHome | undefined;
  itemsList: IIndicadorEntity[] = [];
  resultadosList: IResultadoEntity[] = [];
  formularioList: IFormularioEntity[] = [];
  faltas: IFaltasEntity | undefined;


  constructor(
    public home: HomeService,
    public dialog: MatDialog,
    public appState: AppStateService
    ){
      dialog.open(TreinamentoDialogComponent,
        {
          minWidth:700,
        });
  }

  ngOnInit(): void {
    this.home.GetDashboardStatus().subscribe(x => {
      this.status = x;
    });
    this.home.GetIndicadoresDataForMonth(1).subscribe(x => {
      this.itemsList = x;
    });
    this.home.GetFormularios().subscribe(x => {
      this.formularioList = x;
    });

    this.homeLinguagem = this.appState.GetAppLinguagem().main.home;
  }

  numero: number = 0;
  texto: string = '';
  data: Date = new Date('1994/06/30');

  CheckMes(mes: MesEnum): boolean{
    return this.selectedMes == mes;
  }

  ChangeMes(mes: MesEnum): void{
    this.selectedMes = mes;

    if(this.selectedMes != 12){
      this.showMes = true;
      this.home.GetIndicadoresDataForMonth(mes).subscribe(x => {
        this.itemsList = x;
      });
    } 
    else {
      this.home.GetFaltas().subscribe(x => {
        this.faltas = x;
      })
      this.home.GetResultados().subscribe(x => {
        this.resultadosList = x;
      });
      this.showMes = false;
    }
  }

}
