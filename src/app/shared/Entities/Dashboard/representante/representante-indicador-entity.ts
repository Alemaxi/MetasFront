import { IndicadorEntity } from '../indicador-entity';

export class RepresentanteIndicadorEntity extends IndicadorEntity {
    public selected: boolean | undefined;
    public novoIndicador: boolean | undefined;
    public codNovoIndicador: number | undefined;

    constructor(){super()}

    VerficarValidadeGeral(): boolean {


        if(this.VerificarPeso() && 
        this.VerificarFrequencia() &&  this.VerificarIndicador() &&
        this.VerificarMinimo() && this.VerificarPlanejado() &&
        this.VerificarResultado() && this.VerificarSimulacao() &&
        this.VerificarUnidadeMedida()){
            if(this.VerificarDesafio())
                return true;
        }
        return false;
    }

    /*PeloMenosUmPreenchido(): boolean {


        if(this.VerificarPeso() || this.VerificarDesafio()||
        this.VerificarFrequencia() ||  this.VerificarIndicador() ||
        this.VerificarMinimo() || this.VerificarPlanejado() ||
        this.VerificarResultado() || this.VerificarSimulacao()||
        this.VerificarUnidadeMedida()){
                return true;
        }
        return false;
    }*/

    VerificarPeso(): boolean {
        if(this.peso== undefined){
            return false;
        }

        return true;
    }

    VerificarDesafio():boolean {
        if(this.desafio==undefined){
            return false;
        }
        return true;
    }

    VerificarMinimo():boolean {
        if(this.minimo==undefined){
            return false;
        }

        return true;
    }

    VerificarPlanejado():boolean {
        if(this.planejado==undefined){
            return false;
        }
        return true;
    }

    VerificarResultado():boolean {
        if(this.resultado==undefined){
            return false;
        }
        return true;
    }

    VerificarSimulacao():boolean {
        if(this.simulacao==undefined){
            return false;
        }
        return true;
    }

    VerificarIndicador():boolean {
        if(this.indicador== undefined || this.indicador.length == 0){
            return false;
        }
        return true;
    }

    VerificarFrequencia():boolean {
        if(this.frequencia== undefined || this.frequencia.length == 0){
            return false;
        }
        return true;
    }

    VerificarUnidadeMedida():boolean {
        if(this.unidadeMedida== undefined || this.unidadeMedida.length == 0){
            return false;
        }
        return true;
    }
    
}