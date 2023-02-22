import React from "react";
import "./footer.scss";
import { images } from "../../images";
const Footer = () => {
  return (
    <footer>
      <div className="footer-art">
        <picture>
          <source media="(max-width:767px)" srcSet={images.footer_mob} />
          <img src={images.footer} alt="" />
        
        </picture>
      </div>

      <div className="container">
        <div className="footer">
          <div className="footer-header">
            <div className="log">
              <img src={images.logo} alt="" />
            </div>
            <div className="social-icons">
              <img src={images.fb} alt="" />
              <img src={images.twitter} alt="" />
              <img src={images.pinterest} alt="" />
              <img src={images.insta} alt="" />
            </div>
          </div>
          <div className="footer-menu">
            <div className="our-company">
              <h4>Our Company</h4>
              <ul>
                <li>How we work</li>
                <li>View Plans</li>
                <li>Reviews</li>
              </ul>
            </div>
            <div className="help">
              <h4>Help</h4>
              <ul>
                <li>FAQ</li>
                <li>Terms of use</li>
                <li>Privacy Policy</li>
                <li>Cookies</li>
              </ul>
            </div>
            <div className="contact">
              <h4>Contact</h4>
              <ul>
                <li>Sales</li>
                <li>Support</li>
                <li>Live Chat</li>
              </ul>
            </div>
            <div className="other">
              <h4>Others</h4>
              <ul>
                <li>Careers</li>
                <li>Press</li>
                <li>License</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
