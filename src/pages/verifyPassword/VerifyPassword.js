import { useState } from "react";
import "./VerifyPassword.scss";
import { useAuth } from '../../components/context/authcontext';
import { IoArrowBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'; // import the useParams hook


function VerifyPassword() {
  const { password } = useParams(); // extract the id from the URL
    const {VerifyPasswordConfig} = useAuth()
    VerifyPasswordConfig(password)


    const [formdata, setFormData] =useState({})

    const handleChange = (e) => {
      const {name, value} = e.target
      setFormData({...formdata, [name]:value})
    };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  

  return (
    <div className='password-container'>
         <Link to="/home">
          <IoArrowBack className="password-backIcon" />
        </Link>
        <div className='password-title-reg'>
        <h2>Change Password</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="prePassword">Current Password:</label>
            <input
              type="prePassword"
              name="prePassword"
              id="password-form-style"
              placeholder="enter your current email"
              onChange={handleChange}
            />
          </div>
         
          <div>
            <label htmlFor="newPassword">New Password:</label>
            <input
              type="newPassword"
              name="newPassword"
              id="password-form-style"
              placeholder="enter your new email"
              onChange={handleChange}
            />
          </div>
          <div>
            <div></div>
            <div className="password-btn-container">
              <button type="submit">Submit</button>
            </div>
          </div>
          
        </form>
       
      </div>
    </div>
  );
}

export default VerifyPassword;