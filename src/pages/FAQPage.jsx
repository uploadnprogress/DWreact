import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const FAQPage = () => {
  return (
    <div className="form-section">
      <Helmet>
        <title>How It Works & FAQ | DoneWright Services</title>
        <meta name="description" content="Learn how DoneWright Services connects you with vetted professionals. Understanding our process, the 5/5 pricing model, and common questions." />
      </Helmet>

      {/* Reusing the White Box Container but making it wider for text readability */}
      <div className="form-container" style={{ maxWidth: '1000px', padding: '40px' }}>
        
        {/* === PART 1: THE ADVANTAGE (Visual Grid) === */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 className="section-title">The DoneWright Advantage</h1>
          <p className="section-subtitle">Better for Clients. Fairer for Pros. Vetted for Peace of Mind.</p>
        </div>

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

        {/* Divider */}
        <hr style={{ border: '0', height: '1px', background: '#e0e0e0', margin: '50px 0' }} />

        {/* === PART 2: THE DETAILED FAQ === */}
        <div className="faq-content">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>Frequently Asked Questions</h2>

          {/* General Section */}
          <div className="faq-group">
            <h3>What is DoneWright Services?</h3>
            <p>DoneWright Services is a service coordination platform. We connect clients needing home or business services with vetted, qualified, independent professionals from our network. We handle the coordination (scheduling, communication, support) to make the process easier for you, while the independent pro performs the actual work.</p>

            <h3>How is DoneWright different from a traditional contractor?</h3>
            <p>We don't perform the physical work ourselves. Instead, we act as your trusted coordinator, leveraging our network and processes to find the right independent professional for your job and helping manage the project flow.</p>
          </div>

          {/* Client Section */}
          <div className="faq-group">
            <h2 className="faq-category-title">For Clients</h2>
            
            <h3>How do I request a service?</h3>
            <p>Simply fill out the relevant project request form on our site (<Link to="/start-project">Home Project</Link> or <Link to="/business-services">Business Project</Link>). Provide as much detail as possible, and our team will begin the matching process.</p>

            <h3>Who provides the quote or estimate?</h3>
            <p>The independent service professional(s) we connect you with will provide the quote directly to you after discussing the project details.</p>

            <h3>Is there a fee for using DoneWright Services?</h3>
            <p>DoneWright charges a modest service coordination fee (typically 5%) to both the client and the service professional upon successful project completion. This supports our platform, vetting, and coordination efforts.</p>
          </div>

          {/* Pro Section */}
          <div className="faq-group">
            <h2 className="faq-category-title">For Professionals</h2>
            
            <h3>How can I join the network?</h3>
            <p>If you are an independent contractor or vendor, please visit our <Link to="/join-network">Join Us Page</Link> to apply. We review qualifications, licenses, and insurance before approval.</p>

            <h3>How do I receive leads?</h3>
            <p>Once approved, our coordination team will send you qualified project leads that match your skillset and service area. There are no upfront lead fees.</p>
          </div>

          {/* Call to Action Footer */}
          <div style={{ textAlign: 'center', marginTop: '50px', padding: '20px', background: '#f0f8ff', borderRadius: '8px' }}>
            <h3>Ready to get started?</h3>
            <p style={{ marginBottom: '20px' }}>Whether you need a pro or want to join the network, we make it easy.</p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/start-project" className="btn">Start a Project</Link>
              <Link to="/join-network" className="btn" style={{ background: 'transparent', border: '2px solid var(--primary-blue)', color: 'var(--primary-blue)' }}>Join Network</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FAQPage;