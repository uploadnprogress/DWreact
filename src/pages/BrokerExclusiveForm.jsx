import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const BrokerExclusiveForm = () => {
  const [formData, setFormData] = useState({
    voucherCode: '', firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', state: '', zip: ''
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'voucherCode') {
      setFormData(prev => ({ ...prev, [name]: value.toUpperCase() }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const webhookURL = "https://hook.us2.make.com/71zlo1hovhtyhcebw7t37terano9bhpf";
    const data = new FormData();
    data.append("form-name", "broker-voucher-redemption");
    data.append("source", "react_broker_exclusive");

    Object.keys(formData).forEach(key => data.append(key, formData[key]));

    try {
      const response = await fetch(webhookURL, { method: "POST", body: data });
      if (response.ok) {
        setShowSuccessPopup(true);
        setFormData({
          voucherCode: '', firstName: '', lastName: '', email: '', phone: '',
          address: '', city: '', state: '', zip: ''
        });
      } else {
        alert("There was an error processing your voucher. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Network error.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-section" style={{ background: '#f4f6f8', minHeight: '100vh', padding: '60px 20px' }}>
      <Helmet><title>Activate Voucher | DoneWright Services</title></Helmet>
      
      {/* Tighter max-width for focus */}
      <div className="form-container" style={{ maxWidth: '700px', margin: '0 auto', padding: '50px', background: '#fff', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
           <h3 style={{ margin: '0', color: '#007bff', fontSize: '24px' }}>Voucher Activation</h3>
           <p style={{ color: '#666', fontSize: '14px', marginTop: '10px' }}>Please provide your unique code and property details.</p>
        </div>
          
        <form className="project-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label style={{ fontWeight: 'bold', color: '#007bff' }}>Voucher Serial Code *</label>
            <input 
              type="text" 
              name="voucherCode" 
              value={formData.voucherCode} 
              onChange={handleChange} 
              placeholder="e.g. DW-EST-9X2B" 
              required 
              style={{ width: '100%', padding: '15px', fontSize: '18px', border: '2px solid #007bff', borderRadius: '4px', letterSpacing: '2px', textAlign: 'center', textTransform: 'uppercase' }}
            />
          </div>

          <div className="form-group-row" style={{ marginTop: '20px' }}>
            <div className="form-group half"><label>First Name *</label><input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required /></div>
            <div className="form-group half"><label>Last Name *</label><input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required /></div>
          </div>

          <div className="form-group-row">
            <div className="form-group half"><label>Email Address *</label><input type="email" name="email" value={formData.email} onChange={handleChange} required /></div>
            <div className="form-group half"><label>Phone Number *</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} required /></div>
          </div>

          <div className="form-group"><label>New Property Address (Where services will be rendered) *</label><input type="text" name="address" value={formData.address} onChange={handleChange} required /></div>

          <div className="form-group-row">
            <div className="form-group third"><label>City *</label><input type="text" name="city" value={formData.city} onChange={handleChange} required /></div>
            <div className="form-group third"><label>State *</label><input type="text" name="state" value={formData.state} onChange={handleChange} required /></div>
            <div className="form-group third"><label>Zip Code *</label><input type="text" name="zip" value={formData.zip} onChange={handleChange} required maxLength="5" /></div>
          </div>

          <div className="form-button-wrapper" style={{ marginTop: '30px' }}>
            <button type="submit" className="btn submit-btn" disabled={isSubmitting} style={{ width: '100%' }}>
              {isSubmitting ? "Verifying Code..." : "Activate Membership"}
            </button>
          </div>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
             <Link to="/partner-gift" style={{ color: '#666', fontSize: '14px' }}>Cancel and Return</Link>
          </div>
        </form>

        {showSuccessPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <div className="popup-icon">🎉</div>
              <h2>Voucher Activated!</h2>
              <p>Welcome to The DoneWright Standard.</p>
              <p>Your dedicated concierge will reach out shortly to schedule your Month 1 Elite Move-In Session.</p>
              <Link to="/" className="btn" style={{ textDecoration: 'none', display: 'inline-block', marginTop: '15px' }}>Return Home</Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default BrokerExclusiveForm;