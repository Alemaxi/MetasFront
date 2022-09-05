import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, of } from 'rxjs';

import { GenericService } from '../Generic-service';
import { IFaltasEntity } from '../../shared/Entities/Dashboard/falta-entity';
import { IndicadorEntity } from '../../shared/Entities/Dashboard/indicador-entity';
import { IDashboardStatus } from '../../shared/Entities/Dashboard/dashboard-celula-status';
import { IResultadoEntity } from '../../shared/Entities/Dashboard/resultado-entity';
import { IFormularioEntity } from '../../shared/Entities/Dashboard/formulario-entity';
import { IFormularioReq } from '../../shared/Entities/Dashboard/formulario-req';
import { RepresentanteIndicadorEntity } from '../../shared/Entities/Dashboard/representante/representante-indicador-entity';

const listSimulator: IndicadorEntity[] = [
  {
    indicador: 'nomeIndicador',
    unidadeMedida: '%',
    frequencia: 'trimestral',
    desafio: 5,
    minimo: 3,
    planejado: 4,
    resultado: 5,
    simulacao: 4.5,
    peso: 5,
  },
  {
    indicador: 'nomeIndicador',
    unidadeMedida: '%',
    frequencia: 'trimestral',
    desafio: 5,
    minimo: 3,
    planejado: 4,
    resultado: 5,
    simulacao: 4.5,
    peso: 5,
  },
  {
    indicador: 'nomeIndicador',
    unidadeMedida: '%',
    frequencia: 'trimestral',
    desafio: 5,
    minimo: 3,
    planejado: 4,
    resultado: 5,
    simulacao: 4.5,
    peso: 5,
  }
];

const mockResultados: IResultadoEntity[] = [
  {
    titulo: 'mocked', semestre1:
      { periodo: 'um ai', resultado: 10 }, semestre2: { periodo: 'um ai', resultado: 10 }
  },
  {
    titulo: 'mocked', semestre1:
      { periodo: 'um ai', resultado: 10 }, semestre2: { periodo: 'um ai', resultado: 10 }
  },
];

const mockFaltas: IFaltasEntity = {
  afastamento: {
    dataFim: new Date(),
    dataInicio: new Date
  },
  faltaInjustificada: {
    dataFim: new Date(),
    dataInicio: new Date
  },
  suspensao: {
    dataFim: new Date(),
    dataInicio: new Date
  },
}

const dashboardStatus: IDashboardStatus = {
  dataAtualizacao: new Date(),
  status: 2
}

const mockFormulários: IFormularioEntity[] = [
  { titulo: 'formulario1', status: "status", indicadores: listSimulator },
  { titulo: 'formulario2', status: "status", indicadores: listSimulator },
];

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends GenericService {

  constructor(protected http: HttpClient) {
    super();
  }

  public GetIndicadoresDataForMonth(mes: number): Subject<IndicadorEntity[]> {
    let resultado = new Subject<IndicadorEntity[]>();
    return resultado;
  }

  public GetDashboardStatus(): Subject<IDashboardStatus> {
    let resultado = new Subject<IDashboardStatus>();
    return resultado;
  }

  public GetResultados(): Subject<IResultadoEntity[]> {
    let resultado = new Subject<IResultadoEntity[]>();

    setTimeout(() => {
      resultado.next(mockResultados);
    }, 1);

    return resultado;
  }

  public GetFaltas(): Subject<IFaltasEntity>{
    let resultado = new Subject<IFaltasEntity>();

    setTimeout(() => {
      resultado.next(mockFaltas);
    }, 1);

    return resultado;
  }

  public GetFormularios(): Subject<IFormularioEntity[]> {
    let resultado = new Subject<IFormularioEntity[]>();

    setTimeout(() => {
      resultado.next(mockFormulários);
    }, 1);

    return resultado;
  }

  public GetFormulariosRepresentante(): Subject<RepresentanteIndicadorEntity[]> {
    let resultado = new Subject<RepresentanteIndicadorEntity[]>();

    setTimeout(() => {
      resultado.next([
        new RepresentanteIndicadorEntity(),
        new RepresentanteIndicadorEntity(),
        new RepresentanteIndicadorEntity(),]);
    }, 1);

    return resultado;
  }
}