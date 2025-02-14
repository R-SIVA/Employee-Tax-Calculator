package com.duplicatebackend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.duplicatebackend.model.Employee;
import com.duplicatebackend.model.Tax;
import com.duplicatebackend.repository.EmployeeRepo;
import com.duplicatebackend.repository.TaxRepo;

@Service
public class TaxService {
    @Autowired
    TaxRepo repo;
    @Autowired
    EmployeeRepo user;
    public Optional <Tax> getTax(Long id){
        return repo.findById(id);
    }

    public Tax getTaxByEmployeeUsername(String username){
    Employee emp=user.findByUsername(username);
    return repo.findByEmployee(emp);
    }

    public void addTax(String username,Tax data){
        Employee emp=user.findByUsername(username);
        data.setEmployee(emp);
        repo.save(data);
    }

    public void updateSalary(String username,Tax data){
        Employee emp=user.findByUsername(username);
        Tax s=repo.findByEmployee(emp);
        if(data.getTaxAmount()!=null)
        s.setTaxAmount(data.getTaxAmount());

        if(data.getTaxableIncome()!=null)
        s.setTaxableIncome(data.getTaxableIncome());
        repo.save(s);
    }

    
}

// import com.duplicatebackend.model.Employee;
// public class SalaryService {
//     public void updateSalary(String username,Salary data){
//         Employee emp=user.findByUsername(username);
//         Salary s=repo.findByEmployee(emp);
//         if(data.getAllowance()!=null)
//         s.setAllowance(data.getAllowance());

//         if(data.getBasicsalary()!=null)
//         s.setBasicsalary(data.getBasicsalary());

//         if(data.getTaxableIncome()!=null)
//         s.setTaxableIncome(data.getTaxableIncome());
//         repo.save(s);
//     }


    
// }