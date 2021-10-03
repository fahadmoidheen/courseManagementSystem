import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedStdListComponent } from './accepted-std-list.component';

describe('AcceptedStdListComponent', () => {
  let component: AcceptedStdListComponent;
  let fixture: ComponentFixture<AcceptedStdListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedStdListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedStdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
