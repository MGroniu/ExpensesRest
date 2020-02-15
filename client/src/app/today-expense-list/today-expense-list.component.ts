import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Expense} from '../model/expense';
import {ExpenseService} from '../service/expense.service';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-today-expense-list',
  templateUrl: './today-expense-list.component.html',
  styleUrls: ['./today-expense-list.component.css']
})
export class TodayExpenseListComponent implements OnInit {

  @ViewChild('content', { static: true }) content: ElementRef;



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

  public downloadPDF(){
    let doc = new jsPDF();
    let specialElementHandlers = {
      '#editor':function(element, renderer){
        return true;
      }
    };

    let content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers':specialElementHandlers
    });

    doc.save('test.pdf');
  }

}
