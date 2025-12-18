import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function HomeServicesPage() {
  return (
    <>
      <Helmet>
        <title>Home Services | DoneWright Services</title>
        <meta name="description" content="Vetted residential services in Seattle including furniture assembly, mounting, and home repairs." />
      </Helmet>
      
      <div className="content-page-section">
        <h1 className="section-title">Home Services</h1>
        <p className="intro" style={{ textAlign: 'center' }}>
          Professional, vetted support for all your residential needs.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <h4>Residential Assembly</h4>
            <p>From IKEA furniture to complex outdoor sets, we get it done right.</p>
            {/* Direct link to Home Form */}
            <Link to="/start-project" state={{ type: 'home' }} className="btn">
              Get Started
            </Link>
          </div>

          <div className="service-card">
            <h4>TV & Art Mounting</h4>
            <p>Secure, level, and professional mounting for your home entertainment.</p>
            {/* Direct link to Home Form */}
            <Link to="/start-project" state={{ type: 'home' }} className="btn">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeServicesPage;