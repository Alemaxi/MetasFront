import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, of } from 'rxjs';

import { GenericService } from '../Generic-service';
import { IFaltasEntity } from '../../main/Shared/Entities/Dashboard/falta-entity';
import { IIndicadorEntity } from '../../main/Shared/Entities/Dashboard/indicador-entity';
import { IDashboardStatus } from '../../main/Shared/Entities/Dashboard/dashboard-celula-status';
import { IResultadoEntity } from '../../main/Shared/Entities/Dashboard/resultado-entity';
import { IFormularioEntity } from '../../main/Shared/Entities/Dashboard/formulario-entity';
import { IFormularioReq } from '../../main/Shared/Entities/Dashboard/formulario-req';

const listSimulator: IIndicadorEntity[] = [
  {
    indicador: 'nomeIndicador',
    unidadeMedida: '%',
    frequencia: 10,
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
    frequencia: 10,
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
    frequencia: 10,
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
export class HomeService extends GenericService {

  constructor(protected http: HttpClient) {
    super();
  }

  public GetIndicadoresDataForMonth(mes: number): Subject<IIndicadorEntity[]> {
    let resultado = new Subject<IIndicadorEntity[]>();
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
}


/*{
  "listMeta": [
    {
      "nomecliclo": "Ciclo tres",
      "status": 2,
      "NomeStatus"
      "indicadores": [
        {
          "idindicador": 2,
          "nomeindicador": "EBTIDA",
          "nomeunidademedida": "%",
          "descricao": "Mensal",
          "peso": 10,
          "minimo": 5,
          "planejado": 15,
          "desafio": 20,
          "resultadoapurado": 0,
          "simuladoapurado": 17.17,
          "dataapuracao": "0001-01-01T00:00:00"
        },
        {
          "idindicador": 4,
          "nomeindicador": "Indicador Dois",
          "nomeunidademedida": "KG",
          "descricao": "Trimestral",
          "peso": 90,
          "minimo": 10,
          "planejado": 10,
          "desafio": 15,
          "resultadoapurado": 0,
          "simuladoapurado": 0,
          "dataapuracao": "0001-01-01T00:00:00"
        }
      ]
    },
    {
      "nomecliclo": "Formulário Lorem Impsul",
      "status": 2,
      "indicadores": [
        {
          "idindicador": 2,
          "nomeindicador": "EBTIDA",
          "nomeunidademedida": "%",
          "descricao": "Bimestral",
          "peso": 80,
          "minimo": 20,
          "planejado": 90,
          "desafio": 100,
          "resultadoapurado": 0,
          "simuladoapurado": 0,
          "dataapuracao": "0001-01-01T00:00:00"
        },
        {
          "idindicador": 3,
          "nomeindicador": "Indicador Um",
          "nomeunidademedida": "%",
          "descricao": "Trimestral",
          "peso": 50,
          "minimo": 20,
          "planejado": 90,
          "desafio": 90,
          "resultadoapurado": 0,
          "simuladoapurado": 0,
          "dataapuracao": "0001-01-01T00:00:00"
        },

        {
          "idindicador": 1,
          "nomeindicador": "Lorem Impsul",
          "nomeunidademedida": "%",
          "descricao": "Mensal",
          "peso": 50,
          "minimo": 30,
          "planejado": 60,
          "desafio": 80,
          "resultadoapurado": 15.15,
          "simuladoapurado": 0,
          "dataapuracao": "2022-01-15T00:00:00"
        }
      ]
    }
  ]
}*/

/*
 [
  { 
    titulo: 'formulario1', 
    status: "status", 
    indicadores: [
      { 
      indicador: 'nomeIndicador',
        unidadeMedida: '%',
        frequencia: 10,
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
    frequencia: 10,
    desafio: 5,
    minimo: 3,
    planejado: 4,
    resultado: 5,
    simulacao: 4.5,
    peso: 5,
  },
    ]
  },
  { titulo: 'formulario2', status: "status", indicadores: listSimulator },
];

*/