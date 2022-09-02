import { FormularioIndicadorEntity } from './formulario-state-indicador';
import { RepresentanteIndicadorEntity } from './representante-indicador-entity';


let mockedRepIndic: RepresentanteIndicadorEntity = new RepresentanteIndicadorEntity();
let mockedRepIndic2: RepresentanteIndicadorEntity = new RepresentanteIndicadorEntity();

let mockedFormIndic: FormularioIndicadorEntity = new FormularioIndicadorEntity();

beforeEach(() => {
  mockedRepIndic.desafio = 1;
  mockedRepIndic.frequencia = '1';
  mockedRepIndic.indicador = 'aa';
  mockedRepIndic.minimo = 1;
  mockedRepIndic.planejado = 1;
  mockedRepIndic.peso = 1;
  mockedRepIndic.resultado = 1;
  mockedRepIndic.unidadeMedida = 'a';
  mockedRepIndic.simulacao = 1;

  mockedRepIndic2.desafio = 1;
  mockedRepIndic2.frequencia = '1';
  mockedRepIndic2.indicador = 'aa';
  mockedRepIndic2.minimo = 1;
  mockedRepIndic2.planejado = 1;
  mockedRepIndic2.peso = 1;
  mockedRepIndic2.resultado = 1;
  mockedRepIndic2.unidadeMedida = 'a';
  mockedRepIndic2.simulacao = 1;

  mockedFormIndic.indicadores.push(mockedRepIndic);
  mockedFormIndic.indicadores.push(mockedRepIndic2);
})


describe('FormularioIndicadorEntity', () => {
  it('is valid should be true', () => {
    expect(mockedFormIndic.estaValido()).toBeTrue();
  });

  it('is valid should be false', () => {
    mockedFormIndic.indicadores[1].simulacao=undefined;
    expect(mockedFormIndic.estaValido()).toBeFalse();
  });
});
