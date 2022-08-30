import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFormularioComponent } from './dashboard-formulario.component';

describe('DashboardFormularioComponent', () => {
  let component: DashboardFormularioComponent;
  let fixture: ComponentFixture<DashboardFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
