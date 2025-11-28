import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function FAQPage() {
  return (
    <>
      <Helmet>
        <title>How It Works (FAQ) | DoneWright Services</title>
        <meta name="description" content="Find answers to common questions about how DoneWright Services connects you with vetted contractors for home and business projects." />
      </Helmet>
      <div className="content-page-section">
        <h1 className="section-title">Frequently Asked Questions</h1>
        
        <div className="faq-item">
            <h3>What is DoneWright Services?</h3>
            <p>DoneWright Services is a service coordination platform. We connect clients needing home or business services with vetted, qualified, independent professionals from our network. We handle the coordination (scheduling, communication, support) to make the process easier for you, while the independent pro performs the actual work.</p>
        </div>

        <div className="faq-item">
            <h3>How is DoneWright different from a traditional contractor?</h3>
            <p>We don't perform the physical work ourselves. Instead, we act as your trusted coordinator, leveraging our network and processes to find the right independent professional for your job and helping manage the project flow. This allows us to ensure compliance and connect you with specialized local talent.</p>
        </div>

        <div className="faq-item">
            <h3>How does DoneWright select the professionals in its network?</h3>
            <p>All independent professionals in our network undergo a vetting process, which may include checks for relevant licenses, insurance (held by the pro), and reviews of past work or references, depending on the service type.</p>
        </div>

        <div className="faq-item">
            <h3>How do I request a service?</h3>
            <p>Simply fill out the relevant project request form on our site (<Link to="/start-project">Home Project or Business Project</Link>). Provide as much detail as possible about your needs. Our coordination team will review your request and begin the matching process.</p>
        </div>

        <div className="faq-item">
            <h3>How does the matching process work?</h3>
            <p>Based on your project details (service type, location, scope), we identify suitable independent professionals within our network. We facilitate the connection, and the pro will typically reach out to discuss specifics and provide a quote directly to you.</p>
        </div>

        <div className="faq-item">
            <h3>Who provides the quote or estimate?</h3>
            <p>The independent service professional(s) we connect you with will provide the quote or estimate directly to you after discussing the project details.</p>
        </div>

        <div className="faq-item">
            <h3>Do I communicate directly with the professional?</h3>
            <p>Yes. Once DoneWright connects you with a professional, you will communicate directly with them regarding project specifics, scheduling the work, and any questions about the job itself. DoneWright's coordination team is also available for support throughout the process.</p>
        </div>

        <div className="faq-item">
            <h3>Is there a fee for using DoneWright Services?</h3>
            <p>DoneWright charges a modest service coordination fee (typically 5%, as detailed in our <Link to="/terms">Terms of Service</Link>) to both the client and the service professional upon successful project completion. This fee supports our platform, vetting process, and coordination efforts.</p>
        </div>

        <div className="faq-item">
            <h3>What if I have an issue with the work performed?</h3>
            <p>If you encounter any issues, please contact the DoneWright coordination team immediately. While the service agreement is between you and the independent professional, we will help facilitate communication and resolution according to our platform policies outlined in the <Link to="/terms">Terms of Service</Link>.</p>
        </div>
        
        <div className="faq-item">
            <h3>How can I join the DoneWright network?</h3>
            <p>If you are an independent contractor or service provider interested in joining our network, please visit our <Link to="/ju">Join Us Page</Link> and complete the application form. We'll review your qualifications and get in touch.</p>
        </div>

        <div className="faq-item">
            <h3>What are the requirements to join?</h3>
            <p>Professionals must typically provide proof of necessary licenses (if applicable to their trade and location), carry appropriate business liability insurance, and demonstrate a history of quality work and professionalism. Specific requirements may vary.</p>
        </div>

        <div className="faq-item">
            <h3>How do I receive project leads?</h3>
            <p>Once approved and active in our network, our coordination team will send you qualified project leads that match your skillset and service area based on client requests submitted through our platform.</p>
        </div>

        <div className="faq-item">
            <h3>What payment methods are accepted?</h3>
            <p>Payment terms and methods are typically arranged directly between the client and the independent service professional. DoneWright may facilitate payment processing in some cases, as outlined in the project agreement.</p>
        </div>

        <div className="faq-item">
            <h3>Who do I contact for support or questions?</h3>
            <p>For any questions about using the DoneWright platform or the coordination process, please use our <Link to="/contacts">Contact Page</Link> to reach our support team.</p>
        </div>
      </div>
    </>
  );
}

export default FAQPage;