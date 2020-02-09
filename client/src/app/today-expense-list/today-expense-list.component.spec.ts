import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayExpenseListComponent } from './today-expense-list.component';

describe('TodayExpenseListComponent', () => {
  let component: TodayExpenseListComponent;
  let fixture: ComponentFixture<TodayExpenseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayExpenseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayExpenseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
