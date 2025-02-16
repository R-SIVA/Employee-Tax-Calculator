package com.duplicatebackend.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.duplicatebackend.model.Employee;
import com.duplicatebackend.service.EmployeeService;

@RestController
@CrossOrigin
public class EmployeeController {

    @Autowired
    EmployeeService service;
    @GetMapping("/employee/{username}")
    public Employee getEmployeeByUsername(@PathVariable String username){
        return service.getEmployeeByUsername(username);
    }

    @PostMapping("/employee")
    public void createEmployee(@RequestBody Employee data){
        service.addEmployee(data);
    }
}
