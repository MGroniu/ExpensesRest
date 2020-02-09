import { Component, OnInit } from '@angular/core';
import {Expense} from '../model/expense';
import {ExpenseService} from '../service/expense.service';

@Component({
  selector: 'app-week-expense-list',
  templateUrl: './week-expense-list.component.html',
  styleUrls: ['./week-expense-list.component.css']
})
export class WeekExpenseListComponent implements OnInit {

  expenses: Expense[];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.expenseService.findThisWeek().subscribe(data => {
      this.expenses = data;

    });
  }

  deleteExpense(id) {
    this.expenseService.delete(id).subscribe();
    window.location.reload();

  }

}
