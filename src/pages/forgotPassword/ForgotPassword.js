import React, { useState } from 'react';
import { useAuth } from '../../components/context/authcontext';
import './forgotpassword.scss';

const ForgotPassword = () => {
  const { ForgotPasswordConfig } = useAuth();
  const [formdata, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ForgotPasswordConfig(formdata);
  };

  return (
    <div className="fg-container">
      <div className="fg-title-reg">
        <h2>Forgot Password</h2>
        <p>Enter the email you use for registration. We'll send you a link to  reset your password</p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="fg-form-style"
              placeholder="enter your email"
              onChange={handleChange}
            />
          </div>
          <div className="fg-btn-container">
              <button type="submit">Submit</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
