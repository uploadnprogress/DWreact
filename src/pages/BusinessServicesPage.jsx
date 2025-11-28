import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function BusinessServicesPage() {
  return (
    <>
      <Helmet>
        <title>The DoneWright Difference for Business Services</title>
        <meta name="description" content="Learn how DoneWright Services streamlines business projects by providing expert contractors and consultants through our vetted nationwide network." />
      </Helmet>
      <div className="content-page-section">
        <h1 className="section-title">The DoneWright Difference: Business Services</h1>
        <p>Your business operates on efficiency and reliability. So do we. DoneWright Services acts as your strategic partner, connecting you with top-tier professionals for everything from IT support to commercial renovations. We handle the coordination so you can focus on your business.</p>
        {/* You can add more detailed content here */}
        <div className="form-button-wrapper">
            <Link to="/start-project" className="btn">Start Your Business Project</Link>
        </div>
      </div>
    </>
  );
}

export default BusinessServicesPage;