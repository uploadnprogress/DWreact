import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function Services() {
  return (
    <section id="services" className="content-section">
      <h2 className="section-title">Connecting You With Nationwide Home & Business Expertise</h2>
      <div className="service-cards">
        <Link 
          to="/home-services" 
          className="card" 
          style={{ backgroundImage: `url(/images/home-services.jpg)` }}
        >
          <div className="card-content">
            <h4>Home Services</h4>
            <p>From minor repairs to major renovations, find trusted pros for any home project.</p>
          </div>
        </Link>
        <Link 
          to="/business-services" 
          className="card" 
          style={{ backgroundImage: `url(/images/business-services.jpg)` }}
        >
          <div className="card-content">
            <h4>Business Services</h4>
            <p>Streamline your operations with expert consulting and specialized project support.</p>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Services;