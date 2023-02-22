import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './register.scss';
import { useAuth } from '../../components/context/authcontext';


const Register = () => {

  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { register } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
        register(formData);
    } catch (err) {
      toast.error(err.response.data.Error);
    }
  };
  return (
    <div className='reg-container'>
      <div className='title-reg'>
        <h2>Create Account</h2>
      </div>
      <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Name:</label>
          <input
            type="fullName"
            name="fullName"
            id="form-style"
            placeholder="enter your full name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="userName">Username:</label>
          <input
            type="userName"
            name="userName"
            id="form-style"
            placeholder="enter your username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="form-style"
            placeholder="enter your email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="phone"
            name="phone"
            id="form-style"
            placeholder="enter your phone"
            onChange={handleChange}
          />
        </div>
        <div>
  <label htmlFor="interest">Interest:</label>
  <select
    name="interest"
    id="form-style"
    onChange={handleChange}
  >
    <option value="">Select an interest</option>
    <option value="football">Football</option>
    <option value="basketball">Basketball</option>
    <option value="ice-hockey">Ice Hockey</option>
    <option value="motorsports">Motorsports</option>
    <option value="bandy">Bandy</option>
    <option value="rugby">Rugby</option>
    <option value="skiing">Skiing</option>
    <option value="shooting">Shooting</option>
  </select>
</div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="form-style"
            placeholder="enter your password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">
            Confirm: <br /> Password
          </label>
          <input
            type="password"
            name="confirm_password"
            id="form-style"
            placeholder="confirm password"
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="btn-container">
            <button type="submit">Register</button>
          </div>
        </div>
      </form>
      </div>
     
    </div>
    // </div>
  );
};

export default Register;
