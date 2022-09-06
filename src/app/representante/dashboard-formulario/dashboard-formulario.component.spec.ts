import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFormularioComponent } from './dashboard-formulario.component';
import { DashboardService } from '../../services/Dashboard/dashboard.service';
import { RepresentanteIndicadorEntity } from '../../shared/Entities/Dashboard/representante/representante-indicador-entity';
import { DashBoardServiceMock } from '../../shared/Mocks/DashBoardMock';
import { AppStateServiceMock } from '../../shared/Mocks/AppStateServiceMock';
import { AppStateService } from '../../services/app-state/app-state.service';

describe('DashboardFormularioComponent', () => {
  let component: DashboardFormularioComponent;
  let fixture: ComponentFixture<DashboardFormularioComponent>;
  let dashboardServiceMock: DashboardService;
  let appStateServiceMock: AppStateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardFormularioComponent ],
      providers: [
        DashboardFormularioComponent,
        {provide: DashboardService, useClass: DashBoardServiceMock},
        {provide: AppStateService, useClass: AppStateServiceMock}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardFormularioComponent);
    component = fixture.componentInstance;
    dashboardServiceMock = TestBed.inject(DashboardService);
    appStateServiceMock = TestBed.inject(AppStateService);
    fixture.detectChanges();
  });

  it('should take out all the selected indices', () => {
    let indice1 = new RepresentanteIndicadorEntity();
    indice1.selected = true;
    
    let indice2 = new RepresentanteIndicadorEntity();
    indice2.selected = true;

    component.formState.indicadores.push(indice1);
    component.formState.indicadores.push(indice2);

    expect(component.formState.indicadores.length).toBe(2);

    component.RemoverIndices();

    expect(component.formState.indicadores.length).toBe(0);
  });

  it('should change the mes, showMes and take indicadores', () => {
    component.MesNavegado(2);

    expect(component.selectedMes).toBe(2);
    expect(component.showMes).toBe(true);
    setTimeout(() => {
      expect(component.formState.indicadores.length).toBe(1)
    }, 2);
    
    component.MesNavegado(12);

    expect(component.selectedMes).toBe(12);
    expect(component.showMes).toBe(false);
    setTimeout(() => {
      expect(component.faltas.length).toBe(1);
      expect(component.resultadosList.length).toBe(1);
    }, 2);
  });


});
