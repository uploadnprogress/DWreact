import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const SecureTransit = () => {
  return (
    <div className="form-section">
      <Helmet><title>Secure Transit | A DoneWright Service</title></Helmet>
      
      <div className="form-container" style={{ maxWidth: '900px', margin: '0 auto', padding: '40px' }}>
        
        {/* === PREMIUM VAULT HEADER VISUAL === */}
        <div style={{ 
          background: 'linear-gradient(145deg, #0a0a0a 0%, #1a1a2e 100%)', 
          borderRadius: '16px', 
          padding: '50px 40px', 
          color: 'white', 
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)', 
          position: 'relative', 
          overflow: 'hidden',
          marginBottom: '50px',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          {/* Subtle grid background pattern for tech/security feel */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.05, backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          <div style={{ position: 'relative', zIndex: '1', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '10px' }}>🛡️</div>
            <h1 style={{ margin: '0 0 10px 0', fontSize: '36px', letterSpacing: '2px', textTransform: 'uppercase', color: '#fff', fontWeight: '800' }}>
              Secure Transit
            </h1>
            <p style={{ margin: '0 auto 20px', fontSize: '14px', color: '#f8d25c', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 'bold' }}>
              A DoneWright Service
            </p>
            <p style={{ margin: '0 auto', fontSize: '16px', color: '#a0aabf', maxWidth: '600px', lineHeight: '1.6' }}>
              White-Glove, Hand-to-Hand Delivery for Luxury Retail & High-Value Assets. 
              Encrypted logistics built for peace of mind.
            </p>
          </div>
        </div>

        {/* FEATURES GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '50px' }}>
          <div style={{ background: '#f8f9fa', padding: '25px 20px', borderRadius: '8px', textAlign: 'center', borderTop: '4px solid #1a1a2e' }}>
            <div style={{ fontSize: '28px', marginBottom: '15px' }}>🔐</div>
            <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#1a1a2e' }}>Encrypted Hand-Offs</h3>
            <p style={{ fontSize: '14px', color: '#555' }}>No porch drops. Deliveries require a secure 6-digit release code and physical hand-off to the authorized receiver.</p>
          </div>
          <div style={{ background: '#f8f9fa', padding: '25px 20px', borderRadius: '8px', textAlign: 'center', borderTop: '4px solid #1a1a2e' }}>
            <div style={{ fontSize: '28px', marginBottom: '15px' }}>📍</div>
            <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#1a1a2e' }}>Real-Time Tracking</h3>
            <p style={{ fontSize: '14px', color: '#555' }}>Track your high-value assets securely from our dispatch center directly to your client's hands.</p>
          </div>
          <div style={{ background: '#f8f9fa', padding: '25px 20px', borderRadius: '8px', textAlign: 'center', borderTop: '4px solid #1a1a2e' }}>
            <div style={{ fontSize: '28px', marginBottom: '15px' }}>🌙</div>
            <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#1a1a2e' }}>10 PM Windows</h3>
            <p style={{ fontSize: '14px', color: '#555' }}>We work on your client's schedule, offering discrete and secure evening deliveries upon request.</p>
          </div>
        </div>

        {/* CTA BUTTON */}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link to="/transit-request" className="btn submit-btn" style={{ background: '#1a1a2e', padding: '15px 40px', fontSize: '18px', textDecoration: 'none' }}>
            Initialize Transit Request
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SecureTransit;