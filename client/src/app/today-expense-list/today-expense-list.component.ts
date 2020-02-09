import { Component, OnInit } from '@angular/core';
import {Expense} from '../model/expense';
import {ExpenseService} from '../service/expense.service';

@Component({
  selector: 'app-today-expense-list',
  templateUrl: './today-expense-list.component.html',
  styleUrls: ['./today-expense-list.component.css']
})
export class TodayExpenseListComponent implements OnInit {

  expenses: Expense[];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.expenseService.findToday().subscribe(data => {
      this.expenses = data;

    });
  }

  deleteExpense(id) {
    this.expenseService.delete(id).subscribe();
    window.location.reload();

  }

}
