import { RepresentanteIndicadorEntity } from 'src/app/shared/Entities/Dashboard/representante/representante-indicador-entity';
import { Subject } from 'rxjs';

export class dashBoardServiceMock {

    public GetFormulariosRepresentante(): Subject<RepresentanteIndicadorEntity[]> {
        let resultado = new Subject<RepresentanteIndicadorEntity[]>();


        let indicador: RepresentanteIndicadorEntity = new RepresentanteIndicadorEntity();
        indicador.novoIndicador = false

        setTimeout(() => {
            resultado.next([indicador]);
        }, 1);

        return resultado;
    }
}