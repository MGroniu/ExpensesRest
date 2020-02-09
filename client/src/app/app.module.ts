import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpenseService } from './service/expense.service';
import { FutureExpenseListComponent } from './future-expense-list/future-expense-list.component';
// import {MatDatepickerModule} from '@angular/material/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodayExpenseListComponent } from './today-expense-list/today-expense-list.component';
import { WeekExpenseListComponent } from './week-expense-list/week-expense-list.component';
import { MonthExpenseListComponent } from './month-expense-list/month-expense-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ExpenseListComponent,
    ExpenseFormComponent,
    FutureExpenseListComponent,
    TodayExpenseListComponent,
    WeekExpenseListComponent,
    MonthExpenseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
    // MatDatepickerModule

  ],
  providers: [ExpenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
