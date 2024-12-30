import React from 'react';
import EmpTaxCalculatorPage from './pages/EmpTaxCalculatorPage';
import {Route,Routes} from 'react-router-dom';
import Registration from './pages/Registration';
import Login from './pages/Login';


const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Registration/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/Emp" element={<EmpTaxCalculatorPage/>}></Route>
      </Routes>

    </div>
  );
};

export default App;
