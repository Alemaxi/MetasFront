import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoSolicitacoesComponent } from './historico-solicitacoes.component';

describe('HistoricoAlteracoesComponent', () => {
  let component: HistoricoSolicitacoesComponent;
  let fixture: ComponentFixture<HistoricoSolicitacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoSolicitacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoSolicitacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
