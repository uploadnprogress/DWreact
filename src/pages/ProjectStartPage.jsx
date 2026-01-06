import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const ProjectStartPage = () => {
  const navigate = useNavigate();
  // EXACT Webhook from your JoinUsPage logic
  const webhookUrl = "https://hook.us2.make.com/71zlo1hovhtyhcebw7t37terano9bhpf";

  const [formData, setFormData] = useState({
    projectType: 'Home', // Default matching your site terminology
    firstName: '', lastName: '', 
    email: '', phone: '', 
    description: '',
    address: '', city: '', state: '', zip: ''
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
        alert("Project Inquiry Sent! We will contact you shortly.");
        navigate("/");
      } else {
        alert("There was an issue submitting your project. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Network error. Please try again.");
    }
  };

  return (
    <div className="form-section">
      <Helmet><title>Start a Project | DoneWright Services</title></Helmet>
      <div className="form-container">
        <h1 className="section-title">Start Your Project</h1>
        <p style={{ textAlign: 'center', marginBottom: '20px' }}>Tell us what you need, and we'll match you with a pro.</p>
        
        <form name="project-start" onSubmit={handleSubmit}>
          {/* Hidden inputs for Make.com */}
          <input type="hidden" name="form-name" value="project-start" />
          <input type="hidden" name="source" value="react_project_page" />
          
          {/* Radio Buttons: Home vs Business Only */}
          <div className="radio-container">
            <label>
              <input 
                type="radio" 
                name="projectType" 
                value="Home" 
                checked={formData.projectType === 'Home'} 
                onChange={handleChange} 
              /> Home
            </label>
            <label>
              <input 
                type="radio" 
                name="projectType" 
                value="Business" 
                checked={formData.projectType === 'Business'} 
                onChange={handleChange} 
              /> Business
            </label>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div className="form-group"><label>First Name*</label><input type="text" name="firstName" required onChange={handleChange} /></div>
            <div className="form-group"><label>Last Name*</label><input type="text" name="lastName" required onChange={handleChange} /></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
             <div className="form-group"><label>Email Address*</label><input type="email" name="email" required onChange={handleChange} /></div>
             <div className="form-group"><label>Phone Number*</label><input type="tel" name="phone" required onChange={handleChange} /></div>
          </div>

          <div className="form-group"><label>Project Description / Needs*</label><textarea name="description" required onChange={handleChange} rows="4" placeholder="Describe the work you need done..."></textarea></div>

          <div className="form-group"><label>Street Address*</label><input type="text" name="address" required onChange={handleChange} /></div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
            <div className="form-group"><label>ZIP*</label><input type="text" name="zip" required value={formData.zip} onChange={handleZipChange} maxLength="5" /></div>
            <div className="form-group"><label>City*</label><input type="text" name="city" value={formData.city} readOnly /></div>
            <div className="form-group"><label>State*</label><input type="text" name="state" value={formData.state} readOnly /></div>
          </div>

           {/* Optional File Upload */}
          <div className="form-group"><label>Project Photos (Optional)</label><input type="file" name="projectPhotos" /></div>

          {/* Centered Button with 'submit-btn' class */}
          <div className="form-button-wrapper">
            <button type="submit" className="btn submit-btn">Request Quote</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectStartPage;