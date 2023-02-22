import { useState } from "react";
import "./UpdateProfileForm.scss";
import { useAuth } from '../../components/context/authcontext';
import { IoArrowBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function UpdateProfileForm() {
    const {UpdateProfileConfig} = useAuth()
    const [formdata, setFormData] =useState({})

    const handleChange = (e) => {
      const {name, value} = e.target
      setFormData({...formdata, [name]:value})
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    UpdateProfileConfig(formdata)
  };

  

  return (
    <div className='profile-container'>
         <Link to="/home">
          <IoArrowBack className="profile-backIcon" />
        </Link>
        <div className='profile-title-reg'>
        <h2>Update Profile</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName">Name:</label>
            <input
              type="fullName"
              name="fullName"
              id="profile-form-style"
              placeholder="enter your full name"
              onChange={handleChange}
            />
          </div>
          <p className="profile-pg">or</p>
          <div>
            <label htmlFor="userName">Username:</label>
            <input
              type="userName"
              name="userName"
              id="profile-form-style"
              placeholder="enter your username"
              onChange={handleChange}
            />
          </div>
          <div>
            <div></div>
            <div className="profile-btn-container">
              <button type="submit">Submit</button>
            </div>
          </div>
          
        </form>
       
      </div>
    </div>
  );
}

export default UpdateProfileForm;