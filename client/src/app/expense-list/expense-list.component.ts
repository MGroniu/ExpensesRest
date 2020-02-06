import { Component, OnInit } from '@angular/core';
import {Expense} from '../model/expense';
import {ExpenseService} from '../service/expense.service';


@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  expenses: Expense[];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.expenseService.findAll().subscribe(data => {
      this.expenses = data;

    });
  }

  deleteExpense(id) {
    this.expenseService.delete(id).subscribe();
    window.location.reload();

  }



}
