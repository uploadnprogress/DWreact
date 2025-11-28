import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!Object.values(formData).every(field => field.trim() !== '')) {
      alert('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      // This sends the data to your backend API endpoint
      const response = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, formType: 'contact_us' })
      });

      const result = await response.json();
      if (response.ok && result.success) {
        alert('Thank you for your message! We will get back to you shortly.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert(`Message failed to send: ${result.error || 'Unknown server error'}.`);
      }
    } catch (error) {
      alert('Message failed to send due to a network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | DoneWright Services</title>
        <meta name="description" content="Have questions? Reach out to the DoneWright Services team. We're here to help you get started on your next project." />
      </Helmet>
      <div className="form-section">
        <div className="form-container">
          <h1 className="section-title">Contact Us</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Your Name*</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Your Email*</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="message">Your Message*</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="6"></textarea>
            </div>
            <div className="form-button-wrapper">
                <button type="submit" className="btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactPage;