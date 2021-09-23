import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesserHomeComponent } from './professer-home.component';

describe('ProfesserHomeComponent', () => {
  let component: ProfesserHomeComponent;
  let fixture: ComponentFixture<ProfesserHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesserHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
