import { useState } from "react";
import "./VerifyEmail.scss";
import { useAuth } from '../../components/context/authcontext';
import { IoArrowBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'; // import the useParams hook


function VerifyEmail() {
  const { email } = useParams(); // extract the id from the URL
    const {VerifyEmailConfig} = useAuth()
      VerifyEmailConfig(email)

    const [formdata, setFormData] =useState({})

    const handleChange = (e) => {
      const {name, value} = e.target
      setFormData({...formdata, [name]:value})
    };

  const handleSubmit = (event) => {
    event.preventDefault();
  
  };

  

  return (
    <div className='verify-container'>
         <Link to="/home">
          <IoArrowBack className="verify-backIcon" />
        </Link>
        <div className='verify-title-reg'>
        <h2>Change Email</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="preEmail">Current Email:</label>
            <input
              type="preEmail"
              name="preEmail"
              id="verify-form-style"
              placeholder="enter your current email"
              onChange={handleChange}
            />
          </div>
         
          <div>
            <label htmlFor="newEmail">New Email:</label>
            <input
              type="newEmail"
              name="newEmail"
              id="verify-form-style"
              placeholder="enter your new email"
              onChange={handleChange}
            />
          </div>
          <div>
            <div></div>
            <div className="verify-btn-container">
              <button type="submit">Submit</button>
            </div>
          </div>
          
        </form>
       
      </div>
    </div>
  );
}

export default VerifyEmail;