package com.duplicatebackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name="tax")
public class Tax {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private Employee employee;
    private Double taxableIncome;
    private Double taxAmount;
    @PrePersist
    @PreUpdate
    private void calculateTaxableIncome(){
    double income=taxableIncome;
    if (taxableIncome == null) {
        taxableIncome = 0.0;
    }
    
    if (income < 1200000) { 
        taxAmount=0.0;
    }
    else{
    double tax = 0;
    
    if (income > 2400000) {
        tax += (income - 2400000) * 0.30;
        income = 2400000;
    }
    if (income > 2000000) {
        tax += (income - 2000000) * 0.25;
        income = 2000000;
    }
    if (income > 1600000) {
        tax += (income - 1600000) * 0.20;
        income = 1600000;
    }
    if (income > 1200000) {
        tax += (income - 1200000) * 0.15;
        income = 1200000;
    }
    if (income > 800000) {
        tax += (income - 800000) * 0.10;
        income = 800000;
    }
    if (income > 400000) {
        tax += (income - 400000) * 0.05;
        income = 400000;
    }
    
    taxAmount=tax;
}
}
}

