import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function BusinessServicesPage() {
  return (
    <>
      <Helmet>
        <title>Business Services | DoneWright Services Seattle</title>
      </Helmet>
      <div className="content-page-section">
        <h1 className="section-title">Commercial Services</h1>
        <div className="service-table" style={{ margin: '0 auto', maxWidth: '600px', textAlign: 'center' }}>
          <h3>Business Project Coordination</h3>
          <p>Specialized mounting, assembly, and maintenance for Seattle businesses.</p>
          <ul style={{ textAlign: 'left', display: 'inline-block', margin: '20px 0' }}>
            <li>Office Furniture & Workstation Setup</li>
            <li>Retail Displays & Gallery Mounting</li>
            <li>Commercial Facilities Maintenance</li>
            <li>IT Infrastructure & Network Mounting</li>
          </ul>
          <div className="form-button-wrapper">
            <Link to="/start-project" state={{ type: 'business' }} className="btn">
              Start Business Project
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default BusinessServicesPage;