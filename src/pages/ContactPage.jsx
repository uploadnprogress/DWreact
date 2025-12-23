import React, { useState } from 'react';

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
    <div className="contact-section">
      <h2>Contact Us</h2>
      
      {status === 'success' ? (
        <div className="success-message" style={{ padding: '20px', background: '#d4edda', color: '#155724', borderRadius: '5px' }}>
          <h3>Message Sent!</h3>
          <p>Thank you. We will get back to you shortly.</p>
          <button onClick={() => setStatus(null)} style={{ marginTop: '10px' }}>Send another</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
            <input type="text" id="name" name="name" required style={{ width: '100%', padding: '8px' }} />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
            <input type="email" id="email" name="email" required style={{ width: '100%', padding: '8px' }} />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message:</label>
            <textarea id="message" name="message" required rows="5" style={{ width: '100%', padding: '8px' }}></textarea>
          </div>

          <input type="hidden" name="source" value="live_site_contact" />

          <button 
            type="submit" 
            disabled={status === 'submitting'}
            style={{ 
              padding: '10px 20px', 
              backgroundColor: status === 'submitting' ? '#ccc' : '#007BFF', 
              color: 'white', 
              border: 'none', 
              cursor: 'pointer' 
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
  );
};

export default Contact;