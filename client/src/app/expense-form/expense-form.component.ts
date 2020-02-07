import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseService } from '../service/expense.service';
import { Expense } from '../model/expense';


@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {

  expense:Expense;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private expenseService: ExpenseService) {
      this.expense = new Expense();
     }

     onSubmit(){
       this.expenseService.save(this.expense).subscribe(result => this.gotoExpenseList());
     }

     gotoExpenseList(){
       this.router.navigate(['/expenses'])
     }

  ngOnInit() {
  }

}
