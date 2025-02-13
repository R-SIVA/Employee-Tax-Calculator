package com.duplicatebackend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.duplicatebackend.model.Employee;
import com.duplicatebackend.model.Salary;
import com.duplicatebackend.repository.EmployeeRepo;
import com.duplicatebackend.repository.SalaryRepo;

@Service
public class SalaryService {
    @Autowired
    SalaryRepo repo;
    @Autowired
    EmployeeRepo user;
    public Optional <Salary> getSalary(Long id){
                return repo.findById(id);
    }

    public Salary getSalaryByEmployeeUsername(String username){
        Employee emp=user.findByUsername(username);
        // System.out.println(emp);
        // System.out.println(username);
        // System.out.println(repo.findByEmployee(emp));
        return repo.findByEmployee(emp);
    }
    public void addSalary(String username,Salary data){
        Employee emp=user.findByUsername(username);
        data.setEmployee(emp);
        repo.save(data);
    }
    public void updateSalary(String username,Salary data){
        Employee emp=user.findByUsername(username);
        Salary s=repo.findByEmployee(emp);
        if(data.getAllowance()!=null)
        s.setAllowance(data.getAllowance());

        if(data.getBasicsalary()!=null)
        s.setBasicsalary(data.getBasicsalary());

        if(data.getTaxableIncome()!=null)
        s.setTaxableIncome(data.getTaxableIncome());

        

        // System.out.println(emp);
        // System.out.println(data);
        // s.setEmployee(emp);

        repo.save(s);
    }


    
}