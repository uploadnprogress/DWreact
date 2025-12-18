import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <h2 className="section-title">Professional Services for Every Need</h2>
        <p className="section-subtitle">
          Vetted expertise for your home or business, delivered with a transparent 5/5 fee model.
        </p>

        <div className="services-grid">
          {/* Residential / Home Tile */}
          <div className="service-card">
            <div className="card-image-wrapper">
              {/* If using an img tag, ensure descriptive alt text for SEO */}
              <div className="service-icon-placeholder" role="img" aria-label="Home interior with assembled furniture">🏠</div>
            </div>
            <div className="card-content">
              <h3>Residential Services</h3>
              <p>
                From furniture assembly and TV mounting to general home repairs. 
                Get connected with Seattle's most reliable independent pros.
              </p>
              <ul className="service-list">
                <li>Furniture Assembly</li>
                <li>TV & Art Mounting</li>
                <li>Handyman Repairs</li>
              </ul>
              <Link 
                to="/start-project" 
                state={{ type: 'home' }} 
                className="btn"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Commercial / Business Tile */}
          <div className="service-card">
            <div className="card-image-wrapper">
              <div className="service-icon-placeholder" role="img" aria-label="Modern office space with workstations">🏢</div>
            </div>
            <div className="card-content">
              <h3>Business Services</h3>
              <p>
                Specialized support for office setups, retail displays, and corporate 
                maintenance. We partner with office managers to keep your business running.
              </p>
              <ul className="service-list">
                <li>Office Furniture Setup</li>
                <li>Retail & Gallery Mounting</li>
                <li>Commercial Maintenance</li>
              </ul>
              <Link 
                to="/start-project" 
                state={{ type: 'business' }} 
                className="btn"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;