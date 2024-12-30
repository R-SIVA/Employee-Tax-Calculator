// src/components/EmpTaxCalculator.js

import React, { useState } from 'react';

const EmpTaxCalculator = () => {
  const [salary, setSalary] = useState('');
  const [taxRate, setTaxRate] = useState('');
  const [tax, setTax] = useState(null);
  const [error, setError] = useState('');

  const handleSalaryChange = (e) => setSalary(e.target.value);
  const handleTaxRateChange = (e) => setTaxRate(e.target.value);

  const handleCalculateClick = () => {
    // Reset error
    setError('');

    // Validate input values
    if (!salary || !taxRate) {
      setError('Please fill all fields');
      return;
    }

    const salaryValue = parseFloat(salary);
    const taxRateValue = parseFloat(taxRate);

    if (isNaN(salaryValue) || salaryValue <= 0 || isNaN(taxRateValue) || taxRateValue <= 0 || taxRateValue > 100) {
      setError('Invalid input values');
      return;
    }

    const calculatedTax = (salaryValue * taxRateValue) / 100;
    setTax(calculatedTax);
    setSalary('');
    setTaxRate('');
  };

  return (
    <div>
      <h1>Employee Tax Calculator</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        <label htmlFor="salary">Salary:</label>
        <input
          id="salary"
          type="number"
          value={salary}
          onChange={handleSalaryChange}
          placeholder="Enter salary"
        />
      </div>

      <div>
        <label htmlFor="taxRate">Tax Rate:</label>
        <input
          id="taxRate"
          type="number"
          value={taxRate}
          onChange={handleTaxRateChange}
          placeholder="Enter tax rate"
        />
      </div>

      <button onClick={handleCalculateClick}>Calculate Tax</button>

      {tax !== null && <p>Tax to be paid: ${tax.toFixed(2)}</p>}
    </div>
  );
};

export default EmpTaxCalculator;
