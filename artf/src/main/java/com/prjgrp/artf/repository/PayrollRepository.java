package com.prjgrp.artf.repository;

import com.prjgrp.artf.model.Payroll;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PayrollRepository extends JpaRepository<Payroll, Long> {}