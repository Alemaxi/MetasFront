import { RepresentanteIndicadorEntity } from 'src/app/shared/Entities/Dashboard/representante/representante-indicador-entity';
import { Subject } from 'rxjs';
import { IndicadorEntity } from '../Entities/Dashboard/indicador-entity';
import { IDashboardStatus } from '../Entities/Dashboard/dashboard-celula-status';
import { ResultadoEntity } from '../Entities/Dashboard/resultado-entity';
import { FaltaEntity } from '../Entities/Dashboard/falta-entity';
import { IFormularioEntity } from '../Entities/Dashboard/formulario-entity';

export class DashBoardServiceMock {

    public GetFormulariosRepresentante(): Subject<RepresentanteIndicadorEntity[]> {
        let resultado = new Subject<RepresentanteIndicadorEntity[]>();


        let indicador: RepresentanteIndicadorEntity = new RepresentanteIndicadorEntity();
        indicador.novoIndicador = false

        setTimeout(() => {
            resultado.next([indicador]);
        }, 0);

        return resultado;
    }

    public GetIndicadoresDataForMonth(mes: number): Subject<IndicadorEntity[]> {
        let resultado = new Subject<IndicadorEntity[]>();
        return resultado;
      }
    
      public GetDashboardStatus(): Subject<IDashboardStatus> {
        let resultado = new Subject<IDashboardStatus>();
        return resultado;
      }
    
      public GetResultados(): Subject<ResultadoEntity[]> {
        let resultado = new Subject<ResultadoEntity[]>();
    
        setTimeout(() => {
            resultado.next([
                {titulo:'todos',semestre1:{periodo:'um',resultado:2},semestre2:{periodo:'um',resultado:2}}
            ])
        }, 0);

        return resultado;
      }
    
      public GetFaltas(): Subject<FaltaEntity[]>{
        let resultado = new Subject<FaltaEntity[]>();

        setTimeout(() => {
            resultado.next([new FaltaEntity()])
        }, 0);

        return resultado;
      }
    
      public GetFormularios(): Subject<IFormularioEntity[]> {
        let resultado = new Subject<IFormularioEntity[]>();
    
        return resultado;
      }
}