import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureExpenseListComponent } from './future-expense-list.component';

describe('FutureExpenseListComponent', () => {
  let component: FutureExpenseListComponent;
  let fixture: ComponentFixture<FutureExpenseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureExpenseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureExpenseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
