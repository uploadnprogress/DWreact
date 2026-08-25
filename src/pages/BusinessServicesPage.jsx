import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function BusinessServicesPage() {
  return (
    <>
      <Helmet>
        <title>Automation for Service Pros | DoneWright Services</title>
        <meta name="description" content="Stop paying platform fees. Custom booking portals for contractors, cleaners, and vendors. $497 setup + $147/month. No transaction fees." />
      </Helmet>
      
      <div className="content-page-section" style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
        <h1 className="section-title" style={{ textAlign: 'center' }}>Automation for Service Pros</h1>
        
        <section aria-labelledby="consulting-quote" style={{ 
          background: 'linear-gradient(135deg, #e3f2fd, #bbdefb)', 
          padding: '40px', 
          borderRadius: '12px',
          textAlign: 'center',
          marginBottom: '30px'
        }}>
          <h2 id="consulting-quote" style={{ fontSize: '1.4rem', fontWeight: '300', marginBottom: '15px' }}>
            "Stop paying platform fees. I build custom booking portals for contractors, cleaners, and vendors."
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#333', marginBottom: '20px' }}>
            <strong>$497 setup</strong> + <strong>$147/month</strong>
            <span style={{ display: 'block', fontSize: '0.9rem', color: '#555', marginTop: '5px' }}>
              No transaction fees. You keep 100% of your revenue.
            </span>
          </p>
          <Link to="/join-us" className="btn" style={{ padding: '14px 40px', fontSize: '1.1rem' }} aria-label="Apply to partner and get your custom booking portal">
            Apply to Partner →
          </Link>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '8px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '5px' }} aria-hidden="true">📋</h3>
            <h4>Custom Booking Portal</h4>
            <p style={{ fontSize: '0.9rem', color: '#555' }}>Fully branded with your services, pricing, and availability.</p>
          </div>
          <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '8px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '5px' }} aria-hidden="true">💳</h3>
            <h4>Deposit Collection</h4>
            <p style={{ fontSize: '0.9rem', color: '#555' }}>Take 50% deposits upfront. Stop getting ghosted.</p>
          </div>
          <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '8px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '5px' }} aria-hidden="true">📱</h3>
            <h4>Mobile-Friendly</h4>
            <p style={{ fontSize: '0.9rem', color: '#555' }}>Clients book from their phone in under 60 seconds.</p>
          </div>
          <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '8px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '5px' }} aria-hidden="true">🔄</h3>
            <h4>No Transaction Fees</h4>
            <p style={{ fontSize: '0.9rem', color: '#555' }}>Keep 100% of what your clients pay you.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BusinessServicesPage;