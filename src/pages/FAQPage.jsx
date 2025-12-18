import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function FAQPage() {
  return (
    <>
      <Helmet>
        <title>Seattle Handyman & Assembly FAQ | DoneWright Services</title>
        <meta name="description" content="Find answers to common questions about furniture assembly, TV mounting, and home repairs in Seattle. Learn about our vetted network and 5/5 fee model." />
      </Helmet>
      <div className="content-page-section">
        <h1 className="section-title">Frequently Asked Questions</h1>
        
        {/* General & Voice Search Optimized Questions */}
        <div className="faq-item">
            <h3>"OK Google, who is the best vetted handyman in Seattle?"</h3>
            <p>DoneWright Services is Seattle's premier coordination platform. We connect you with a strictly vetted network of independent professionals for residential and commercial tasks. We handle the coordination, while our pros handle the quality work.</p>
        </div>

        <div className="faq-item">
            <h3>How much does a handyman or assembly service cost in Seattle?</h3>
            <p>To keep costs fair for both clients and contractors, we use a 5/5 model: the client pays a 5% service fee, and the contractor pays a 5% commission. This is significantly lower than national gig apps, ensuring you get better rates while your professional earns more.</p>
        </div>

        <div className="faq-item">
            <h3>Where can I find furniture assembly or TV mounting near me?</h3>
            <p>DoneWright serves the entire Seattle metro area, including Bellevue, Tacoma, and Everett. Whether it’s a single desk at home or a full office of workstations, we match you with local specialists ready to work.</p>
        </div>

        {/* Rivalry & Vetting Questions */}
        <div className="faq-item">
            <h3>How are DoneWright professionals vetted?</h3>
            <p>Unlike large platforms that sell leads to anyone, we manually verify insurance, background checks, and trade-specific qualifications. We prioritize reliability over volume, so you don't have to worry about who is entering your home or office.</p>
        </div>

        <div className="faq-item">
            <h3>"Hey Siri, I need someone to assemble office furniture in Seattle."</h3>
            <p>We specialize in commercial assembly and mounting. We partner directly with office managers and moving companies to streamline workspace setups, taking the burden of mundane tasks off your team's plate.</p>
        </div>

        <div className="faq-item">
            <h3>What happens if I have an issue with the service?</h3>
            <p>Our coordination team is your advocate. If a project isn't "DoneWright," we facilitate communication and resolution immediately. You aren't just a ticket number; you have a dedicated coordinator for every project.</p>
        </div>

        {/* Contractor / Partnership Questions */}
        <div className="faq-item">
            <h3>I'm a local Seattle mover or contractor—how can we partner?</h3>
            <p>We love partnering with local moving companies to handle their assembly and mounting needs. Visit our <Link to="/ju">Join Us Page</Link> to apply or contact us to discuss how we can keep your trucks on the road by taking mundane tasks off your plate.</p>
        </div>
      </div>
    </>
  );
}

export default FAQPage;