import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const JoinUsPage = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', zip: '', city: '', state: '', specialty: ''
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
        <h1 className="section-title">Become a Service Provider</h1>
        <p style={{ textAlign: 'center', marginBottom: '20px' }}>
          Partner with us and keep your schedule full. No lead fees—just a fair 5% commission on completed jobs.
        </p>
        
        <form name="provider-signup" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="provider-signup" />
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="firstName" required onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="lastName" required onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
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
              <input type="text" name="city" value={formData.city} readOnly style={{ backgroundColor: '#f0f0f0' }} />
            </div>
            <div className="form-group">
              <label>State</label>
              <input type="text" name="state" value={formData.state} readOnly style={{ backgroundColor: '#f0f0f0' }} />
            </div>
          </div>

          <div className="form-group">
            <label>Primary Specialty</label>
            <select name="specialty" required>
              <option value="">Select your trade</option>
              <option value="furniture-assembly">Furniture Assembly</option>
              <option value="mounting">TV & Art Mounting</option>
              <option value="handyman">General Handyman</option>
              <option value="electrical">Electrical</option>
              <option value="plumbing">Plumbing</option>
            </select>
          </div>

          <button type="submit" className="btn">Apply to Network</button>
        </form>
      </div>
    </div>
  );
};

export default JoinUsPage;