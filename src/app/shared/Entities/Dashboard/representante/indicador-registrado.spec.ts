import { IndicadorRegistro } from './Indicador-registrado';



describe('IndicadorRegistro', () => {

  let indicadorRegistro: IndicadorRegistro;
  
  beforeEach(() => {
    indicadorRegistro = new IndicadorRegistro();
    indicadorRegistro.id = 'id';
    indicadorRegistro.processo = 'proc';
    indicadorRegistro.nomeIndicador = 'nome';
    indicadorRegistro.unidadeMedida = 'un'
    indicadorRegistro.frequencia = 'freq';
    indicadorRegistro.descricao = 'desc';
  })

  it('turn object properties into a string', () => {

    expect(indicadorRegistro.ToString()).toBe('idprocnomeunfreqdesc')

  });

  it('Check if the value is within the object', () => {

    expect(indicadorRegistro.SearchFor('nome')).toBe(true);
    
  })
});
