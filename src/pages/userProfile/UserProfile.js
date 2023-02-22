import React, { useEffect } from "react";
import "./UserProfile.scss";
import {images} from "../../images/index"
import { useAuth } from '../../components/context/authcontext';
import { IoArrowBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';



const UserProfile = () => {
    
const {ProfileConfig, userProfile} = useAuth()

useEffect(() =>{
    ProfileConfig()
},[])

  return (
    
            <div className="userProfile">
              <Link to="/home">
          <IoArrowBack className="backIcon" />
        </Link>
      <div className="header">
         <div className="userProfile-1 box"></div>
      <div className="userProfile-2 box"></div>
      <div className="userProfile-3 box"></div>
      
        <img
          className="profileImg"
          src={images.profile}
          alt="Profile"
        />
        <h1 className="userProfile-title-name">{userProfile.userName}</h1>
      </div>
      <div className="userProfile-content">
        <div className="field">
          <span className="label">Name:</span>
          <span className="value">{userProfile.fullName}</span>
        </div>
        <div className="field">
          <span className="label">Username:</span>
          <span className="value">{userProfile.userName}</span>
        </div>
        <div className="field">
          <span className="label">Email:</span>
          <span className="value">{userProfile.email}</span>
        </div>
        <div className="field">
          <span className="label">Phone:</span>
          <span className="value">{userProfile.phone}</span>
        </div>
        <div className="field">
          <span className="label">Interest:</span>
          <span className="value">{userProfile.interest}</span>
        </div>
        </div>
        <h2 className="subhead">Likes</h2>
        {userProfile.like && userProfile.like.length > 0 ? (
    <ul className="liked-news">
      {userProfile.like.map((item) => (
        <li key={item.id} className="news-item">
          <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
        </li>
      ))}
    </ul>
  ) : (
    <span className="value">None</span>
  )}
      
    </div>

    
  )
};

export default UserProfile;