import React, { useState } from 'react';
import { useAuth } from '../../components/context/authcontext';
import "./login.scss"


const Login = () => {
    const {login} = useAuth()
const [formdata, setFormData] =useState({})

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formdata, [name]:value})
  };


  const handleSubmit = (e) => {
    e.preventDefault()
    login(formdata)
  };

  return (
    <div className='login-container'>
        <div className='login-title-reg'>
        <h2>Login</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="login-form-style"
              placeholder="enter your email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="login-form-style"
              placeholder="enter your password"
              onChange={handleChange}
            />
          </div>
          <div className='forgot-password'>
          <a href={'/forgot-password'}>Forgot Password?</a>
          </div>
        
          <div>
            <div></div>
            <div className="login-btn-container">
              <button type="submit">Login</button>
            </div>
          </div>
          
        </form>
        <div className="account">
            Don&apos;t have an account? &nbsp;
            <a href={'/register'}>Register</a>
          </div>
      </div>
    </div>
  );
};

export default Login;
