import { MonthExpenseListComponent } from './month-expense-list/month-expense-list.component';
import { WeekExpenseListComponent } from './week-expense-list/week-expense-list.component';
import { TodayExpenseListComponent } from './today-expense-list/today-expense-list.component';
import { FutureExpenseListComponent } from './future-expense-list/future-expense-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';

const routes: Routes = [
  { path: 'expenses', component: ExpenseListComponent },
  { path: 'addExpense', component: ExpenseFormComponent },
  { path: 'expenses/future', component:FutureExpenseListComponent},
  { path: 'expenses/today', component: TodayExpenseListComponent},
  { path: 'expenses/thisWeek', component: WeekExpenseListComponent},
  { path: 'expenses/thisMonth', component:MonthExpenseListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
