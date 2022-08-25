import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacaoMenuComponent } from './notificacao-menu.component';

describe('NotificacaoMenuComponent', () => {
  let component: NotificacaoMenuComponent;
  let fixture: ComponentFixture<NotificacaoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificacaoMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificacaoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
