import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeProjectForm = () => {
  const navigate = useNavigate();
  const webhookUrl = "https://hook.us2.make.com/71zlo1hovhtyhcebw7t37terano9bhpf"; // Same backend

  const [formData, setFormData] = useState({
    firstName: '', lastName: '', address: '', address2: '', zip: '', city: '', state: '', 
    email: '', phone: '', projectName: '', budget: '', projectDescription: ''
  });

  const handleZipChange = async (e) => {
    const zip = e.target.value;
    setFormData({ ...formData, zip });
    if (zip.length === 5) {
      try {
        const res = await fetch(`https://api.zippopotam.us/us/${zip}`);
        if (res.ok) {
          const data = await res.json();
          setFormData(prev => ({ ...prev, city: data.places[0]['place name'], state: data.places[0]['state abbreviation'] }));
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
        alert("Project Request Received! We will contact you shortly.");
        navigate("/");
      } else {
        alert("Error submitting project. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Network error.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="project-form">
      <input type="hidden" name="form-name" value="home-project" />
      <input type="hidden" name="source" value="react_home_project" />
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        <div className="form-group"><label>First Name*</label><input type="text" name="firstName" required onChange={handleChange} /></div>
        <div className="form-group"><label>Last Name*</label><input type="text" name="lastName" required onChange={handleChange} /></div>
      </div>
      
      <div className="form-group"><label>Street Address*</label><input type="text" name="address" required onChange={handleChange} /></div>
      <div className="form-group"><label>Apartment, Unit, Suite</label><input type="text" name="address2" onChange={handleChange} /></div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
        <div className="form-group"><label>ZIP*</label><input type="text" name="zip" required value={formData.zip} onChange={handleZipChange} maxLength="5" /></div>
        <div className="form-group"><label>City*</label><input type="text" name="city" value={formData.city} readOnly /></div>
        <div className="form-group"><label>State*</label><input type="text" name="state" value={formData.state} readOnly /></div>
      </div>

      <div className="form-group"><label>Email*</label><input type="email" name="email" required onChange={handleChange} /></div>
      <div className="form-group"><label>Phone</label><input type="tel" name="phone" onChange={handleChange} /></div>
      
      <div className="form-group"><label>Brief Project Title*</label><input type="text" name="projectName" placeholder="e.g. Kitchen Faucet Replacement" required onChange={handleChange} /></div>

      <div className="form-group">
        <label>Estimated Budget*</label>
        <select name="budget" required onChange={handleChange}>
          <option value="">Select Budget</option>
          <option value="0-1000">$0 - $1,000</option>
          <option value="1000-5000">$1,000 - $5,000</option>
          <option value="5000-10000">$5,000 - $10,000</option>
          <option value="10000plus">$10,000+</option>
        </select>
      </div>
      
      <div className="form-group"><label>Project Description*</label><textarea name="projectDescription" required onChange={handleChange} rows="5"></textarea></div>
      
      <div className="form-group">
        <label>Upload Files (Optional)</label>
        <input type="file" name="projectFileUpload" multiple accept=".pdf,.doc,.docx,.jpg,.png" />
      </div>
      
      <div className="form-button-wrapper">
        <button type="submit" className="btn">Submit Project Request</button>
      </div>
    </form>
  );
};

export default HomeProjectForm;