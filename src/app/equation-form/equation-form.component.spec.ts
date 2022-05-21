import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquationFormComponent } from './equation-form.component';

describe('EquationFormComponent', () => {
  let component: EquationFormComponent;
  let fixture: ComponentFixture<EquationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
