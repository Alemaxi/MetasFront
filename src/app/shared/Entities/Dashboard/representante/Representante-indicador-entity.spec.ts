import { RepresentanteIndicadorEntity } from './representante-indicador-entity';

let mockedRepIndic: RepresentanteIndicadorEntity = new RepresentanteIndicadorEntity();

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
})


describe('Representante-Indicador-Entity', () => {
  /*it('PeloMenosUmPreenchido should be true', () => {
    mockedRepIndic.frequencia = undefined;
    mockedRepIndic.indicador = undefined;
    mockedRepIndic.minimo = undefined;
    mockedRepIndic.planejado = undefined;
    mockedRepIndic.peso = undefined;
    mockedRepIndic.resultado = undefined;
    mockedRepIndic.unidadeMedida = undefined;
    mockedRepIndic.simulacao = undefined;
    expect(mockedRepIndic.PeloMenosUmPreenchido()).toBeTrue();
  });

  it('PeloMenosUmPreenchido should be false', () => {
    mockedRepIndic.desafio = undefined;
    mockedRepIndic.frequencia = undefined;
    mockedRepIndic.indicador = undefined;
    mockedRepIndic.minimo = undefined;
    mockedRepIndic.planejado = undefined;
    mockedRepIndic.peso = undefined;
    mockedRepIndic.resultado = undefined;
    mockedRepIndic.unidadeMedida = undefined;
    mockedRepIndic.simulacao = undefined;
    expect(mockedRepIndic.PeloMenosUmPreenchido()).toBeFalse();
  })*/

  it('Validade geral should be true', () => {
    expect(mockedRepIndic.VerficarValidadeGeral()).toBeTrue();
  });

  it('Validade geral shoud be false', () => {
    mockedRepIndic.desafio = undefined;
    expect(mockedRepIndic.VerficarValidadeGeral()).toBeFalse();
  });

  it('desafio should be false', () => {
    mockedRepIndic.desafio = undefined;
    expect(mockedRepIndic.VerificarDesafio()).toBeFalse();
  });

  it('peso should be false', () => {
    mockedRepIndic.peso = undefined;
    expect(mockedRepIndic.VerificarPeso()).toBeFalse();
  });

  it('frequencia should be false', () => {
    mockedRepIndic.frequencia = undefined;
    expect(mockedRepIndic.VerificarFrequencia()).toBeFalse();
  });

  it('Indicador should be false', () => {
    mockedRepIndic.indicador = undefined;
    expect(mockedRepIndic.VerificarIndicador()).toBeFalse();
  });

  it('minimo should be false', () => {
    mockedRepIndic.minimo = undefined;
    expect(mockedRepIndic.VerificarMinimo()).toBeFalse();
  });

  it('planejado should be false', () => {
    mockedRepIndic.planejado = undefined;
    expect(mockedRepIndic.VerificarPlanejado()).toBeFalse();
  });

  it('resultado should be false', () => {
    mockedRepIndic.resultado = undefined;
    expect(mockedRepIndic.VerificarResultado()).toBeFalse();
  });

  it('simulacao should be false', () => {
    mockedRepIndic.simulacao = undefined;
    expect(mockedRepIndic.VerificarSimulacao()).toBeFalse();
  });

  it('unidadeMedida should be false', () => {
    mockedRepIndic.unidadeMedida = undefined;
    expect(mockedRepIndic.VerificarUnidadeMedida()).toBeFalse();
  });




  it('desafio should be true', () => {
    mockedRepIndic.desafio = 1;
    expect(mockedRepIndic.VerificarDesafio()).toBeTrue();
  });

  it('peso should be true', () => {
    mockedRepIndic.peso = 1;
    expect(mockedRepIndic.VerificarPeso()).toBeTrue();
  });

  it('frequencia should be true', () => {
    mockedRepIndic.frequencia = 'a';
    expect(mockedRepIndic.VerificarFrequencia()).toBeTrue();
  });

  it('Indicador should be true', () => {
    mockedRepIndic.indicador = 'a';
    expect(mockedRepIndic.VerificarIndicador()).toBeTrue();
  });

  it('minimo should be true', () => {
    mockedRepIndic.minimo = 1;
    expect(mockedRepIndic.VerificarMinimo()).toBeTrue();
  });

  it('planejado should be true', () => {
    mockedRepIndic.planejado = 1;
    expect(mockedRepIndic.VerificarPlanejado()).toBeTrue();
  });

  it('resultado should be true', () => {
    mockedRepIndic.resultado = 1;
    expect(mockedRepIndic.VerificarResultado()).toBeTrue();
  });

  it('simulacao should be true', () => {
    mockedRepIndic.simulacao = 1;
    expect(mockedRepIndic.VerificarSimulacao()).toBeTrue();
  });

  it('unidadeMedida should be true', () => {
    mockedRepIndic.unidadeMedida = 'undefined';
    expect(mockedRepIndic.VerificarUnidadeMedida()).toBeTrue();
  });
});
