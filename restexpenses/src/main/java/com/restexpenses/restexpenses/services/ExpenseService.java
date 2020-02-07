package com.restexpenses.restexpenses.services;

import com.restexpenses.restexpenses.models.Expense;
import com.restexpenses.restexpenses.repo.ExpenseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
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
//        expense.setLocalDate(LocalDate.now());
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

    public List<Expense> getFutureExpenses(){
        return expenseRepo.findAllByLocalDateAfter(LocalDate.now());
    }

    public List<Expense> getTodayExpenses(){
        return expenseRepo.findByLocalDate(LocalDate.now());
    }

    public List<Expense> getThisMonthExpenses(){
        List<Expense> expenses = getAllExpenses();
        return expenses.stream()
                .filter(element -> element.getLocalDate().getMonth() == LocalDate.now().getMonth() &
                        element.getLocalDate().getYear() == LocalDate.now().getYear())
                .collect(Collectors.toList());
    }

    public List<Expense> getThisYearExpenses(){
        List<Expense> expenses = getAllExpenses();
        return expenses.stream()
                .filter(element -> element.getLocalDate().getYear() == LocalDate.now().getYear())
                .collect(Collectors.toList());
    }


}
//
//    public List<Expense> getAllExpenseMonthYearWeek(LocalDateTime localDateTime){
//        List<Expense> expenses = getAllExpenses();
//        WeekFields weekFields = WeekFields.of(Locale.getDefault());
//        return expenses.stream()
//                .filter(element -> element.getLocalTime().getMonthValue()==localDateTime.getMonthValue() &
//                        element.getLocalTime().getYear()==localDateTime.getYear() &
//                        element.getWeekNumber() == localDateTime.toLocalDate().get(weekFields.weekOfWeekBasedYear()))
//                .collect(Collectors.toList());

//
//    public List<Expense> getTodaysExpenses(LocalDateTime localDateTime){
//        return getAllExpenses().stream()
//                .filter(element -> element.getLocalTime().toLocalDate().equals(localDateTime.toLocalDate()))
//                .collect(Collectors.toList());
//    }

