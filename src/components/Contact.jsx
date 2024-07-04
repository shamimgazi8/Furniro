import React from 'react';
import SocialFollow from './SocialShare';

const Contactpage = ({ image, title }) => {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>

      <section className="contact-info">
        {/* <h3>Get in Touch</h3>
        <p>
          Whether you have questions about our products, need assistance with an
          order, or just want to say hello, we’d love to hear from you!
        </p> */}
        <div className="contact-details">
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h4>Our Address</h4>
              <p>123 Main Street, Cityville, State, 12345</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h4>Email Us</h4>
              <p>
                Email:{' '}
                <a href="mailto:info@furnitureshop.com">
                  info@furnitureshop.com
                </a>
              </p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone-alt"></i>
            <div>
              <h4>Call Us</h4>
              <p>
                Phone: <a href="tel:+1234567890">+123 456 7890</a>
              </p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-clock"></i>
            <div>
              <h4>Business Hours</h4>
              <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p>Sat: 10:00 AM - 5:00 PM</p>
              <p>Sun: Closed</p>
            </div>
          </div>
        </div>
      </section>
      <div className=' social_follow'>

      <SocialFollow />
      </div>

      <section className="contact-form">
        <h3>Contact Form</h3>
        <form action="https://formspree.io/f/yourformid" method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <section className="map">
        <h3>Find Us</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.065298942708!2d-74.00601558460923!3d40.71277567933128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1c22eafc95%3A0x2a9a9fc26a5d2a7e!2s123%20Main%20St%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1619899451146!5m2!1sen!2sus"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="Google Maps Location"
        ></iframe>
      </section>

      <section className="customer-service">
        <h3>Customer Service</h3>
        <p>
          For any inquiries related to orders, returns, or product information,
          our customer service team is here to help.
        </p>
        <p>
          You can reach our customer service team at{' '}
          <a href="mailto:support@furnitureshop.com">
            support@furnitureshop.com
          </a>{' '}
          or by calling <a href="tel:+1234567891">+123 456 7891</a>. We are
          available Monday to Friday, 9:00 AM - 6:00 PM.
        </p>
      </section>
    </div>
  );
};

export default Contactpage;
