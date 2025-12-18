import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import JoinNetwork from '../components/JoinNetwork';

function HomePage() {
  const navigate = useNavigate();

  // This handles the "action" when the tile is clicked
  const handleTileClick = (type) => {
    navigate('/start-project', { state: { type } });
  };

  return (
    <>
      <Helmet>
        <title>DoneWright Services | Vetted Contractor Network Seattle</title>
      </Helmet>

      <section className="content-section">
        <h1 className="section-title">Professional Services for Every Need</h1>
        <p className="intro">We Coordinate. They Deliver. Select a service to begin.</p>
        
        {/* Using your styles.css classes: service-cards and card */}
        <div className="service-cards">
          
          {/* Residential Tile */}
          <div className="card" onClick={() => handleTileClick('home')} style={{cursor: 'pointer'}}>
            <div className="card-content">
              <h4>Residential</h4>
              <p>Assembly, mounting, and home repairs.</p>
              <span className="btn" style={{marginTop: '10px'}}>Get Started</span>
            </div>
          </div>

          {/* Business Tile */}
          <div className="card" onClick={() => handleTileClick('business')} style={{cursor: 'pointer'}}>
            <div className="card-content">
              <h4>Commercial</h4>
              <p>Office setups and retail maintenance.</p>
              <span className="btn" style={{marginTop: '10px'}}>Get Started</span>
            </div>
          </div>

        </div>
      </section>

      <JoinNetwork />
    </>
  );
}

export default HomePage;