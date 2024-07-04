import React from 'react';
import SocialFollow from './SocialShare';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-section">
        <h4>About Us</h4>
        <p>
          We offer the best furniture for your home and office. Quality and
          comfort at the best prices.
        </p>
      </div>
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>Email: info@furnitureshop.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
      <div className="footer-section">
        <h4>Follow Us</h4>
      <SocialFollow />
      </div>
    </div>
    <div className="footer-bottom">
    <img
              className="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGDoLhqiWBc-404AEbL9IEmeRG3u6OTbWSAA&s"
              alt="logo"
            />
      <p>
        &copy; {new Date().getFullYear()} Furniture Shop. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
