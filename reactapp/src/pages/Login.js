import React,{useContext,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { UserContext } from '../components/UserContext';

const Login=()=>{
    const {user}=useContext(UserContext);
    const navigate=useNavigate();
    const[formdata,setFormdata]=useState({username:"",password:""});
    const [error,setError]=useState("");
    function handleChange(e){
        setFormdata({...formdata,[e.target.name]:e.target.value});

    }
    const handleSubmit=(e)=>{
    e.preventDefault();
    
    if(user&&user.username===formdata.username && user.password===formdata.password){
        navigate("/Emp");
        
    }
    else{
        setError("Invalid credentials");
    }
    }
return(
    <div>
        
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
        <label>UserName:</label>
        <input type='text' name='username' placeholder='Enter your User Name' onChange={handleChange} value={formdata.username} required></input><br/>
        <label>Password:</label>
        <input type='password' name='password' onChange={handleChange} value={formdata.password}  placeholder='Set the Password' required></input><br/>
        <button type='submit'>Submit</button>
      </form>
      {error && <p>{error}</p>}
    </div>
);
}
export default Login;