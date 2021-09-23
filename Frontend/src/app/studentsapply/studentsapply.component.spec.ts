import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsapplyComponent } from './studentsapply.component';

describe('StudentsapplyComponent', () => {
  let component: StudentsapplyComponent;
  let fixture: ComponentFixture<StudentsapplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsapplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
