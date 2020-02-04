package com.restexpenses.restexpenses.repo;

import com.restexpenses.restexpenses.models.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpenseRepo extends JpaRepository<Expense, Integer> {
}
