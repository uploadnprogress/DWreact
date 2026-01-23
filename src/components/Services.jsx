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
              <div className="service-icon-placeholder" role="img" aria-label="Home interior">🏠</div>
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
              <div className="service-icon-placeholder" role="img" aria-label="Office space">🏢</div>
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

        {/* === ADDED: FOOTER SECTION FROM HOW IT WORKS === */}
        <div style={{ textAlign: 'center', marginTop: '80px', padding: '30px', background: '#f0f8ff', borderRadius: '8px' }}>
            <h3>Ready to get started?</h3>
            <p style={{ marginBottom: '20px' }}>Whether you need a pro or want to join the network, we make it easy.</p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/start-project" className="btn">Start a Project</Link>
            {/* Using explicit hex code for blue to ensure consistency */}
            <Link to="/join-network" className="btn" style={{ background: 'transparent', border: '2px solid #007bff', color: '#007bff' }}>Join Network</Link>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Services;