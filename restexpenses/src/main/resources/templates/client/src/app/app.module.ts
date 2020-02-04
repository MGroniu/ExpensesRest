import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpenseService } from './service/expense.service';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseListComponent,
    ExpenseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ExpenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
