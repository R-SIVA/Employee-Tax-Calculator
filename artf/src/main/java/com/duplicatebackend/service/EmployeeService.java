package com.duplicatebackend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.duplicatebackend.model.Employee;
import com.duplicatebackend.repository.EmployeeRepo;

@Service
public class EmployeeService {
    @Autowired
    EmployeeRepo repo;
    public Optional<Employee> getEmployee(Long id){
        return repo.findById(id);
    }
    public Employee getEmployeeByUsername(String username){
        return repo.findByUsername(username);
    }
    public void addEmployee(Employee data){
        repo.save(data);
    }
    
}
