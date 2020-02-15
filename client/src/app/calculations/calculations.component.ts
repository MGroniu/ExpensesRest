import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.css']
})
export class CalculationsComponent implements OnInit {

  @Input() expenses;

  constructor() { }

  ngOnInit() {
  }

  calculateSum(category: string){
    // return this.expenses.filter(expense => expense.category == category).reduce(function (acc, cur){return acc + cur;});

    let sum = 0;
    for(let i = 0; i < this.expenses.length; i++){
      if(this.expenses[i].category == category){
        sum = sum + this.expenses[i].amount;
      }
    }
    return sum;
  }

  calculateMax(category: string){
    return Math.max.apply(Math, this.expenses.filter(expense => expense.category == category).map(function(o) { return o.amount; }));
    // let max = 0;
    // for(let i = 0; i < this.expenses.length; i++){
    //   if(this.expenses[i].amount > max){
    //     max = this.expenses[i].amount;
    //   }
    // }
    // return max;
  }

  calculateMin(category: string){
    return Math.max.apply(Math, this.expenses.filter(expense => expense.category == category).map(function(o) { return o.amount; }));
    // let min = this.expenses[0].amount;
    // for(let i = 0; i < this.expenses.length; i++){
    //   if(this.expenses[i].amount < min){
    //     min = this.expenses[i].amount;
    //   }
    // }
    // return min;
  }

}
