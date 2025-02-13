import React, { useEffect, useState } from 'react';
import axios from 'axios';
const EmpTaxCalculator = () => {
  const [basicsalary, setBasicSalary] = useState('');
  const [allowance, setAllowance] = useState('');
  const [tax, setTax] = useState(null);
  const [error, setError] = useState('');
  const [salarydetail,setSalarydetail]=useState({});
  const formData={
    basicsalary:basicsalary,
    allowance:allowance
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const handleSalaryChange = (e) => setBasicSalary(e.target.value);
  const handleTaxRateChange = (e) => setAllowance(e.target.value);

  useEffect(() => {
    console.log(user.username);
    axios.get(`http://localhost:8080/salary/${user.username}`)
    .then((res) => {
       const salaryda=res.data
       if(salaryda){
       setSalarydetail(salaryda);
       setBasicSalary(salaryda.basicsalary);
       setAllowance(salaryda.allowance);
       }
    })
    .catch((error)=>window.alert("There was a problem in access salary details!"));
  }, []);

 console.log(salarydetail);

  const handleAddSalary=()=>{
    setError('');

    if (!basicsalary || !allowance) {
      setError('Please fill all fields');
      return;
    }
    if (
      isNaN(basicsalary) ||
      basicsalary<= 0 ||
      isNaN(allowance) ||
      allowance <= 0 
    ) {
      setError('Invalid input values');
      return;
    }
    axios.post(`http://localhost:8080/salary/${user.username}`, formData)
    .then((response => {
        alert("salary added succesfully!")
    }))
    .catch((error)=>window.alert("There was a problem in add the salary!"));

  };


  const handleUpdateSalary=()=>{

    setError('');
    if (!basicsalary || !allowance) {
      setError('Please fill all fields');
      return;
    }
    if (
      isNaN(basicsalary) ||
      basicsalary<= 0 ||
      isNaN(allowance) ||
      allowance <= 0 
    ) {
      setError('Invalid input values');
      return;
    }
    axios.put(`http://localhost:8080/salary/${user.username}`, formData)
    .then((response => {
        alert("salary updated succesfully!")
    }))
    .catch((error)=>window.alert("There was a problem in updating the salary!"));
  };

  const handleCalculateClick = () => {

    const salaryValue = parseFloat(basicsalary);
    const allowanceValue = parseFloat(allowance);
    const calculatedTax = (salaryValue + allowanceValue)* 15 / 100;
    setTax(calculatedTax);
    
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Employee Tax Calculator</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="mb-4">
        <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1">
          Basic Salary:
        </label>
        <input
          id="salary"
          type="number"
          value={basicsalary}
          onChange={handleSalaryChange}
          placeholder="Enter basic salary"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="taxRate" className="block text-sm font-medium text-gray-700 mb-1">
        Allowance:
        </label>
        <input
          id="taxRate"
          type="number"
          value={allowance}
          onChange={handleTaxRateChange}
          placeholder="Enter allowance"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
<div className='flex-wrap mb-4'>
      {!salarydetail.basicsalary&&<button
        onClick={handleAddSalary}
        className="w-auto mr-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Add Salary Details
      </button>}
      {salarydetail.basicsalary&&<button
        onClick={handleUpdateSalary}
        className="w-auto  bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Update Salary Details
      </button>}
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
