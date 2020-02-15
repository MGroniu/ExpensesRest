package com.restexpenses.restexpenses.controllers;

import com.restexpenses.restexpenses.models.Expense;
import com.restexpenses.restexpenses.services.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ExpenseController {

    private ExpenseService expenseService;

    @Autowired
    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @GetMapping("/expenses")
    public List<Expense> getAll(){
        return expenseService.getAllExpenses();
    }

    @PostMapping("/expenses")
    public void addExpense(@RequestBody Expense expense){
        System.out.println(expense);
        expenseService.saveExpense(expense);
    }

    @DeleteMapping("/expenses/{id}")
    public void deleteExpense(@PathVariable int id){
        expenseService.deleteExpense(id);
    }

    @GetMapping("/expenses/future")
    public List<Expense> getFutureExpenses(){
        return expenseService.getFutureExpenses();
    }

    @GetMapping("/expenses/today")
    public List<Expense> getTodayExpenses(){
        return expenseService.getTodayExpenses();
    }

    @GetMapping("/expenses/thisYear")
    public List<Expense> getThisYearExpenses(){
        return expenseService.getThisYearExpenses();
    }

    @GetMapping("/expenses/thisWeek")
    public List<Expense> getThisWeekExpenses(){
        return expenseService.getThisWeekExpenses();
    }

    @GetMapping("/expenses/thisMonth")
    public List<Expense> getThisMonth(){
        return expenseService.getThisMonthExpenses();
    }


}
