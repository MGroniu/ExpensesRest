import { Component, OnInit } from '@angular/core';
import {Expense} from '../model/expense';
import {ExpenseService} from '../service/expense.service';

@Component({
  selector: 'app-future-expense-list',
  templateUrl: './future-expense-list.component.html',
  styleUrls: ['./future-expense-list.component.css']
})
export class FutureExpenseListComponent implements OnInit {

  expenses: Expense[];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.expenseService.findFuture().subscribe(data => {
      this.expenses = data;

    });
  }

  deleteExpense(id) {
    this.expenseService.delete(id).subscribe();
    window.location.reload();

  }

}
