import React, { useState } from 'react';
import './header.scss';
import { images } from '../../images';
import { Link } from 'react-router-dom';


const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const handleLogout = () => {
    localStorage.clear()
    window.location.href="/"
  }
  
  const handleLogin = () => {
    localStorage.clear()
    window.location.href="/login"
  }

  const handleSelect = (e) => {
    const value = e.target.value;
    switch (value) {
      case 'change-password':
        window.location.href="/change-password"
        break;
      case 'change-email':
        window.location.href="/change-email"
        break;
      case 'update-profile':
        window.location.href="/update-profile"
        break;
      case 'logout':
        handleLogout();
        break;
      default:
        break;
    }
    e.target.value = 'settings';
  };

  const isLoggedIn = localStorage.getItem('signature');
  const user = localStorage.getItem('user');
  const verified = localStorage.getItem('verified');

  return (
    <header>
      <nav className="navbar container">
        <div className="logo">
          <Link to={'/home'}>
            <img src={images.logo} alt="" />
          </Link>
        </div>
        <div className='nav-items-div'>

              <ul className={open ? `nav-items active` : `nav-items`}>
                    <li className="navbarLi">About</li>
                    <li className="navbarLi">Buddies</li>
                    <li className="navbarLi">Discover</li>
                    {isLoggedIn &&  verified ? (
                      <Link to="/user-profile">
                      <li className="navbarLi">{user}</li>
                    </Link>
                    ) : (
                      <li className="navbarLi">
                        
                      </li>
                    )}
                    {isLoggedIn &&  verified ? (
                      <li className="navbarLi">
                      <select onChange={handleSelect} className="nav-settings">
                        <option value="settings">Settings and Privacy</option>
                        <option value="change-password">Change Password</option>
                        <option value="change-email">Change Email</option>
                        <option value="update-profile">Update Profile</option>
                        <option value="logout">Logout</option>
                      </select>
                    </li>
                    ) : (
                      <li className="navbarLi">
                        <Link to="/login" onClick={handleLogin}>Login</Link>
                      </li>
                    )}
              </ul>
        </div>
        <div className="hamburger">
          <img src={images.hamburger} onClick={handleClick} alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
