import { useState } from "react";
import "./UpdateEmailForm.scss";
import { useAuth } from '../../components/context/authcontext';
import { IoArrowBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function UpdateEmailForm() {
    const {UpdateEmailConfig} = useAuth()
    const [formdata, setFormData] =useState({})

    const handleChange = (e) => {
      const {name, value} = e.target
      setFormData({...formdata, [name]:value})
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    UpdateEmailConfig(formdata)
  };

  

  return (
    <div className='email-container'>
         <Link to="/home">
          <IoArrowBack className="email-backIcon" />
        </Link>
        <div className='email-title-reg'>
        <h2>Change Email</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="preEmail">Current Email:</label>
            <input
              type="preEmail"
              name="preEmail"
              id="email-form-style"
              placeholder="enter your current email"
              onChange={handleChange}
            />
          </div>
         
          <div>
            <label htmlFor="newEmail">New Email:</label>
            <input
              type="newEmail"
              name="newEmail"
              id="email-form-style"
              placeholder="enter your new email"
              onChange={handleChange}
            />
          </div>
          <div>
            <div></div>
            <div className="email-btn-container">
              <button type="submit">Submit</button>
            </div>
          </div>
          
        </form>
       
      </div>
    </div>
  );
}

export default UpdateEmailForm;