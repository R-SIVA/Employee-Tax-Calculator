package com.duplicatebackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.duplicatebackend.model.Employee;
import com.duplicatebackend.model.Tax;

@Repository
public interface TaxRepo extends JpaRepository<Tax,Long> {
    public Tax findByEmployeeUsername(String username);
    public Tax findByEmployee(Employee data);
}