import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinamentoDialogComponent } from './treinamento-dialog.component';

describe('TreinamentoDialogComponent', () => {
  let component: TreinamentoDialogComponent;
  let fixture: ComponentFixture<TreinamentoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreinamentoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreinamentoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
