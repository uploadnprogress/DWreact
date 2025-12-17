import React from 'react';

const HowItWorks = () => {
  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="container">
        <h2 className="section-title">The DoneWright Advantage</h2>
        <p className="section-subtitle">Better for Clients. Fairer for Pros. Vetted for Peace of Mind.</p>
        
        <div className="steps-grid">
          <div className="step-card">
            <h3>1. Vetted Professionals Only</h3>
            <p>Unlike national gig apps, we don't sell leads to the highest bidder. Every contractor is background-checked, insured, and manually verified by our team.</p>
          </div>

          <div className="step-card">
            <h3>2. The "5/5" Pricing Model</h3>
            <p>We've disrupted the market by ditching high lead fees. We charge a flat 5% to the client and 5% to the contractor. This keeps costs low and ensures your pro is paid what they deserve.</p>
          </div>

          <div className="step-card">
            <h3>3. Specialized Partnerships</h3>
            <p>We partner with Seattle moving companies and office managers to handle the 'mundane' tasks—assembly, mounting, and repairs—so they can focus on the heavy lifting.</p>
          </div>
        </div>
        
        <div className="cta-container">
          <p>Ready to experience the difference? No upfront lead fees, ever.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;