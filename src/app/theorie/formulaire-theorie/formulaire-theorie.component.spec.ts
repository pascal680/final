import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireTheorieComponent } from './formulaire-theorie.component';

describe('FormulaireTheorieComponent', () => {
  let component: FormulaireTheorieComponent;
  let fixture: ComponentFixture<FormulaireTheorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireTheorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireTheorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
