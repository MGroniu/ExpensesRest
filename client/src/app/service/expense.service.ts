import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Expense} from '../model/expense';
// import {Observable} from 'rxjs/Observable';
import { Observable } from 'rxjs';

@Injectable()
export class ExpenseService {

  private expensesUrl: string;
//
  constructor(private http: HttpClient) {
    this.expensesUrl = 'http://localhost:8080/expenses';
    // this.expensesUrl = 'https://restexpenses.herokuapp.com/expenses';
   }

   public findAll(): Observable<Expense[]> {
     return this.http.get<Expense[]>(this.expensesUrl);
   }

   public save(expense: Expense) {
     return this.http.post<Expense>(this.expensesUrl, expense);
   }

   public delete(id: string) {
     return this.http.delete(this.expensesUrl + '/' + id);
   }

   public findFuture(): Observable<Expense[]> {
     return this.http.get<Expense[]>('http://localhost:8080/expenses/future');
   }

}
