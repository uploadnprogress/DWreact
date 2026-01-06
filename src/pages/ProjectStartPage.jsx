import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const ProjectStartPage = () => {
  const navigate = useNavigate();
  // Using your Master Webhook URL
  const webhookUrl = "https://hook.us2.make.com/71zlo1hovhtyhcebw7t37terano9bhpf";

  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    projectType: 'Residential', // Default selection
    description: '',
    address: '', city: '', state: '', zip: ''
  });

  // ZIP Code Auto-Fill Logic (Matches JoinUsPage)
  const handleZipChange = async (e) => {
    const zip = e.target.value;
    setFormData(prev => ({ ...prev, zip }));
    
    // Only fetch if zip is 5 digits
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
      } catch (err) { console.error("Zip Error:", err); }
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
        <p style={{ textAlign: 'center', marginBottom: '30px' }}>
          Tell us about your needs, and we'll match you with the perfect pro.
        </p>

        <form name="project-start" onSubmit={handleSubmit}>
          {/* IDENTIFIERS FOR MAKE.COM */}
          <input type="hidden" name="form-name" value="project-start" />
          <input type="hidden" name="source" value="react_project_page" />

          {/* Contact Info */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div className="form-group">
              <label>First Name*</label>
              <input type="text" name="firstName" required onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Last Name*</label>
              <input type="text" name="lastName" required onChange={handleChange} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div className="form-group">
              <label>Email Address*</label>
              <input type="email" name="email" required onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Phone Number*</label>
              <input type="tel" name="phone" required onChange={handleChange} />
            </div>
          </div>

          {/* Project Details */}
          <div className="form-group">
            <label>Project Type</label>
            <select name="projectType" onChange={handleChange} style={{ width: '100%', padding: '10px' }}>
              <option value="Residential">Residential (Home)</option>
              <option value="Commercial">Commercial (Business)</option>
              <option value="Emergency">Emergency Repair</option>
            </select>
          </div>

          <div className="form-group">
            <label>Project Description / Needs*</label>
            <textarea name="description" required rows="4" placeholder="Describe what you need done..." onChange={handleChange}></textarea>
          </div>

          {/* Location (With Auto-Zip) */}
          <div className="form-group">
            <label>Street Address*</label>
            <input type="text" name="address" required onChange={handleChange} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
            <div className="form-group">
              <label>ZIP Code*</label>
              <input 
                type="text" 
                name="zip" 
                required 
                value={formData.zip} 
                onChange={handleZipChange} 
                maxLength="5" 
                placeholder="12345"
              />
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

          {/* Submit Button (Centered) */}
          <div className="form-button-wrapper">
             {/* Uses both 'btn' for style and 'submit-btn' for centering */}
            <button type="submit" className="btn submit-btn">Request Quote</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ProjectStartPage;