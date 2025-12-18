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

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          {/* Brand Name Text added here */}
          <h3 style={{ color: 'white', fontWeight: 'bold', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>
            DoneWright Services
          </h3>
          <h2>We Coordinate. They Deliver.</h2>
          <p>Seattle's premier network of vetted independent contractors.</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="content-section">
        <div className="container">
          <h2 className="section-title">Professional Services for Every Need</h2>
          <p className="intro">Select a service to begin.</p>
          
          <div className="service-cards">
            {/* Residential Tile - Image path updated to local folder */}
            <div 
              className="card" 
              onClick={() => navigate('/start-project', { state: { type: 'home' } })} 
              style={{
                cursor: 'pointer',
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("/images/home-services.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="card-content">
                <h4>Residential</h4>
                <p>Assembly, mounting, and home repairs.</p>
              </div>
            </div>

            {/* Commercial Tile */}
            <div 
              className="card" 
              onClick={() => navigate('/start-project', { state: { type: 'business' } })} 
              style={{
                cursor: 'pointer',
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
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