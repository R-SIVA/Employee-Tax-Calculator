import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

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
          onClick={() => navigate('/login')}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
        <button
          onClick={() => navigate('/registration')}
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200"
        >
          Registration
        </button>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-50 text-white">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Welcome to Employee Tax Management
        </h1>
        <p className="text-lg text-center max-w-2xl mb-8">
          Our platform provides comprehensive tools to help employees manage their taxes. Explore tax details, deductions, credits, and more to simplify your financial obligations.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
