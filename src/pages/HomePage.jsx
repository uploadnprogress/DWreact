import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom'; // Required for the buttons to work
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Services from '../components/Services';
import JoinNetwork from '../components/JoinNetwork';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Vetted Home & Business Contractors in Seattle | DoneWright Services</title>
        <meta name="description" content="DoneWright Services connects Seattle homeowners and businesses with vetted, reliable contractors. Get stress-free coordination for your next project. Request a quote!" />
      </Helmet>

      <Hero />
      
      {/* If your tiles are part of the Services component, 
          you should apply the Link logic inside src/components/Services.jsx.
          If you are adding them directly here, use the code below: 
      */}
      
      <section className="category-section">
        <div className="container">
          <div className="services-grid">
            {/* Home Tile */}
            <div className="category-card">
              <h3>Residential</h3>
              <p>Assembly, mounting, and home repairs.</p>
              <Link to="/start-project" state={{ type: 'home' }} className="btn">
                Get Started
              </Link>
            </div>

            {/* Business Tile */}
            <div className="category-card">
              <h3>Commercial</h3>
              <p>Office setups, retail mounting, and corporate repairs.</p>
              <Link to="/start-project" state={{ type: 'business' }} className="btn">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <Services />
      <JoinNetwork />
    </>
  );
}

export default HomePage;