package com.prjgrp.artf;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.prjgrp.artf.controller.EmployeeController;
import com.prjgrp.artf.controller.PayrollController;
import com.prjgrp.artf.model.Employee;
import com.prjgrp.artf.model.Payroll;
import com.prjgrp.artf.service.EmployeeService;
import com.prjgrp.artf.service.PayrollService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Collections;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest({PayrollController.class, EmployeeController.class})
public class CombinedControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private PayrollService payrollService;

    @MockBean
    private EmployeeService employeeService;

    // Payroll Tests
    @Test
    public void testCreatePayroll() throws Exception {
        Payroll payroll = new Payroll(1L, 123L, 5000.0, 1000.0); // Assuming employeeId is 123
        Mockito.when(payrollService.createPayroll(any(Payroll.class))).thenReturn(payroll);

        mockMvc.perform(post("/api/payrolls")
                .contentType(MediaType.APPLICATION_JSON)
                .content(new ObjectMapper().writeValueAsString(payroll)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.employeeId").value(123))
                .andExpect(jsonPath("$.monthlySalary").value(5000.0))
                .andExpect(jsonPath("$.bonus").value(1000.0));
    }

    @Test
    public void testGetPayrollById() throws Exception {
        Payroll payroll = new Payroll(1L, 123L, 5000.0, 1000.0);
        Mockito.when(payrollService.getPayrollById(anyLong())).thenReturn(payroll);

        mockMvc.perform(get("/api/payrolls/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.employeeId").value(123))
                .andExpect(jsonPath("$.monthlySalary").value(5000.0))
                .andExpect(jsonPath("$.bonus").value(1000.0));
    }

    @Test
    public void testGetAllPayrolls() throws Exception {
        Payroll payroll = new Payroll(1L, 123L, 5000.0, 1000.0);
        Mockito.when(payrollService.getAllPayrolls()).thenReturn(Collections.singletonList(payroll));

        mockMvc.perform(get("/api/payrolls"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].id").value(1))
                .andExpect(jsonPath("$[0].employeeId").value(123))
                .andExpect(jsonPath("$[0].monthlySalary").value(5000.0))
                .andExpect(jsonPath("$[0].bonus").value(1000.0));
    }

    @Test
    public void testUpdatePayroll() throws Exception {
        Payroll payroll = new Payroll(1L, 123L, 5500.0, 1500.0); // Updated values
        Mockito.when(payrollService.updatePayroll(anyLong(), any(Payroll.class))).thenReturn(payroll);

        mockMvc.perform(put("/api/payrolls/1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(new ObjectMapper().writeValueAsString(payroll)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.employeeId").value(123))
                .andExpect(jsonPath("$.monthlySalary").value(5500.0))
                .andExpect(jsonPath("$.bonus").value(1500.0));
    }

    @Test
    public void testDeletePayroll() throws Exception {
        Mockito.doNothing().when(payrollService).deletePayroll(anyLong());

        mockMvc.perform(delete("/api/payrolls/1"))
                .andExpect(status().isNoContent());
    }

    // Employee Tests
    @Test
    public void testCreateEmployee() throws Exception {
        Employee employee = new Employee(1L, "John Doe", "IT", "john.doe@example.com", 60000.0);
        Mockito.when(employeeService.createEmployee(any(Employee.class))).thenReturn(employee);

        mockMvc.perform(post("/api/employees")
                .contentType(MediaType.APPLICATION_JSON)
                .content(new ObjectMapper().writeValueAsString(employee)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.name").value("John Doe"))
                .andExpect(jsonPath("$.department").value("IT"))
                .andExpect(jsonPath("$.email").value("john.doe@example.com"))
                .andExpect(jsonPath("$.salary").value(60000.0));
    }

    @Test
    public void testGetEmployeeById() throws Exception {
        Employee employee = new Employee(1L, "John Doe", "IT", "john.doe@example.com", 60000.0);
        Mockito.when(employeeService.getEmployeeById(anyLong())).thenReturn(employee);

        mockMvc.perform(get("/api/employees/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.name").value("John Doe"))
                .andExpect(jsonPath("$.department").value("IT"))
                .andExpect(jsonPath("$.email").value("john.doe@example.com"))
                .andExpect(jsonPath("$.salary").value(60000.0));
    }

    @Test
    public void testGetAllEmployees() throws Exception {
        Employee employee = new Employee(1L, "John Doe", "IT", "john.doe@example.com", 60000.0);
        Mockito.when(employeeService.getAllEmployees()).thenReturn(Collections.singletonList(employee));

        mockMvc.perform(get("/api/employees"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].id").value(1))
                .andExpect(jsonPath("$[0].name").value("John Doe"))
                .andExpect(jsonPath("$[0].department").value("IT"))
                .andExpect(jsonPath("$[0].email").value("john.doe@example.com"))
                .andExpect(jsonPath("$[0].salary").value(60000.0));
    }

    @Test
    public void testUpdateEmployee() throws Exception {
        Employee employee = new Employee(1L, "Jane Doe", "HR", "jane.doe@example.com", 65000.0);
        Mockito.when(employeeService.updateEmployee(anyLong(), any(Employee.class))).thenReturn(employee);

        mockMvc.perform(put("/api/employees/1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(new ObjectMapper().writeValueAsString(employee)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.name").value("Jane Doe"))
                .andExpect(jsonPath("$.department").value("HR"))
                .andExpect(jsonPath("$.email").value("jane.doe@example.com"))
                .andExpect(jsonPath("$.salary").value(65000.0));
    }

    @Test
    public void testDeleteEmployee() throws Exception {
        Mockito.doNothing().when(employeeService).deleteEmployee(anyLong());

        mockMvc.perform(delete("/api/employees/1"))
                .andExpect(status().isNoContent());
    }
}
