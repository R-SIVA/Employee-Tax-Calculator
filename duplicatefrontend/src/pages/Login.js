import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../components/UserContext';
import axios from 'axios';
const Login = () => {

  const { setUser } = useContext(UserContext);
  const {setLoggedIn} = useContext(UserContext);
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({ username: '', password: '' });
  const [error, setError] = useState('');


  function handleChange(e) {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.get("http://localhost:8080/employee/"+formdata.username)
        .then((res)=>{
            const users=res.data;

            if (
              users &&
              users.username === formdata.username &&
              users.password === formdata.password
            ) {
              setLoggedIn(true);
              setUser(users);
              navigate('/loggedinhome');
            } else {
              setError('Invalid credentials');
            }
        })
        .catch((err)=>{
            window.alert(err);
        })
    
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <label className="block text-sm font-medium text-gray-700 mb-1">UserName:</label>
        <input
          type="text"
          name="username"
          placeholder="Enter your User Name"
          onChange={handleChange}
          value={formdata.username}
          required
          className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">Password:</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={formdata.password}
          placeholder="Set the Password"
          required
          className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
      {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
    </div>
  );
};

export default Login;
