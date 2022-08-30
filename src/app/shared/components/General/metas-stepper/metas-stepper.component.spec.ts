import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasStepperComponent } from './Metas-stepper.component';

describe('MetasStepperComponent', () => {
  let component: MetasStepperComponent;
  let fixture: ComponentFixture<MetasStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetasStepperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetasStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
