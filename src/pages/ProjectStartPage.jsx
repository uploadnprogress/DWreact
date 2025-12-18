import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HomeProjectForm from '../components/HomeProjectForm';
import BusinessProjectForm from '../components/BusinessProjectForm';

function ProjectStartPage() {
  const location = useLocation();
  const [formType, setFormType] = useState('');

  useEffect(() => {
    if (location.state?.type) {
      setFormType(location.state.type);
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Start Your Project | DoneWright Services</title>
      </Helmet>
      <div className="form-section">
        <div className="form-container">
          <h1 className="section-title">Start a New Project</h1>
          
          <div className="radio-container">
            <label>
              <input 
                type="radio" 
                name="projectType" 
                value="home" 
                checked={formType === 'home'} 
                onChange={() => setFormType('home')} 
              /> Home Project
            </label>
            <label>
              <input 
                type="radio" 
                name="projectType" 
                value="business" 
                checked={formType === 'business'} 
                onChange={() => setFormType('business')} 
              /> Business Project
            </label>
          </div>

          {formType === 'home' && <HomeProjectForm />}
          {formType === 'business' && <BusinessProjectForm />}
          
          {!formType && <p style={{textAlign: 'center', marginTop: '20px'}}>Please select a project type above to see the request form.</p>}
        </div>
      </div>
    </>
  );
}

export default ProjectStartPage;