import { Component, OnInit } from '@angular/core';

import { TreinamentoDialogComponent } from '../treinamento-dialog/treinamento-dialog.component';
import { IIndicadorEntity } from '../Shared/Entities/dashboard/indicador-entity';
import { IDashboardStatus } from '../Shared/Entities/dashboard/dashboard-celula-status';

import { MatDialog } from '@angular/material/dialog';

import { TestingServiceService } from '../../services/testing-service.service';
import { environment } from 'src/environments/environment';

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
  }
]



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemsList: IIndicadorEntity[] = listSimulator;

  selectedMes: MesEnum = MesEnum.jan;

  showMes: boolean = true;

  status: IDashboardStatus = {
    dataAtualizacao: new Date(),
    status:2
  }

  constructor(
    public testing: TestingServiceService,
    public dialog: MatDialog
    ){
      dialog.open(TreinamentoDialogComponent,
        {
          minWidth:600,
        });
  }

  ngOnInit(): void {
    this.testing.GetValues().subscribe( x=> {
      this.numero = x.numero;
      this.texto = x.texto;
      this.data = x.data;
    });
  }

  numero: number = 0;
  texto: string = '';
  data: Date = new Date('1994/06/30');

  CheckMes(mes: MesEnum): boolean{
    return this.selectedMes == mes;
  }

  ChangeMes(mes: MesEnum): void{
    this.selectedMes = mes;

    if(this.selectedMes != 12) this.showMes = true
    else this.showMes = false
  }

}
