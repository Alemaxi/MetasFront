
import { RepresentanteIndicadorEntity } from './representante-indicador-entity';


export class FormularioIndicadorEntity {
    estaValido():boolean{
        let result = true;

        this.indicadores.forEach(x => {
            if(!x.VerficarValidadeGeral()){
                result = false
            }
        })

        return result;
    }
    indicadores: RepresentanteIndicadorEntity[] = [];
}