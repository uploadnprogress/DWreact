import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HomeProjectForm from '../components/HomeProjectForm';
import BusinessProjectForm from '../components/BusinessProjectForm';

function ProjectStartPage() {
  const location = useLocation();
  // Default to 'home' so the user sees the form immediately
  const [formType, setFormType] = useState('home');

  useEffect(() => {
    if (location.state?.type) {
      setFormType(location.state.type);
    }
  }, [location]);

  // The logic to switch the state when a button is clicked
  const handleTypeChange = (e) => {
    setFormType(e.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Start Your Project | DoneWright Services</title>
      </Helmet>
      <div className="form-section">
        <div className="form-container">
          <h1 className="section-title">Start a New Project</h1>
          
          {/* Radio Buttons for Toggling */}
          <div className="radio-container">
            <label>
              <input 
                type="radio" 
                name="projectType" 
                value="home" 
                checked={formType === 'home'} 
                onChange={handleTypeChange} 
              /> Home Project
            </label>
            <label>
              <input 
                type="radio" 
                name="projectType" 
                value="business" 
                checked={formType === 'business'} 
                onChange={handleTypeChange} 
              /> Business Project
            </label>
          </div>

          {/* Conditional Rendering based on the Radio Selection */}
          {formType === 'home' && <HomeProjectForm />}
          {formType === 'business' && <BusinessProjectForm />}
          
        </div>
      </div>
    </>
  );
}

export default ProjectStartPage;