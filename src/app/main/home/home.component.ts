import { Component, OnInit, AfterViewInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { IndicadorEntity } from '../../shared/Entities/Dashboard/indicador-entity';
import { IDashboardStatus } from '../../shared/Entities/Dashboard/dashboard-celula-status';
import { DashboardService } from '../../services/Dashboard/dashboard.service';
import { AppStateService } from '../../services/app-state/app-state.service';
import { IHome } from '../../../liguagens/Linguagem-modulos/home-linguagem-entities';
import { IResultadoEntity } from '../../shared/Entities/Dashboard/resultado-entity';
import { IFormularioEntity } from '../../shared/Entities/Dashboard/formulario-entity';
import { IFaltasEntity } from '../../shared/Entities/Dashboard/falta-entity';
import { MesEnum } from '../../shared/Enum/MesEnum';


const listSimulator: IndicadorEntity[] = [
  {
    indicador: 'nomeIndicador',
    unidadeMedida: '%',
    frequencia:'trimestral',
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
export class HomeComponent implements OnInit,AfterViewInit {

  selectedMes: MesEnum = MesEnum.jan;
  showMes: boolean = true;
  status: IDashboardStatus = {
    dataAtualizacao: new Date('1994/06/30'),
    status:2
  }
  
  
  homeLinguagem: IHome | undefined;
  itemsList: IndicadorEntity[] = [];
  resultadosList: IResultadoEntity[] = [];
  formularioList: IFormularioEntity[] = [];
  faltas: IFaltasEntity | undefined;


  constructor(
    public home: DashboardService,
    public dialog: MatDialog,
    public appState: AppStateService
    ){
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
    
    this.appState.GetAppLinguagem().subscribe(x=> {
      this.homeLinguagem = x.main.home;
    })
    
  }

  ngAfterViewInit(): void {
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
