import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HomeProjectForm from '../components/HomeProjectForm';
import BusinessProjectForm from '../components/BusinessProjectForm';

function ProjectStartPage() {
  const location = useLocation();
  const [formType, setFormType] = useState('home');
  const [preselectedService, setPreselectedService] = useState(null);
  const [specialPrice, setSpecialPrice] = useState(null);
  const [specialTitle, setSpecialTitle] = useState(null);

  useEffect(() => {
    if (location.state?.type) {
      setFormType(location.state.type);
    }
    if (location.state?.service) {
      setPreselectedService(location.state.service);
    }
    if (location.state?.specialPrice) {
      setSpecialPrice(location.state.specialPrice);
    }
    if (location.state?.specialTitle) {
      setSpecialTitle(location.state.specialTitle);
    }
  }, [location]);

  const handleTypeChange = (e) => {
    setFormType(e.target.value);
    setPreselectedService(null);
    setSpecialPrice(null);
    setSpecialTitle(null);
  };

  return (
    <>
      <Helmet>
        <title>Start Your Project | DoneWright Services</title>
        <meta name="description" content="Start your residential or commercial project with DoneWright Services. TV mounting, furniture assembly, drywall repair, and move-in/out services." />
      </Helmet>
      <div className="form-section">
        <div className="form-container">
          <h1 className="section-title">Start a New Project</h1>
          
          {/* Radio Buttons for Toggling */}
          <fieldset className="radio-container" style={{ border: '2px solid #0047ab', borderRadius: '8px', padding: '15px', marginBottom: '20px' }}>
            <legend style={{ fontWeight: 'bold', padding: '0 10px' }}>Project Type</legend>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
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
          </fieldset>

          {/* Conditional Rendering based on the Radio Selection */}
          {formType === 'home' && (
            <HomeProjectForm 
              preselectedService={preselectedService}
              specialPrice={specialPrice}
              specialTitle={specialTitle}
            />
          )}
          {formType === 'business' && (
            <BusinessProjectForm 
              preselectedService={preselectedService}
              specialPrice={specialPrice}
              specialTitle={specialTitle}
            />
          )}
          
        </div>
      </div>
    </>
  );
}

export default ProjectStartPage;