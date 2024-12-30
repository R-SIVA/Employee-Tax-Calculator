package com.prjgrp.artf.service;

import com.prjgrp.artf.model.Payroll;
import com.prjgrp.artf.repository.PayrollRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PayrollService {

    @Autowired
    private PayrollRepository payrollRepository;

    // Create a new Payroll record
    public Payroll createPayroll(Payroll payroll) {
        return payrollRepository.save(payroll);
    }

    // Retrieve all Payroll records
    public List<Payroll> getAllPayrolls() {
        return payrollRepository.findAll();
    }

    // Retrieve a Payroll record by its ID
    public Payroll getPayrollById(Long id) {
        return payrollRepository.findById(id).orElse(null);
    }

    // Update a Payroll record by its ID
    public Payroll updatePayroll(Long id, Payroll payroll) {
        payroll.setId(id);
        return payrollRepository.save(payroll);
    }

    // Delete a Payroll record by its ID
    public void deletePayroll(Long id) {
        payrollRepository.deleteById(id);
    }
}
