import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, Link } from 'react-router-dom';

const StandardMembershipForm = () => {
  const location = useLocation();
  
  // Look for the passed state, default to Flex if none exists
  const initialTier = location.state?.selectedTier || 'The Flex Standard';

  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', state: '', zip: '',
    selectedTier: initialTier 
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const webhookURL = "https://hook.us2.make.com/71zlo1hovhtyhcebw7t37terano9bhpf";
    const data = new FormData();

    data.append("form-name", "standard-membership-application");
    data.append("source", "react_membership_page");

    Object.keys(formData).forEach(key => data.append(key, formData[key]));

    try {
      const response = await fetch(webhookURL, { method: "POST", body: data });
      if (response.ok) {
        setShowSuccessPopup(true);
        setFormData({
          firstName: '', lastName: '', email: '', phone: '',
          address: '', city: '', state: '', zip: '', selectedTier: initialTier
        });
      } else {
        alert("Error submitting application. Please try again.");
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
      <Helmet><title>Apply | The DoneWright Standard</title></Helmet>
      
      <div className="form-container" style={{ maxWidth: '700px', margin: '0 auto', padding: '50px', background: '#fff', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
           <h2 style={{ margin: '0', color: '#007bff', fontSize: '28px' }}>Membership Application</h2>
           <p style={{ color: '#666', fontSize: '15px', marginTop: '10px', marginBottom: '25px' }}>Submit your details to lock in your tier and schedule your activation call.</p>
           
           {/* === THE TRAVELING SPECIAL OFFER BANNER === */}
           <div style={{ background: '#e6f2ff', border: '2px solid #007bff', padding: '15px 20px', borderRadius: '8px', display: 'inline-block', fontWeight: 'bold', color: '#0056b3', fontSize: '14px', lineHeight: '1.5' }}>
             ⚡ Special Offer: Your Initial Setup Fee is completely waived if you book a qualifying project within 48 hours of your Initial Safety Audit.
           </div>
        </div>
          
        <form className="project-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label style={{ fontWeight: 'bold', color: '#007bff' }}>Selected Tier *</label>
            <select name="selectedTier" value={formData.selectedTier} onChange={handleChange} style={{ width: '100%', padding: '12px', fontSize: '16px', border: '2px solid #007bff', borderRadius: '4px', background: '#f8f9fa' }}>
              <option value="The Flex Standard">The Flex Standard ($249/mo)</option>
              <option value="The Estate Standard">The Estate Standard ($399/mo)</option>
              <option value="The Portfolio Standard">The Portfolio Standard ($699/mo)</option>
            </select>
          </div>

          <div className="form-group-row" style={{ marginTop: '20px' }}>
            <div className="form-group half"><label>First Name *</label><input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required /></div>
            <div className="form-group half"><label>Last Name *</label><input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required /></div>
          </div>

          <div className="form-group-row">
            <div className="form-group half"><label>Email Address *</label><input type="email" name="email" value={formData.email} onChange={handleChange} required /></div>
            <div className="form-group half"><label>Phone Number *</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} required /></div>
          </div>

          <div className="form-group"><label>Primary Property Address *</label><input type="text" name="address" value={formData.address} onChange={handleChange} required /></div>

          <div className="form-group-row">
            <div className="form-group third"><label>City *</label><input type="text" name="city" value={formData.city} onChange={handleChange} required /></div>
            <div className="form-group third"><label>State *</label><input type="text" name="state" value={formData.state} onChange={handleChange} required /></div>
            <div className="form-group third"><label>Zip Code *</label><input type="text" name="zip" value={formData.zip} onChange={handleChange} required maxLength="5" /></div>
          </div>

          {/* === THE WAIVER REMINDER BOX === */}
          <div style={{ background: '#f0f4f8', padding: '20px', borderRadius: '8px', border: '1px solid #d9e2ec', marginTop: '30px', textAlign: 'center' }}>
            <p style={{ fontSize: '13px', color: '#334e68', fontStyle: 'italic', margin: '0', lineHeight: '1.5' }}>
              *To trigger the Initiation Setup Fee waiver, your first qualifying project must be booked and deposited within 48 hours of receiving your Initial Safety Audit. Minimum qualifying project totals apply based on your tier: $500 for Flex, $1,000 for Estate, and $2,500 for Portfolio. Waived fees apply to the initiation cost only; standard monthly recurring dues apply immediately upon activation.
            </p>
          </div>

          <div className="form-button-wrapper" style={{ marginTop: '25px' }}>
            <button type="submit" className="btn submit-btn" disabled={isSubmitting} style={{ width: '100%', fontSize: '18px', padding: '15px' }}>
              {isSubmitting ? "Processing..." : "Submit Application"}
            </button>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
             <Link to="/standard" style={{ color: '#666', fontSize: '14px' }}>Back to Membership Details</Link>
          </div>
        </form>

        {showSuccessPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <div className="popup-icon">✅</div>
              <h2>Application Received!</h2>
              <p>Welcome to The DoneWright Standard.</p>
              <p>Our concierge team will contact you shortly to activate your account and schedule your first audit.</p>
              <Link to="/" className="btn" style={{ textDecoration: 'none', display: 'inline-block', marginTop: '15px' }}>Return Home</Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default StandardMembershipForm;