import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function JoinNetwork() {
  return (
    <section id="join-network" className="content-section">
      <h2 className="section-title">Join Our Nationwide Network of Vetted Contractors</h2>
      <p className="intro">Are you a skilled professional looking for more opportunities? Partner with DoneWright Services to connect with a steady stream of projects without the hassle of finding clients.</p>
      <div className="form-button-wrapper"> {/* Centering Wrapper */}
        {/* CORRECTED: Use a <Link> component for React Router navigation */}
        <Link to="/ju" className="btn">Become a Provider</Link>
      </div>
    </section>
  );
}

export default JoinNetwork;