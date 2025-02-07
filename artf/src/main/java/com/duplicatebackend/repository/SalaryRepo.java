package com.duplicatebackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.duplicatebackend.model.Employee;
import com.duplicatebackend.model.Salary;

@Repository
public interface SalaryRepo extends JpaRepository<Salary,Long> {
    public Salary findByEmployeeUsername(String username);

    public Salary findByEmployee(Employee data);
} 