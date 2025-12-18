import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function HomeServicesPage() {
  return (
    <>
      <Helmet>
        <title>Residential Services | DoneWright Services</title>
      </Helmet>
      
      <div className="content-page-section">
        <h1 className="section-title">Home Services</h1>
        <div className="service-table" style={{ margin: '0 auto', maxWidth: '600px' }}>
          <h3>Residential Coordination</h3>
          <p style={{marginBottom: '20px'}}>
            Seattle's most trusted path to furniture assembly, TV mounting, and home repairs. 
            All pros are vetted, insured, and background-checked.
          </p>
          <ul style={{marginBottom: '30px'}}>
            <li>Expert Furniture Assembly</li>
            <li>Precision TV & Wall Mounting</li>
            <li>General Handyman Repairs</li>
            <li>In-Home Consultation</li>
          </ul>
          <div className="form-button-wrapper">
            <Link to="/start-project" state={{ type: 'home' }} className="btn">
              Start Home Project
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeServicesPage;