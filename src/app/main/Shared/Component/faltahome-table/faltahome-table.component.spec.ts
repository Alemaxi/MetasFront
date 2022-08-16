import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaltahomeTableComponent } from './faltahome-table.component';

describe('FaltahomeTableComponent', () => {
  let component: FaltahomeTableComponent;
  let fixture: ComponentFixture<FaltahomeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaltahomeTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaltahomeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
