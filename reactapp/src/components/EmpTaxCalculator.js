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

    if (
      isNaN(salaryValue) ||
      salaryValue <= 0 ||
      isNaN(taxRateValue) ||
      taxRateValue <= 0 ||
      taxRateValue > 100
    ) {
      setError('Invalid input values');
      return;
    }

    const calculatedTax = (salaryValue * taxRateValue) / 100;
    setTax(calculatedTax);
    setSalary('');
    setTaxRate('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Employee Tax Calculator</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="mb-4">
        <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1">
          Salary:
        </label>
        <input
          id="salary"
          type="number"
          value={salary}
          onChange={handleSalaryChange}
          placeholder="Enter salary"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="taxRate" className="block text-sm font-medium text-gray-700 mb-1">
          Tax Rate (%):
        </label>
        <input
          id="taxRate"
          type="number"
          value={taxRate}
          onChange={handleTaxRateChange}
          placeholder="Enter tax rate"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        onClick={handleCalculateClick}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Calculate Tax
      </button>

      {tax !== null && (
        <p className="mt-4 text-green-500 font-medium">
          Tax to be paid: ${tax.toFixed(2)}
        </p>
      )}
    </div>
  );
};

export default EmpTaxCalculator;
