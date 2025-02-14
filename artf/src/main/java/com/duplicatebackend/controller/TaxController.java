package com.duplicatebackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.duplicatebackend.model.Salary;
import com.duplicatebackend.model.Tax;
import com.duplicatebackend.service.TaxService;

@RestController
@CrossOrigin
public class TaxController {
    @Autowired
    TaxService service;
    @PostMapping("/tax/{username}")
    public void postTax(@PathVariable String username,@RequestBody Tax data) {
        service.addTax(username,data);
    }
    
}
