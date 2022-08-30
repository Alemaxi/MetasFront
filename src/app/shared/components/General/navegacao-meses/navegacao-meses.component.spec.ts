import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacaoMesesComponent } from './navegacao-meses.component';

describe('NavegacaoMesesComponent', () => {
  let component: NavegacaoMesesComponent;
  let fixture: ComponentFixture<NavegacaoMesesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavegacaoMesesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavegacaoMesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
