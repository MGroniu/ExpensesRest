package com.restexpenses.restexpenses.repo;

import com.restexpenses.restexpenses.models.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface ExpenseRepo extends JpaRepository<Expense, Integer> {

    List<Expense> findAllByLocalDateAfter(LocalDate localDate);
    List<Expense> findByLocalDate(LocalDate localDate);
}
