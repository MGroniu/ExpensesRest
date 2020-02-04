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
        expenseService.saveExpense(expense);
    }

}
