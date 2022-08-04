import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaCelulaComponent } from './minha-celula.component';

describe('MinhaCelulaComponent', () => {
  let component: MinhaCelulaComponent;
  let fixture: ComponentFixture<MinhaCelulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinhaCelulaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhaCelulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
