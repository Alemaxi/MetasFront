import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarIndicadoresTableComponent } from './selecionar-indicadores-table.component';

describe('SelecionarIndicadoresTableComponent', () => {
  let component: SelecionarIndicadoresTableComponent;
  let fixture: ComponentFixture<SelecionarIndicadoresTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecionarIndicadoresTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecionarIndicadoresTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
