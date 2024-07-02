import React from 'react';

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
        <div className="social-icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>
        &copy; {new Date().getFullYear()} Furniture Shop. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
