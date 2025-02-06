import React from 'react';
import EmpTaxCalculator from '../components/EmpTaxCalculator';

const EmpTaxCalculatorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Employee Tax Calculator Page</h1>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <EmpTaxCalculator />
      </div>
    </div>
  );
};

export default EmpTaxCalculatorPage;

