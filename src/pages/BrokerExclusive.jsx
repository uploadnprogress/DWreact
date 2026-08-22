import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const BrokerExclusive = () => {
  return (
    <div className="form-section">
      <Helmet><title>Redeem Your Partner Gift | DoneWright Services</title></Helmet>
      
      <div className="form-container" style={{ maxWidth: '900px', margin: '0 auto', padding: '40px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 className="section-title">Welcome to The DoneWright Standard</h1>
          <p style={{ fontSize: '18px', color: '#555', marginTop: '15px', lineHeight: '1.6' }}>
            Please activate your 3-Month Premium Property Care Membership below.
          </p>
        </div>

        {/* === THE DIGITAL GIFT CARD VISUAL === */}
        <div style={{ 
          background: 'linear-gradient(135deg, #002244 0%, #0056b3 100%)', 
          borderRadius: '16px', 
          padding: '40px', 
          color: 'white', 
          boxShadow: '0 15px 35px rgba(0,0,0,0.2)', 
          position: 'relative', 
          overflow: 'hidden',
          marginBottom: '50px',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}></div>
          <div style={{ position: 'absolute', bottom: '-80px', left: '-20px', width: '150px', height: '150px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}></div>
          
          <div style={{ position: 'relative', zIndex: '1', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h2 style={{ margin: '0', fontSize: '28px', letterSpacing: '1px', textTransform: 'uppercase', color: '#fff' }}>The DoneWright Standard</h2>
                <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#b3d4fc', textTransform: 'uppercase', letterSpacing: '2px' }}>Premium Partner Gift</p>
              </div>
              <div style={{ fontSize: '30px' }}>🛡️</div>
            </div>
            
            <div style={{ marginTop: '40px' }}>
              <p style={{ margin: '0', fontSize: '14px', color: '#b3d4fc' }}>Compliments of</p>
              <p style={{ margin: '0', fontSize: '20px', fontWeight: 'bold', color: '#f8d25c' }}>Your Real Estate Partner</p>
            </div>
          </div>
        </div>

        {/* THE 3-MONTH PUNCH CARD VISUAL */}
        <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '8px', borderLeft: '4px solid #007bff', marginBottom: '40px' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '25px', color: '#333' }}>Your Exclusive Benefits</h3>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-between', textAlign: 'center' }}>
            <div style={{ flex: '1 1 250px' }}>
              <div style={{ fontSize: '40px', marginBottom: '10px' }}>📦</div>
              <h4 style={{ color: '#007bff' }}>Month 1</h4>
              <p style={{ fontSize: '15px' }}>Elite Move-In Session<br/><span style={{ color: '#666', fontSize: '13px' }}>(2-Hour Pro Setup)</span></p>
            </div>
            
            <div style={{ flex: '1 1 250px' }}>
              <div style={{ fontSize: '40px', marginBottom: '10px' }}>📋</div>
              <h4 style={{ color: '#007bff' }}>Month 2</h4>
              <p style={{ fontSize: '15px' }}>Safety Audit<br/><span style={{ color: '#666', fontSize: '13px' }}>(20-Point Digital Report)</span></p>
            </div>
            
            <div style={{ flex: '1 1 250px' }}>
              <div style={{ fontSize: '40px', marginBottom: '10px' }}>🔧</div>
              <h4 style={{ color: '#007bff' }}>Month 3</h4>
              <p style={{ fontSize: '15px' }}>Precision Maintenance<br/><span style={{ color: '#666', fontSize: '13px' }}>(2-Hour List Fulfillment)</span></p>
            </div>
          </div>
        </div>

        {/* CTA BUTTON */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/partner-redemption" className="btn submit-btn" style={{ padding: '15px 40px', fontSize: '18px', textDecoration: 'none' }}>
            Redeem Your Voucher Now
          </Link>
        </div>

      </div>
    </div>
  );
};

export default BrokerExclusive;