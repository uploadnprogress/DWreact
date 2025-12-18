import React, { useState } from 'react';

const HomeProjectForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    zip: '',
    city: '',
    state: '',
    budget: '',
    description: ''
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
      } catch (error) {
        console.error("ZIP lookup failed", error);
      }
    }
  };

  return (
    <form name="home-project" method="POST" data-netlify="true" className="project-form">
      <input type="hidden" name="form-name" value="home-project" />
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="firstName" required value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="lastName" required value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
        </div>
      </div>

      <div className="form-group">
        <label>Street Address</label>
        <input type="text" name="address" required placeholder="123 Seattle Way" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
        <div className="form-group">
          <label>ZIP Code</label>
          <input type="text" name="zip" required value={formData.zip} onChange={handleZipChange} maxLength="5" />
        </div>
        <div className="form-group">
          <label>City</label>
          <input type="text" name="city" required value={formData.city} readOnly style={{ backgroundColor: '#eee' }} />
        </div>
        <div className="form-group">
          <label>State</label>
          <input type="text" name="state" required value={formData.state} readOnly style={{ backgroundColor: '#eee' }} />
        </div>
      </div>

      <div className="form-group">
        <label>Project Budget</label>
        <select name="budget" required>
          <option value="">Select a range</option>
          <option value="under-250">Under $250</option>
          <option value="250-500">$250 - $500</option>
          <option value="500-1000">$500 - $1,000</option>
          <option value="1000-2500">$1,000 - $2,500</option>
          <option value="2500-plus">$2,500+</option>
        </select>
      </div>

      <div className="form-group">
        <label>Project Details</label>
        <textarea name="description" placeholder="Tell us about the task..." required></textarea>
      </div>

      <button type="submit" className="btn">Submit Request</button>
    </form>
  );
};

export default HomeProjectForm;