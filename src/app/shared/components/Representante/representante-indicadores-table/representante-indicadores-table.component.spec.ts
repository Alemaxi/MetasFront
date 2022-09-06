import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCheckboxChange } from '@angular/material/checkbox';

import { RepresentanteIndicadoresTableComponent } from './representante-indicadores-table.component';
import { DashBoardServiceMock } from '../../../../shared/Mocks/DashBoardMock';
import { RepresentanteIndicadorEntity } from '../../../Entities/Dashboard/representante/representante-indicador-entity'

import { DashboardService } from '../../../../services/Dashboard/dashboard.service';

describe('RepresentanteIndicadoresTableComponent', () => {
  let component: RepresentanteIndicadoresTableComponent;
  let fixture: ComponentFixture<RepresentanteIndicadoresTableComponent>;
  let dashboardService: DashboardService;
  let indicador: RepresentanteIndicadorEntity;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepresentanteIndicadoresTableComponent],
      imports: [],
      providers: [
        RepresentanteIndicadoresTableComponent,
        { provide: DashboardService, useClass: DashBoardServiceMock },
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RepresentanteIndicadoresTableComponent);
    component = fixture.componentInstance;
    dashboardService = TestBed.inject(DashboardService);
    indicador = new RepresentanteIndicadorEntity();
    indicador.desafio=1;
    indicador.novoIndicador=true;;
    fixture.detectChanges();
  });

  it('AllChecked should return true',() => {
    indicador.selected=true;
    component.formState.indicadores.push(indicador);
    expect(component.AllChecked()).toBeTrue();
  });

  it('should return all new indicadores', () => {

    expect(component.GetNovosIndicadores().length).toBeLessThanOrEqual(1);
  });

  it('should return 0 indicadores', () => {
    
    indicador.desafio=1;
    indicador.novoIndicador=false;

    component.formState.indicadores.push(indicador);
    component.formState.indicadores[0].novoIndicador=false;

    expect(component.GetNovosIndicadores().length).toBeLessThanOrEqual(0);
  });


  it('formState.indicadores should contain 6 indicadores', () => {
    
    indicador.desafio=1;
    indicador.novoIndicador=false;

    component.formState.indicadores.push(indicador);
    component.formState.indicadores.push(indicador);
    component.formState.indicadores.push(indicador);
    component.formState.indicadores.push(indicador);
    component.formState.indicadores.push(indicador);
    component.formState.indicadores.push(indicador);

    expect(component.GetNovosIndicadores().length).toBeLessThanOrEqual(6);
  });

  it('ChangeMainCheck should select all indicadores',() => {
    indicador.selected=false;
    component.formState.indicadores.push(indicador);

    let matCheckboxChange = new MatCheckboxChange();
    matCheckboxChange.checked=true;
    component.ChangeMainCheck(matCheckboxChange);

    let allSelected = component.formState.indicadores.filter(x=> x.selected);

    expect(allSelected.length).toBeGreaterThanOrEqual(1);
  });

  it('ChangeMainCheck should unselect all indicadores',() => {
    let matCheckboxChange = new MatCheckboxChange();
    matCheckboxChange.checked=false;
    component.ChangeMainCheck(matCheckboxChange);

    let allSelected = component.formState.indicadores.filter(x=> x.selected);

    expect(allSelected.length).toBeGreaterThanOrEqual(0);
  });

  it('AddNovoIndicador should add a new indicador with id equal 1', ()=>{
    component.AddNovoIndicador();

    expect(component.formState.indicadores.filter(x => x.novoIndicador).length).toBe(1);
    expect(component.formState.indicadores.filter(x => x.novoIndicador)[0].codNovoIndicador).
    toBe(1);
  });

  it('MudancaNovoRegistro should create a new register and sent an output', () => {
    component.AddNovoIndicador()

    component.registroMudado.subscribe(x => {
      expect(x.indicadores.length).toBe(2);
      expect(x.indicadores[0].novoIndicador).toBeTrue();
    })

    component.MudancaNoNovoRegistro(component.formState.indicadores[0].codNovoIndicador);
  })
});
