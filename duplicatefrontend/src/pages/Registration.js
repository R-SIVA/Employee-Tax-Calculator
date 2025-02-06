import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../components/UserContext';
import axios from "axios";
const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneno: '',
    username: '',
    password: '',
  });
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [confirmpassword, setConfirmpassword] = useState('');
  // const [users,setUsers] = useState({});

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios.get("http://localhost:8080/employee/"+formData.username)
        .then((res)=>{
            const users=res.data;

            if(!users){
              if (formData.password === confirmpassword) {
                axios.post("http://localhost:8080/employee",formData)
                .then((response)=>{
                  // console.log(formData);
                  alert('Registration successful');
                  // console.log(response);
                  setUser(formData);
                  navigate('/login');
                })
                .catch((err)=>alert(err));
                
              } else {
                alert('Passwords does not match');
              }
            }
            else{
              alert('Username is alredy exist');
            }

            
        })
        .catch((err)=>{
            window.alert(err);
        })
    
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Register</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <label className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter Your Name"
          required
          className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter Your Email"
          required
          className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">PhoneNo:</label>
        <input
          onChange={handleChange}
          type="tel"
          name="phoneno"
          value={formData.phoneno}
          placeholder="Enter your Phone Number"
          required
          className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">UserName:</label>
        <input
          onChange={handleChange}
          type="text"
          name="username"
          value={formData.username}
          placeholder="Enter your User Name"
          required
          className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">Password:</label>
        <input
          onChange={handleChange}
          type="password"
          name="password"
          value={formData.password}
          placeholder="Set the Password"
          required
          className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">ReEnter Password:</label>
        <input
          type="password"
          name="repassword"
          value={confirmpassword}
          onChange={(e) => setConfirmpassword(e.target.value)}
          placeholder="ReEnter the Password"
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
    </div>
  );
};

export default Registration;

