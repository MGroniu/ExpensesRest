import { FutureExpenseListComponent } from './future-expense-list/future-expense-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';

const routes: Routes = [
  { path: 'expenses', component: ExpenseListComponent },
  { path: 'addExpense', component: ExpenseFormComponent },
  { path: 'expenses/future', component:FutureExpenseListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
