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

      <section className="hero">
        <div className="container">
          {/* H1 for Brand Dominance */}
          <h1>DoneWright Services</h1>
          {/* H2 for Tagline */}
          <h2>We Coordinate. They Deliver.</h2>
          <p>Seattle's premier network of vetted independent contractors.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2 className="section-title">Professional Services for Every Need</h2>
          <div className="service-cards">
            <div 
              className="card" 
              onClick={() => navigate('/start-project', { state: { type: 'home' } })} 
              style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/images/home-services.jpg")' }}
            >
              <div className="card-content">
                <h4>Residential</h4>
                <p>Assembly, mounting, and repairs.</p>
              </div>
            </div>

            <div 
              className="card" 
              onClick={() => navigate('/start-project', { state: { type: 'business' } })} 
              style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80")' }}
            >
              <div className="card-content">
                <h4>Commercial</h4>
                <p>Office and retail maintenance.</p>
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