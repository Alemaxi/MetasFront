import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentanteIndicadoresTableComponent } from './representante-indicadores-table.component';

describe('RepresentanteIndicadoresTableComponent', () => {
  let component: RepresentanteIndicadoresTableComponent;
  let fixture: ComponentFixture<RepresentanteIndicadoresTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepresentanteIndicadoresTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepresentanteIndicadoresTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
