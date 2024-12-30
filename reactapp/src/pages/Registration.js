import React,{useContext,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { UserContext } from '../components/UserContext';

const Registration = () => {

  const [formData,setFormData]=useState({name:"",email:"",phoneno:"",username:"",password:""});
  const {setUser}=useContext(UserContext);
  const navigate=useNavigate();
  const [confrimpassword,setConfrimpassword]=useState("");


  function handleChange(e){
  setFormData({...formData,[e.target.name]:e.target.value})
  }
  function handleSubmit(e){
  e.preventDefault();
  if(formData.password===confrimpassword){
    alert("registration succesfull");
    setUser(formData);
  navigate("/login");
  }
  else{
    alert("password does not match");
  }
  }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input onChange={handleChange} type='text' name='name' value={formData.name} placeholder='Enter Your Name' required></input><br/>
        <label>Email:</label>
        <input onChange={handleChange} type='email' name='email' value={formData.email} placeholder='Enter Your Email' required></input><br/>
        <label>PhoneNo:</label>
        <input onChange={handleChange} type='tel' name='phoneno' value={formData.phoneno} placeholder='Enter your Phone Number' required></input><br/>
        <label>UserName:</label>
        <input onChange={handleChange} type='text' name='username' value={formData.username} placeholder='Enter your User Name' required></input><br/>
        <label>Password:</label>
        <input onChange={handleChange} type='password' name='password' value={formData.password} placeholder='Set the Password' required></input><br/>
        <label>ReEnter Password:</label>
        <input type='password' name='repassword' value={confrimpassword} onChange={(e)=>setConfrimpassword(e.target.value)} placeholder='ReEnter the Password' required></input>
        <br/>
        <button type='submit'>Submit</button>

      </form>
      
    </div>
  );
};

export default Registration;
