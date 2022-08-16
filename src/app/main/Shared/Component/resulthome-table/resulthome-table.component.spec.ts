import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResulthomeTableComponent } from './resulthome-table.component';

describe('ResulthomeTableComponent', () => {
  let component: ResulthomeTableComponent;
  let fixture: ComponentFixture<ResulthomeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResulthomeTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResulthomeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
