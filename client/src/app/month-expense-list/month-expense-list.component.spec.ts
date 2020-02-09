import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthExpenseListComponent } from './month-expense-list.component';

describe('MonthExpenseListComponent', () => {
  let component: MonthExpenseListComponent;
  let fixture: ComponentFixture<MonthExpenseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthExpenseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthExpenseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
