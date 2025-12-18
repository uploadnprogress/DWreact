import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const JoinUsPage = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', zip: '', city: '', state: ''
  });

  const handleZipChange = async (e) => {
    const zip = e.target.value;
    setFormData({ ...formData, zip });
    if (zip.length === 5) {
      try {
        const response = await fetch(`https://api.zippopotam.us/us/${zip}`);
        if (response.ok) {
          const data = await response.json();
          setFormData(prev => ({
            ...prev,
            city: data.places[0]['place name'],
            state: data.places[0]['state abbreviation']
          }));
        }
      } catch (error) { console.error("ZIP lookup failed", error); }
    }
  };

  return (
    <div className="form-section">
      <Helmet><title>Join the Network | DoneWright Services</title></Helmet>
      <div className="form-container">
        <h1 className="section-title">Become a Provider</h1>
        
        {/* encType is REQUIRED for file uploads to work with Make.com */}
        <form name="provider-signup" method="POST" data-netlify="true" encType="multipart/form-data">
          <input type="hidden" name="form-name" value="provider-signup" />
          
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
            <label>Email Address</label>
            <input type="email" name="email" required />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
            <div className="form-group">
              <label>ZIP Code</label>
              <input type="text" name="zip" required value={formData.zip} onChange={handleZipChange} maxLength="5" />
            </div>
            <div className="form-group">
              <label>City</label>
              <input type="text" name="city" value={formData.city} readOnly />
            </div>
            <div className="form-group">
              <label>State</label>
              <input type="text" name="state" value={formData.state} readOnly />
            </div>
          </div>

          {/* File Upload Fields for Automation */}
          <div className="form-group">
            <label>Proof of Insurance (Required)</label>
            <input type="file" name="insurance" required />
          </div>

          <div className="form-group">
            <label>Business License (Required)</label>
            <input type="file" name="license" required />
          </div>

          <div className="form-group">
            <label>Proof of Work (Optional)</label>
            <input type="file" name="portfolio" multiple />
          </div>

          <button type="submit" className="btn">Submit Application</button>
        </form>
      </div>
    </div>
  );
};

export default JoinUsPage;