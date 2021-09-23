import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesserSignupComponent } from './professer-signup.component';

describe('ProfesserSignupComponent', () => {
  let component: ProfesserSignupComponent;
  let fixture: ComponentFixture<ProfesserSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesserSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesserSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
