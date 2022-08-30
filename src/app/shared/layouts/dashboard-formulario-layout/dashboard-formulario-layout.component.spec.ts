import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFormularioLayoutComponent } from './dashboard-formulario-layout.component';

describe('DashboardFormularioLayoutComponent', () => {
  let component: DashboardFormularioLayoutComponent;
  let fixture: ComponentFixture<DashboardFormularioLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardFormularioLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardFormularioLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
