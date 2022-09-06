import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoIndicadoresComponent } from './selecao-indicadores.component';

describe('SelecaoIndicadoresComponent', () => {
  let component: SelecaoIndicadoresComponent;
  let fixture: ComponentFixture<SelecaoIndicadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecaoIndicadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecaoIndicadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
