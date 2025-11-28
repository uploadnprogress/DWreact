import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services Network | DoneWright Services</title>
        <meta name="description" content="Explore the comprehensive range of home and business services offered through the DoneWright Services network. Find expert contractors for any need." />
      </Helmet>
      <div className="content-page-section">
        <h1 className="section-title">Our Services Network</h1>
        <p>DoneWright Services connects you with a vast network of skilled professionals across various categories for both home and business needs.</p>

        <div className="service-tables">
          <div className="service-table">
            <h3>Home Services</h3>
            <ul>
              <li>Home Repairs & Maintenance</li>
              <li>Plumbing & Electrical Work</li>
              <li>HVAC Installation & Repair</li>
              <li>Landscaping & Yard Work</li>
              <li>Cleaning Services & Remodeling</li>
              <li>Painting & Roofing</li>
            </ul>
          </div>

          <div className="service-table">
            <h3>Business Services</h3>
            <ul>
              <li>Commercial Cleaning & Renovations</li>
              <li>IT Support & Networking</li>
              <li>Logistics & Delivery</li>
              <li>Marketing & Design Consulting</li>
              <li>Security Systems & Facilities Management</li>
              <li>Specialized Trade Services</li>
            </ul>
          </div>
        </div>

        <p className="and-more">
            If you don't see what you need, <Link to="/contacts">contact us</Link> and we'll find a pro for you.
        </p>

        <div className="form-button-wrapper">
            <Link to="/start-project" className="btn">Start a Project Today</Link>
        </div>
      </div>
    </>
  );
}

export default ServicesPage;