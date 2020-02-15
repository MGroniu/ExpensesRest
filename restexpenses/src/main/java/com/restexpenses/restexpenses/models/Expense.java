package com.restexpenses.restexpenses.models;

import org.springframework.format.annotation.DateTimeFormat;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDate;
import java.time.temporal.WeekFields;
import java.util.Locale;

@Entity
public class Expense {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int id;

    private int amount;

    private String category;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate localDate;

    public Expense(int id, int amount, String category) {
        this.id = id;
        this.amount = amount;
        this.category = category;
    }

    public Expense() {
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public LocalDate getLocalDate() {
        return localDate;
    }


    public void setLocalDate(LocalDate localDate) {
        this.localDate = localDate;
    }

    public int getWeekNumber(){
        WeekFields weekFields = WeekFields.of(Locale.getDefault());
        try{
            return getLocalDate().get(weekFields.weekOfWeekBasedYear());
        } catch(Exception e){
            return -1;
        }
    }

    @Override
    public String toString() {
        return "ID: " + this.getId() + " Amount: " + this.getAmount() + " Category: " + this.getCategory()
                + " LocalDate: " + this.getLocalDate();
    }
}

