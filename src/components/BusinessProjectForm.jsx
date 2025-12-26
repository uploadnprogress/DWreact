import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BusinessProjectForm = () => {
  const navigate = useNavigate();
  const webhookUrl = "https://hook.us2.make.com/71zlo1hovhtyhcebw7t37terano9bhpf";

  const [formData, setFormData] = useState({
    companyName: '', firstName: '', lastName: '', 
    address: '', address2: '', zip: '', city: '', state: '', 
    email: '', phone: '', budget: ''
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
    
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        body: formDataObj
      });
      if (response.ok) {
        alert("Business Request Received! We will be in touch shortly.");
        navigate("/");
      } else {
        alert("Error submitting request.");
      }
    } catch (error) {
      console.error(error);
      alert("Network error.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="project-form">
      <input type="hidden" name="form-name" value="business-project" />
      <input type="hidden" name="source" value="react_business_project" />
      
      <div className="form-group"><label>Company Name*</label><input type="text" name="companyName" required onChange={handleChange} /></div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        <div className="form-group"><label>Contact First Name*</label><input type="text" name="firstName" required onChange={handleChange} /></div>
        <div className="form-group"><label>Contact Last Name*</label><input type="text" name="lastName" required onChange={handleChange} /></div>
      </div>
      
      <div className="form-group"><label>Office Street Address*</label><input type="text" name="address" required onChange={handleChange} /></div>
      <div className="form-group"><label>Suite / Unit / Floor</label><input type="text" name="address2" onChange={handleChange} /></div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
        <div className="form-group"><label>ZIP*</label><input type="text" name="zip" required value={formData.zip} onChange={handleZipChange} maxLength="5" /></div>
        <div className="form-group"><label>City*</label><input type="text" name="city" value={formData.city} readOnly /></div>
        <div className="form-group"><label>State*</label><input type="text" name="state" value={formData.state} readOnly /></div>
      </div>
      
      <div className="form-group"><label>Work Email*</label><input type="email" name="email" required onChange={handleChange} /></div>
      <div className="form-group"><label>Work Phone</label><input type="tel" name="phone" onChange={handleChange} /></div>

      <div className="form-group">
        <label>Estimated Budget*</label>
        <select name="budget" required onChange={handleChange}>
          <option value="">Select range</option>
          <option value="under-500">Under $500</option>
          <option value="500-2000">$500 - $2,000</option>
          <option value="2000-5000">$2,000 - $5,000</option>
          <option value="5000-plus">$5,000+</option>
        </select>
      </div>
      
      <div className="form-button-wrapper">
        <button type="submit" className="btn">Submit Business Request</button>
      </div>
    </form>
  );
};

export default BusinessProjectForm;