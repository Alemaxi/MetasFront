import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusMetasComponent } from './status-metas.component';

describe('StatusMetasComponent', () => {
  let component: StatusMetasComponent;
  let fixture: ComponentFixture<StatusMetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusMetasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusMetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
