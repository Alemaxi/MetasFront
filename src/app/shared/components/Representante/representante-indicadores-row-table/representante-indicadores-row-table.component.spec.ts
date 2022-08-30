import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentanteIndicadoresRowTableComponent } from './representante-indicadores-row-table.component';

describe('RepresentanteIndicadoresRowTableComponent', () => {
  let component: RepresentanteIndicadoresRowTableComponent;
  let fixture: ComponentFixture<RepresentanteIndicadoresRowTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepresentanteIndicadoresRowTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepresentanteIndicadoresRowTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
