import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const JoinUsPage = () => {
  const navigate = useNavigate();
  // EXACT Webhook from your ju.html
  const webhookUrl = "https://hook.us2.make.com/71zlo1hovhtyhcebw7t37terano9bhpf";

  const [formData, setFormData] = useState({
    applicantType: '', firstName: '', lastName: '', businessName: '',
    address: '', address2: '', city: '', state: '', zip: '',
    email: '', phone: '', servicesOffered: '', serviceAreas: ''
  });

  const handleZipChange = async (e) => {
    const zip = e.target.value;
    setFormData({ ...formData, zip });
    if (zip.length === 5) {
      try {
        const res = await fetch(`https://api.zippopotam.us/us/${zip}`);
        if (res.ok) {
          const data = await res.json();
          setFormData(prev => ({ 
            ...prev, 
            city: data.places[0]['place name'], 
            state: data.places[0]['state abbreviation'] 
          }));
        }
      } catch (err) { console.error(err); }
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const myForm = e.target;
    const formDataObj = new FormData(myForm);
    
    // Explicitly sending to YOUR Make.com Webhook
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        body: formDataObj
      });

      if (response.ok) {
        alert("Application Submitted! We will review your credentials.");
        navigate("/");
      } else {
        alert("There was an issue submitting your application. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Network error. Please try again.");
    }
  };

  return (
    <div className="form-section">
      <Helmet><title>Join Our Network | DoneWright Services</title></Helmet>
      <div className="form-container">
        <h1 className="section-title">Network Application</h1>
        <p style={{ textAlign: 'center', marginBottom: '20px' }}>Independent Contractors & Vendors</p>
        
        <form name="provider-signup" onSubmit={handleSubmit}>
          {/* Hidden inputs to help Make.com identify the form source */}
          <input type="hidden" name="form-name" value="provider-signup" />
          <input type="hidden" name="source" value="react_join_us_page" />
          
          <div className="radio-container">
            <label>
              <input type="radio" name="applicantType" value="contractor" required onChange={handleChange} /> Independent Contractor
            </label>
            <label>
              <input type="radio" name="applicantType" value="vendor" required onChange={handleChange} /> Vendor / Supplier
            </label>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div className="form-group"><label>First Name*</label><input type="text" name="firstName" required onChange={handleChange} /></div>
            <div className="form-group"><label>Last Name*</label><input type="text" name="lastName" required onChange={handleChange} /></div>
          </div>

          <div className="form-group"><label>Business Name (if applicable)</label><input type="text" name="businessName" onChange={handleChange} /></div>

          <div className="form-group"><label>Street Address*</label><input type="text" name="address" required onChange={handleChange} /></div>
          <div className="form-group"><label>Suite/Unit</label><input type="text" name="address2" onChange={handleChange} /></div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
            <div className="form-group"><label>ZIP*</label><input type="text" name="zip" required value={formData.zip} onChange={handleZipChange} maxLength="5" /></div>
            <div className="form-group"><label>City*</label><input type="text" name="city" value={formData.city} readOnly /></div>
            <div className="form-group"><label>State*</label><input type="text" name="state" value={formData.state} readOnly /></div>
          </div>

          <div className="form-group"><label>Contact Email*</label><input type="email" name="email" required onChange={handleChange} /></div>
          <div className="form-group"><label>Phone</label><input type="tel" name="phone" onChange={handleChange} /></div>

          <div className="form-group"><label>Services Offered / Primary Products*</label><textarea name="servicesOffered" required onChange={handleChange} rows="3"></textarea></div>
          <div className="form-group"><label>Service Areas (Cities/Counties)*</label><input type="text" name="serviceAreas" required onChange={handleChange} /></div>

          <div className="form-group"><label>Certifications/Licenses</label><input type="file" name="certificationsFile" /></div>
          <div className="form-group"><label>Proof of General Liability Insurance*</label><input type="file" name="insuranceFile" required /></div>
          <div className="form-group"><label>Catalog / Proof of Work (Optional)</label><input type="file" name="additionalFile" /></div>

          <div className="checkbox-group">
            <label>
              <input type="checkbox" name="independentAcknowledgement" value="agreed" required />
              * I acknowledge I am applying as an independent contractor/vendor.
            </label>
          </div>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" name="feeAgreement" value="agreed" required />
              * I agree to DoneWright Services' 5% coordination fee on matched projects.
            </label>
          </div>

          {/* Center the button properly */}
          <div className="form-button-wrapper">
            <button type="submit" className="btn">Submit Application</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinUsPage;