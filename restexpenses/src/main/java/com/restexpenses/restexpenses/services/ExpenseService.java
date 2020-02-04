package com.restexpenses.restexpenses.services;

import com.restexpenses.restexpenses.models.Expense;
import com.restexpenses.restexpenses.repo.ExpenseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.temporal.WeekFields;
import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

@Service
public class ExpenseService {


    private ExpenseRepo expenseRepo;

    @Autowired
    public ExpenseService(ExpenseRepo expenseRepo) {
        this.expenseRepo = expenseRepo;
    }

    public void saveExpense(Expense expense){
        expenseRepo.save(expense);
    }

    public List<Expense> getAllExpenses(){
        return expenseRepo.findAll();
    }

    public Expense getExpense(int id){
        return expenseRepo.findById(id).get();
    }

    public void deleteExpense(int id){
        expenseRepo.delete(getExpense(id));
    }

//    public List<Expense> getAllExpenseMonthYear(LocalDateTime localDateTime){
//        List<Expense> expenses = getAllExpenses();
//        return expenses.stream()
//                .filter(element -> element.getLocalTime().getMonthValue()==localDateTime.getMonthValue() &
//                        element.getLocalTime().getYear()==localDateTime.getYear())
//                .collect(Collectors.toList());
//    }
//
//    public List<Expense> getAllExpenseMonthYearWeek(LocalDateTime localDateTime){
//        List<Expense> expenses = getAllExpenses();
//        WeekFields weekFields = WeekFields.of(Locale.getDefault());
//        return expenses.stream()
//                .filter(element -> element.getLocalTime().getMonthValue()==localDateTime.getMonthValue() &
//                        element.getLocalTime().getYear()==localDateTime.getYear() &
//                        element.getWeekNumber() == localDateTime.toLocalDate().get(weekFields.weekOfWeekBasedYear()))
//                .collect(Collectors.toList());
//    }
//
//    public List<Expense> getTodaysExpenses(LocalDateTime localDateTime){
//        return getAllExpenses().stream()
//                .filter(element -> element.getLocalTime().toLocalDate().equals(localDateTime.toLocalDate()))
//                .collect(Collectors.toList());
//    }
}
