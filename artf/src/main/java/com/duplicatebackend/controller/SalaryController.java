package com.duplicatebackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.duplicatebackend.model.Salary;
import com.duplicatebackend.service.SalaryService;

@RestController
@CrossOrigin
public class SalaryController {
    @Autowired
    SalaryService service;
    @PostMapping("/salary/{username}")
    public void postSalary(@PathVariable String username,@RequestBody Salary data) {
        service.addSalary(username,data);
    }

    @GetMapping("/salary/{username}")
    public Salary getSalary(@PathVariable String username) {
        return service.getSalaryByEmployeeUsername(username);
    }

}

    