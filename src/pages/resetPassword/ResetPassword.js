import React, { useState } from 'react';
import { useAuth } from '../../components/context/authcontext';
import { useParams } from 'react-router-dom'; // import the useParams hook
import "./resetPassword.scss"

const ResetPassword = () => {
  const { ResetPasswordConfig } = useAuth();
  const [formdata, setFormData] = useState({});
  const { id } = useParams(); // extract the id from the URL

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ResetPasswordConfig(formdata, id); // pass the id to the ResetPasswordConfig function
  };

  return (
    <div className='rs-container'>
      <div className='rs-title-reg'>
        <h2>Reset Password</h2>
        <p>Create a new password</p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="rs-form-style"
              placeholder="enter your password"
              onChange={handleChange}
            />
          </div>
          <div>
            <div></div>
            <div className="rs-btn-container">
              <button type="submit">Reset Password</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;