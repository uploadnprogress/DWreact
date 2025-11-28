import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HomeProjectForm from '../components/HomeProjectForm';
import BusinessProjectForm from '../components/BusinessProjectForm';

function ProjectStartPage() {
  // Initial state is now empty, so the form is hidden
  const [formType, setFormType] = useState(''); // 'home' or 'business'

  return (
    <>
      <Helmet>
        <title>Start a New Project | DoneWright Services</title>
        <meta name="description" content="Ready to start your home or business project? Submit your project details and get connected with a vetted professional." />
      </Helmet>
      <div className="form-section">
        <div className="form-container">
          <h1 className="section-title">Start a New Project</h1>
          <p className="intro" style={{textAlign: 'center'}}>First, tell us what type of project you have.</p>
          
          <div className="radio-container">
            <label>
              <input type="radio" name="projectType" value="home" checked={formType === 'home'} onChange={() => setFormType('home')} />
              Home Project
            </label>
            <label>
              <input type="radio" name="projectType" value="business" checked={formType === 'business'} onChange={() => setFormType('business')} />
              Business Project
            </label>
          </div>

          {/* This block now only renders after a formType is selected */}
          {formType && (
            formType === 'home' ? <HomeProjectForm /> : <BusinessProjectForm />
          )}
        </div>
      </div>
    </>
  );
}

export default ProjectStartPage;