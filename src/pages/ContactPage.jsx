import React from 'react';
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
  return (
    <div className="form-section">
      <Helmet><title>Contact Us | DoneWright Services</title></Helmet>
      <div className="form-container">
        <h1 className="section-title">Get In Touch</h1>
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="firstName" required />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="lastName" required />
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" required />
          </div>

          <div className="form-group">
            <label>Subject</label>
            <select name="subject" required>
              <option value="general">General Inquiry</option>
              <option value="partnership">Moving Company Partnership</option>
              <option value="support">Project Support</option>
              <option value="billing">Billing</option>
            </select>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea name="message" rows="5" required></textarea>
          </div>

          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;