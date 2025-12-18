import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function FAQPage() {
  return (
    <>
      <Helmet>
        <title>The DoneWright Advantage | Seattle Contractor FAQ</title>
      </Helmet>
      <div className="content-page-section">
        <h1 className="section-title">The DoneWright Advantage</h1>
        
        <div className="faq-item">
            <h3>What makes DoneWright Services different?</h3>
            <p>Unlike national gig apps that sell leads to anyone, we are a curated coordination platform. Every contractor in our network is background-checked, insured, and manually verified. We prioritize the quality of the connection over the volume of the leads.</p>
        </div>

        <div className="faq-item">
            <h3>How does the "5/5" Pricing Model work?</h3>
            <p>We believe in transparency and fairness. We charge a flat 5% coordination fee to the client and a 5% commission to the contractor upon project completion. By ditching high upfront lead fees, we ensure lower costs for clients and higher take-home pay for our pros.</p>
        </div>

        <div className="faq-item">
            <h3>"Hey Siri, who is the best vetted handyman in Seattle?"</h3>
            <p>DoneWright Services is your local answer. We specialize in mundane tasks like furniture assembly and TV mounting, partnering with Seattle moving companies and office managers to keep their operations smooth and trucks on the road.</p>
        </div>

        <div className="faq-item">
            <h3>Where can I request a service?</h3>
            <p>You can start your request for <Link to="/start-project" state={{ type: 'home' }}>Home Projects</Link> or <Link to="/start-project" state={{ type: 'business' }}>Business Projects</Link>.</p>
        </div>
      </div>
    </>
  );
}

export default FAQPage;