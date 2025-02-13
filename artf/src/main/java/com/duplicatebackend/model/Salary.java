package com.duplicatebackend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "salary")
public class Salary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    //@ManyToOne // Many salary records can belong to one employee
    @OneToOne(cascade = CascadeType.ALL)
    private Employee employee;
    private Double basicsalary;
    private Double allowance;
    private Double deduction = 75000.0;
    private Double taxableIncome;
    @PrePersist
    @PreUpdate
    private void calculateTaxableIncome() {
        if (basicsalary == null) {
            basicsalary = 0.0;
        }
        if (allowance == null) {
            allowance = 0.0;
        }
        if (deduction == null) {
            deduction = 0.0;
        }
        taxableIncome = basicsalary - deduction + allowance;
    }
}
