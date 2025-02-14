import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../components/UserContext';
const LoggedInHome = () => {

  const {setLoggedIn}=useContext(UserContext);
  const navigate = useNavigate();
  function handleCalculate(){
    navigate('/Emp');
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi2R_L5HclpwCHzwxGyycvuhbmHvUejUPRFg&s')", // Replace with the actual background image URL
      }}
    >
      {/* Top-right buttons */}
      <div className="absolute top-4 right-4 space-x-4">
        <button
          onClick={() => {
            navigate("/");
            setLoggedIn(false);
          }}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Log Out
        </button>
        
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-50 text-white">
        <h1 className="text-4xl font-bold mb-6 text-center">
        Employee Tax Management
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
          <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
            <h2 className="text-xl font-bold mb-4">Visit Tax Details</h2>
            <p>View detailed information about your taxes for better planning and understanding.</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
            <h2 className="text-xl font-bold mb-4">Deductions</h2>
            <p>Discover eligible tax deductions to reduce your taxable income.</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
            <h2 className="text-xl font-bold mb-4">Credits</h2>
            <p>Learn about tax credits that can directly reduce the taxes you owe.</p>
          </div>
          <div onClick={handleCalculate}className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
            <h2 className="text-xl font-bold mb-4">Tax Calculator</h2>
            <p>Use our tax calculator to estimate your tax obligations instantly.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default LoggedInHome;
