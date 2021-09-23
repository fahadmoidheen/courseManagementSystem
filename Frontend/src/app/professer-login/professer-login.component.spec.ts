import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesserLoginComponent } from './professer-login.component';

describe('ProfesserLoginComponent', () => {
  let component: ProfesserLoginComponent;
  let fixture: ComponentFixture<ProfesserLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesserLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
