import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import JoinNetwork from '../components/JoinNetwork';

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>DoneWright Services | Seattle Vetted Contractor Network</title>
      </Helmet>

      {/* Hero Section with Brand Gradient */}
      <section className="hero">
        <div className="container">
          <h2>We Coordinate. They Deliver.</h2>
          <p>Seattle's premier network of vetted independent contractors.</p>
        </div>
      </section>

      {/* Professional Services Section */}
      <section className="content-section">
        <div className="container">
          <h2 className="section-title">Professional Services for Every Need</h2>
          <p className="intro">Select a service to begin.</p>
          
          <div className="service-cards">
            {/* Residential Tile */}
            <div 
              className="card" 
              onClick={() => navigate('/start-project', { state: { type: 'home' } })} 
              style={{
                cursor: 'pointer',
                backgroundImage: 'url("https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&w=800&q=80")' 
              }}
            >
              <div className="card-content">
                <h4>Residential</h4>
                <p>Assembly, mounting, and home repairs.</p>
              </div>
            </div>

            {/* Business Tile */}
            <div 
              className="card" 
              onClick={() => navigate('/start-project', { state: { type: 'business' } })} 
              style={{
                cursor: 'pointer',
                backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80")'
              }}
            >
              <div className="card-content">
                <h4>Commercial</h4>
                <p>Office setups and retail maintenance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <JoinNetwork />
    </>
  );
}

export default HomePage;