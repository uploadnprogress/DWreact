import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const SecureTransitForm = () => {
  const [formData, setFormData] = useState({
    senderName: '', senderPhone: '', senderEmail: '',
    pickupAddress: '', dropoffAddress: '',
    assetDescription: '', assetValue: '', dimensions: '',
    receiverName: '', receiverPhone: '', specialInstructions: ''
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const webhookURL = "https://hook.us2.make.com/71zlo1hovhtyhcebw7t37terano9bhpf";
    const data = new FormData();
    data.append("form-name", "secure-transit");
    data.append("source", "react_secure_transit");

    Object.keys(formData).forEach(key => data.append(key, formData[key]));

    try {
      const response = await fetch(webhookURL, { method: "POST", body: data });
      if (response.ok) {
        setShowSuccessPopup(true);
        setFormData({
          senderName: '', senderPhone: '', senderEmail: '', pickupAddress: '', dropoffAddress: '',
          assetDescription: '', assetValue: '', dimensions: '', receiverName: '', receiverPhone: '', specialInstructions: ''
        });
      } else {
        alert("There was an error submitting your transit request.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-section" style={{ background: '#f4f6f8', minHeight: '100vh', padding: '60px 20px' }}>
      <Helmet><title>Transit Request | Secure Transit</title></Helmet>
      
      {/* Tighter max-width for a focused, "document" feel */}
      <div className="form-container" style={{ maxWidth: '700px', margin: '0 auto', padding: '50px', background: '#fff', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '30px', marginBottom: '10px' }}>🛡️</div>
          <h2 style={{ color: '#1a1a2e', margin: '0 0 10px 0' }}>Transit Manifest</h2>
          <p style={{ color: '#666', fontSize: '14px' }}>Please complete the secure logistics protocols below.</p>
        </div>

        <form className="project-form" onSubmit={handleSubmit}>
          
          <h4 style={{ marginBottom: '15px', color: '#1a1a2e', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>1. Sender Information</h4>
          <div className="form-group-row">
            <div className="form-group half"><label>Your Name *</label><input type="text" name="senderName" value={formData.senderName} onChange={handleChange} required /></div>
            <div className="form-group half"><label>Your Phone *</label><input type="tel" name="senderPhone" value={formData.senderPhone} onChange={handleChange} required /></div>
          </div>
          <div className="form-group"><label>Your Email *</label><input type="email" name="senderEmail" value={formData.senderEmail} onChange={handleChange} required /></div>

          <h4 style={{ margin: '30px 0 15px', color: '#1a1a2e', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>2. Transit Details</h4>
          <div className="form-group-row">
            <div className="form-group half"><label>Exact Pickup Address *</label><input type="text" name="pickupAddress" value={formData.pickupAddress} onChange={handleChange} required placeholder="Include Suite/Unit" /></div>
            <div className="form-group half"><label>Exact Drop-off Address *</label><input type="text" name="dropoffAddress" value={formData.dropoffAddress} onChange={handleChange} required placeholder="Include Suite/Unit" /></div>
          </div>

          <h4 style={{ margin: '30px 0 15px', color: '#1a1a2e', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>3. Asset Information</h4>
          <div className="form-group"><label>Asset Description *</label><input type="text" name="assetDescription" value={formData.assetDescription} onChange={handleChange} required placeholder="e.g., Framed Artwork, Server Rack" /></div>
          <div className="form-group-row">
            <div className="form-group half">
              <label>Estimated Value *</label>
              <select name="assetValue" value={formData.assetValue} onChange={handleChange} required>
                <option value="">Select Range</option>
                <option value="Under $5,000">Under $5,000</option>
                <option value="$5,000 - $25,000">$5,000 - $25,000</option>
                <option value="$25,000+">$25,000+</option>
              </select>
            </div>
            <div className="form-group half"><label>Dimensions / Weight *</label><input type="text" name="dimensions" value={formData.dimensions} onChange={handleChange} required placeholder="e.g., 24x36 inches, 15 lbs" /></div>
          </div>

          <h4 style={{ margin: '30px 0 15px', color: '#1a1a2e', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>4. Security Protocol</h4>
          <div className="form-group-row">
            <div className="form-group half"><label>Authorized Receiver Name *</label><input type="text" name="receiverName" value={formData.receiverName} onChange={handleChange} required /></div>
            <div className="form-group half"><label>Receiver Mobile *</label><input type="tel" name="receiverPhone" value={formData.receiverPhone} onChange={handleChange} required placeholder="For Release Code SMS" /></div>
          </div>
          <div className="form-group">
            <label>Special Handling Instructions (Optional)</label>
            <textarea name="specialInstructions" rows="3" value={formData.specialInstructions} onChange={handleChange} placeholder="e.g., Keep upright, deliver to rear service entrance only."></textarea>
          </div>

          <div className="form-button-wrapper" style={{ marginTop: '30px' }}>
            <button type="submit" className="btn submit-btn" disabled={isSubmitting} style={{ background: '#1a1a2e', border: 'none', width: '100%' }}>
              {isSubmitting ? "Encrypting Request..." : "Submit Transit Manifest"}
            </button>
          </div>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
             <Link to="/secure-transit" style={{ color: '#666', fontSize: '14px' }}>Cancel and Return</Link>
          </div>
        </form>

        {showSuccessPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <div className="popup-icon">🛡️</div>
              <h2>Transit Request Secured</h2>
              <p>Your request has been securely transmitted to DoneWright Dispatch.</p>
              <p>A logistics coordinator will contact you shortly to confirm the transit window and generate the Receiver Release Code.</p>
              <Link to="/" className="btn" style={{ background: '#1a1a2e', color: 'white', textDecoration: 'none', display: 'inline-block', marginTop: '15px' }}>Return Home</Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default SecureTransitForm;