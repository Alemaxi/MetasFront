import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { IFormularioEntity } from '../../shared/Entities/Dashboard/formulario-entity';
import { IHome } from '../../../liguagens/Linguagem-modulos/home-linguagem-entities';
import { DashboardService } from '../../services/Dashboard/dashboard.service';
import { AppStateService } from '../../services/app-state/app-state.service';
import { DashboardFormularioLayoutComponent } from '../../shared/layouts/dashboard-formulario-layout/dashboard-formulario-layout.component';
import { MesEnum } from '../../shared/Enum/MesEnum';
import { IIndicadorEntity } from '../../shared/Entities/Dashboard/indicador-entity';
import { IFaltasEntity } from '../../shared/Entities/Dashboard/falta-entity';
import { IResultadoEntity } from '../../shared/Entities/Dashboard/resultado-entity';


@Component({
  selector: 'app-dashboard-formulario',
  templateUrl: './dashboard-formulario.component.html',
  styleUrls: ['./dashboard-formulario.component.scss']
})
export class DashboardFormularioComponent implements OnInit, AfterViewInit {

  formularioList: IFormularioEntity[] = [];
  homeLinguagem: IHome | undefined;
  showMes: boolean = true;
  selectedMes: MesEnum = MesEnum.jan;
  itemsList: IIndicadorEntity[] = [];
  faltas: IFaltasEntity | undefined;
  resultadosList: IResultadoEntity[] = [];

  @ViewChild('formularioLayout') public formulario!: DashboardFormularioLayoutComponent;

  constructor(
    public home: DashboardService,
    public appState: AppStateService
  ) { }

  ngOnInit(): void {

    this.home.GetFormularios().subscribe(x => {
      this.formularioList = x;
    });

    this.appState.GetAppLinguagem().subscribe(x=> {
      this.homeLinguagem = x.main.home;
    })
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      console.log(this.formulario.dashboardLinguagem)
    }, 1);
  }

  MesNavegado(mes: number):void {
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
      });

      this.home.GetResultados().subscribe(x => {
        this.resultadosList = x;
      });
      
      this.showMes = false;
    }
  }
}
