import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  // Hardcoded Make Webhook URL
  const webhookUrl = "https://hook.us2.make.com/71zlo1hovhtyhcebw7t37terano9bhpf"; 

  const [status, setStatus] = useState(null); // 'submitting', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(webhookUrl, { method: 'POST', body: formData });
      if (response.ok) {
        setStatus('success');
        form.reset(); 
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus('error');
    }
  };

  return (
    <div className="form-section">
      <Helmet>
        <title>Contact Us | DoneWright Services</title>
      </Helmet>
      
      {/* Reusing the Form Container for a clean, centered white box */}
      <div className="form-container">
        <h2 className="section-title">Contact Us</h2>
        
        {status === 'success' ? (
          <div className="success-message" style={{ padding: '20px', background: '#d4edda', color: '#155724', borderRadius: '5px', textAlign: 'center' }}>
            <h3>Message Sent!</h3>
            <p>Thank you. We will get back to you shortly.</p>
            <button className="btn" onClick={() => setStatus(null)} style={{ marginTop: '10px' }}>Send another</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required rows="5"></textarea>
            </div>

            <input type="hidden" name="source" value="live_site_contact" />

            <div className="form-button-wrapper">
              <button type="submit" className="btn" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            
            {status === 'error' && (
              <p style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>Error sending message. Please try again.</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;