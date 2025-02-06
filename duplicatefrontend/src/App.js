import React from 'react';
import EmpTaxCalculatorPage from './pages/EmpTaxCalculatorPage';
import {Route,Routes} from 'react-router-dom';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Home from './pages/Home';
import LoggedInHome from './pages/LoggedInHome';
import { ProtectedRoute } from './components/ProtectedRoute';

const App = () => {
  return (
    <div>

      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/loggedinhome" element={<ProtectedRoute><LoggedInHome/></ProtectedRoute>}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/Emp" element={<ProtectedRoute><EmpTaxCalculatorPage/></ProtectedRoute>}></Route>
      </Routes>

    </div>
  );
};

export default App;
