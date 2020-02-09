import { Component, OnInit } from '@angular/core';
import {Expense} from '../model/expense';
import {ExpenseService} from '../service/expense.service';

@Component({
  selector: 'app-month-expense-list',
  templateUrl: './month-expense-list.component.html',
  styleUrls: ['./month-expense-list.component.css']
})
export class MonthExpenseListComponent implements OnInit {

  expenses: Expense[];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.expenseService.findThisMonth().subscribe(data => {
      this.expenses = data;

    });
  }

  deleteExpense(id) {
    this.expenseService.delete(id).subscribe();
    window.location.reload();

  }

}
