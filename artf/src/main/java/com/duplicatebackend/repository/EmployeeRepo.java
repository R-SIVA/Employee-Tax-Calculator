package com.duplicatebackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.duplicatebackend.model.Employee;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee,Long>{
    public Employee findByUsername(String username);
}
