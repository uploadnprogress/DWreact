import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function HomeServicesPage() {
  return (
    <>
      <Helmet>
        <title>Home Services | DoneWright Services Seattle</title>
      </Helmet>
      <div className="content-page-section">
        <h1 className="section-title">Residential Services</h1>
        <div className="service-table" style={{ margin: '0 auto', maxWidth: '600px', textAlign: 'center' }}>
          <h3>Home Project Coordination</h3>
          <p>Vetted assembly, mounting, and repairs for Seattle area homes.</p>
          <ul style={{ textAlign: 'left', display: 'inline-block', margin: '20px 0' }}>
            <li>Professional Furniture Assembly</li>
            <li>TV, Art, and Mirror Mounting</li>
            <li>Handyman Repair & Maintenance</li>
            <li>In-Home Project Consultations</li>
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