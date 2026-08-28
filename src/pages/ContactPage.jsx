import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
const webhookUrl = "https://hook.us2.make.com/71zlo1hovhtyhcebw7t37terano9bhpf";  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        body: formData,
      });
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
    <>
      <Helmet>
        <title>Contact Us | DoneWright Services Seattle</title>
      </Helmet>
      
      <div className="contact-section" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <h1 className="section-title" style={{ textAlign: 'center' }}>Contact Us</h1>
        
        <div style={{ 
          background: '#e8f5e9', 
          padding: '20px', 
          borderRadius: '10px', 
          textAlign: 'center',
          marginBottom: '25px',
          border: '1px solid #a5d6a7'
        }}>
          <p style={{ margin: 0, fontWeight: 'bold', color: '#2e7d32' }}>📞 Need a quick answer?</p>
          <a href="tel:2532505758" style={{ 
            display: 'inline-block', 
            fontSize: '1.8rem', 
            fontWeight: 'bold', 
            color: '#1b5e20',
            textDecoration: 'none',
            marginTop: '5px'
          }}>
            (253) 250-5758
          </a>
          <p style={{ margin: '5px 0 0', fontSize: '0.9rem', color: '#666' }}>Call or text • 8am–8pm daily</p>
        </div>

        {status === 'success' ? (
          <div className="success-message" style={{ padding: '20px', background: '#d4edda', color: '#155724', borderRadius: '5px' }}>
            <h3>Message Sent!</h3>
            <p>Thank you. We will get back to you shortly.</p>
            <button onClick={() => setStatus(null)} style={{ marginTop: '10px', padding: '8px 16px' }}>Send another</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px' }}>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name:</label>
              <input type="text" id="name" name="name" required style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email:</label>
              <input type="email" id="email" name="email" required style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="phone" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Phone (optional):</label>
              <input type="tel" id="phone" name="phone" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Message:</label>
              <textarea id="message" name="message" required rows="5" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
            </div>

            <input type="hidden" name="source" value="live_site_contact" />

            <button 
              type="submit" 
              disabled={status === 'submitting'}
              style={{ 
                padding: '12px 30px', 
                backgroundColor: status === 'submitting' ? '#ccc' : '#0f3460', 
                color: 'white', 
                border: 'none', 
                borderRadius: '5px',
                cursor: 'pointer',
                width: '100%',
                fontSize: '1rem'
              }}
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
            
            {status === 'error' && (
              <p style={{ color: 'red', marginTop: '10px' }}>Error sending message. Please try again.</p>
            )}
          </form>
        )}
      </div>
    </>
  );
};

export default ContactPage;