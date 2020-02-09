import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekExpenseListComponent } from './week-expense-list.component';

describe('WeekExpenseListComponent', () => {
  let component: WeekExpenseListComponent;
  let fixture: ComponentFixture<WeekExpenseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekExpenseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekExpenseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
