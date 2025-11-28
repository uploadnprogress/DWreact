import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function HomeServicesPage() {
  return (
    <>
      <Helmet>
        <title>The DoneWright Difference for Home Services</title>
        <meta name="description" content="Discover why homeowners trust DoneWright Services for vetted, reliable contractors and stress-free project coordination." />
      </Helmet>
      <div className="content-page-section">
        <h1 className="section-title">The DoneWright Difference: Home Services</h1>
        <p>Finding the right professional for your home project can be stressful. At DoneWright Services, we eliminate the guesswork. We don't just find a contractor; we connect you with a vetted, reliable partner who is right for your specific job, ensuring quality and peace of mind from start to finish.</p>
        {/* You can add more detailed content here */}
        <div className="form-button-wrapper">
            <Link to="/start-project" className="btn">Start Your Home Project</Link>
        </div>
      </div>
    </>
  );
}

export default HomeServicesPage;