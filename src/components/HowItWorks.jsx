import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  return (
    <div className="form-section">
      <Helmet>
        <title>How It Works & Transparency | DoneWright Services</title>
        <meta name="description" content="Learn how DoneWright Services connects you with vetted professionals. Understanding our transparent 5/5 pricing model and membership benefits." />
      </Helmet>

      <div className="form-container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px' }}>
        
        {/* === HEADER === */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 className="section-title">How DoneWright Works</h1>
          <p className="section-subtitle" style={{ fontSize: '18px', color: '#555' }}>Better for Clients. Fairer for Pros. Vetted for Peace of Mind.</p>
        </div>

        {/* === THE TRANSPARENCY DISCLAIMER === */}
        <div style={{ background: '#e6f2ff', border: '2px solid #007bff', padding: '25px', borderRadius: '8px', marginBottom: '50px' }}>
          <h3 style={{ color: '#0056b3', marginTop: '0', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '24px' }}>⚖️</span> The DoneWright Transparency Disclaimer
          </h3>
          <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#333', marginBottom: '15px' }}>
            We believe in total financial transparency. We are a coordination and logistics network, not a traditional contractor. Here is exactly how our fee structure works:
          </p>
          <ul style={{ fontSize: '15px', lineHeight: '1.6', color: '#333', margin: '0', paddingLeft: '20px' }}>
            <li><strong>The "5/5" Public Model:</strong> For standard non-members, we charge a flat 5% coordination fee to the client and a 5% lead fee to the contractor upon project completion. No hidden markups.</li>
            <li><strong>The DoneWright Standard (Members):</strong> Members pay <strong>$0 in client coordination fees</strong>. We only collect the 5% lead fee directly from the contractor.</li>
            <li><strong>Direct Quotes:</strong> The actual cost of your project (labor and materials) is quoted directly to you by the vetted independent professional performing the work.</li>
          </ul>
        </div>

        {/* === PART 1: THE ADVANTAGE === */}
        <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginBottom: '50px' }}>
          <div className="step-card" style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>1. Vetted Professionals Only</h3>
            <p style={{ marginTop: '10px' }}>Unlike national gig apps, we don't sell leads to the highest bidder. Every contractor is background-checked, insured, and manually verified by our team.</p>
          </div>

          <div className="step-card" style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>2. Seamless Coordination</h3>
            <p style={{ marginTop: '10px' }}>We handle the matchmaking, scheduling, and logistics so you don't have to chase down contractors who won't return your calls.</p>
          </div>

          <div className="step-card" style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>3. Specialized Partnerships</h3>
            <p style={{ marginTop: '10px' }}>We partner with Seattle realtors and office managers to handle the 'mundane' tasks—assembly, mounting, and repairs—so they can focus on the heavy lifting.</p>
          </div>
        </div>

        <hr style={{ border: '0', height: '1px', background: '#e0e0e0', margin: '50px 0' }} />

        {/* === PART 2: THE DETAILED FAQ === */}
        <div className="faq-content">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>Frequently Asked Questions</h2>

          <div className="faq-group" style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#007bff' }}>What is DoneWright Services?</h3>
            <p>DoneWright Services is a service coordination platform. We connect clients needing home or business services with vetted, qualified, independent professionals from our network.</p>
          </div>

          <div className="faq-group" style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#007bff' }}>How is DoneWright different from a traditional contractor?</h3>
            <p>We don't perform the physical work ourselves. Instead, we act as your trusted coordinator, leveraging our network to find the right independent professional for your job and helping manage the project flow.</p>
          </div>

          <div className="faq-group" style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#007bff' }}>How do I request a service?</h3>
            <p>Simply fill out the relevant project request form on our site (<Link to="/start-project" state={{ type: 'home' }}>Home Project</Link> or <Link to="/start-project" state={{ type: 'business' }}>Business Project</Link>). Provide as much detail as possible, and our team will begin the matching process.</p>
          </div>
        </div>

        {/* === CALL TO ACTION FOOTER === */}
        <div style={{ textAlign: 'center', marginTop: '50px', padding: '40px', background: '#f0f8ff', borderRadius: '8px' }}>
          <h2>Ready to get started?</h2>
          <p style={{ marginBottom: '20px', fontSize: '16px' }}>Whether you need a pro or want to join the network, we make it easy.</p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/standard" className="btn submit-btn" style={{ textDecoration: 'none' }}>Join The Standard</Link>
            <Link to="/start-project" className="btn submit-btn" style={{ background: 'transparent', border: '2px solid #007bff', color: '#007bff', textDecoration: 'none' }}>Start a Project</Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;