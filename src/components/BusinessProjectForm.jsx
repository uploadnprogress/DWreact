import React, { useState } from 'react';

const BusinessProjectForm = () => {
  const [formData, setFormData] = useState({
    zip: '', city: '', state: ''
  });

  const handleZipChange = async (e) => {
    const zip = e.target.value;
    if (zip.length === 5) {
      const res = await fetch(`https://api.zippopotam.us/us/${zip}`);
      if (res.ok) {
        const data = await res.json();
        setFormData({
          zip,
          city: data.places[0]['place name'],
          state: data.places[0]['state abbreviation']
        });
      }
    } else {
      setFormData({ ...formData, zip });
    }
  };

  return (
    <form name="business-project" method="POST" data-netlify="true" className="project-form">
      <input type="hidden" name="form-name" value="business-project" />
      
      <div className="form-group">
        <label>Company Name</label>
        <input type="text" name="companyName" required />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        <div className="form-group">
          <label>First Name (Contact)</label>
          <input type="text" name="firstName" required />
        </div>
        <div className="form-group">
          <label>Last Name (Contact)</label>
          <input type="text" name="lastName" required />
        </div>
      </div>

      <div className="form-group">
        <label>Office/Site Address</label>
        <input type="text" name="address" required />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
        <div className="form-group">
          <label>ZIP Code</label>
          <input type="text" name="zip" required value={formData.zip} onChange={handleZipChange} maxLength="5" />
        </div>
        <div className="form-group">
          <label>City</label>
          <input type="text" name="city" required value={formData.city} readOnly />
        </div>
        <div className="form-group">
          <label>State</label>
          <input type="text" name="state" required value={formData.state} readOnly />
        </div>
      </div>

      <div className="form-group">
        <label>Project Budget</label>
        <select name="budget" required>
          <option value="">Select a range</option>
          <option value="under-500">Under $500</option>
          <option value="500-2000">$500 - $2,000</option>
          <option value="2000-5000">$2,000 - $5,000</option>
          <option value="5000-plus">$5,000+</option>
        </select>
      </div>

      <button type="submit" className="btn">Submit Business Request</button>
    </form>
  );
};

export default BusinessProjectForm;