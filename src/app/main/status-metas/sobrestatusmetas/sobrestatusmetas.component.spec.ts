import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobrestatusmetasComponent } from './sobrestatusmetas.component';

describe('SobrestatusmetasComponent', () => {
  let component: SobrestatusmetasComponent;
  let fixture: ComponentFixture<SobrestatusmetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobrestatusmetasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobrestatusmetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
