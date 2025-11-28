import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function TermsOfServicePage() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | DoneWright Services</title>
      </Helmet>
      <div className="content-page-section">
        <h1 className="section-title">Terms of Service</h1>
        <p><strong>Last Updated: October 11, 2025</strong></p>

        <h3>1. Introduction & Acceptance of Terms</h3>
        <p>Welcome to DoneWright Services. These Terms of Service ("Terms") govern your use of the DoneWright Services website, platform, and coordination services (collectively, the "Platform"). By accessing or using the Platform, whether as a client seeking services ("Client") or an independent service provider seeking opportunities ("Professional"), you agree to be bound by these Terms and our <Link to="/privacy">Privacy Policy</Link>. If you do not agree to these Terms, you may not access or use the Platform.</p>
        <p><strong>IMPORTANT:</strong> DoneWright Services acts solely as a coordination platform to facilitate connections between Clients and independent Professionals. DoneWright Services DOES NOT directly perform or guarantee the services provided by Professionals. The contract for services is directly between the Client and the Professional.</p>

        {/* ... Sections 2-5 remain the same ... */}
        <h3>2. Description of Platform Services</h3>
        <p>DoneWright Services operates a platform that allows Clients to submit requests for various residential, commercial, and business services. We use this information to connect Clients with independent contractors, consultants, and other service providers within our network ("Professionals") who may be suitable for the requested work.</p>
        
        <h3>3. User Accounts (Planned Feature)</h3>
        <p>At this time, DoneWright Services does not require or provide user accounts. In future versions, users may have the option to create an account to manage projects. Until such features are formally launched, all coordination and communication will continue through direct contact, submitted forms, and email.</p>

        <h3>4. Client Obligations</h3>
        <p>Clients agree to provide accurate information about their service needs. The hiring decision rests with the Client. Clients agree to negotiate terms directly with the chosen Professional, pay them for services rendered, and pay DoneWright Services the applicable Service Coordination Fee.</p>

        <h3>5. Professional Obligations</h3>
        <p>Professionals represent that they are independent businesses, not employees of DoneWright Services. Professionals must provide accurate information regarding their skills, qualifications, licensing, and insurance. They are solely responsible for their tools, taxes, and the quality of their services.</p>

        <h3>6. Fees and Payments</h3>
        <p><strong>Service Coordination Fee:</strong> DoneWright Services charges a service coordination fee to support the Platform. This fee is calculated as 5% of the final project cost agreed upon between the Client and the Professional. This fee is payable by BOTH the Client and the Professional to DoneWright Services upon completion and payment of the project.</p>
        {/* UPDATED to clarify no payment processing for the work itself */}
        <p><strong>Payment for Services:</strong> Clients make payments for the actual services rendered directly to the Professional according to the terms they mutually agree upon. DoneWright Services does not process payments for the Professional's services.</p>

        {/* ... Sections 7-13 remain the same ... */}
        <h3>7. Disclaimers and Limitation of Liability</h3>
        <p>THE PLATFORM IS PROVIDED "AS IS". DONEWRIGHT SERVICES IS NOT RESPONSIBLE FOR THE CONDUCT, QUALITY, SUITABILITY, OR SAFETY OF PROFESSIONALS. THE ENTIRE RISK ARISING OUT OF YOUR USE OF THE PLATFORM AND ANY SERVICE PROVIDED REMAINS SOLELY WITH YOU. IN NO EVENT SHALL DONEWRIGHT SERVICES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES ARISING FROM THE SERVICES PROVIDED BY PROFESSIONALS.</p>
        
        <h3>8. Dispute Resolution Between Clients and Professionals</h3>
        <p>Any disputes arising from the services performed must be resolved directly between the Client and the Professional. DoneWright may, at its sole discretion, offer limited assistance in facilitating communication but has no obligation to mediate or resolve disputes.</p>

        <h3>9. Indemnification</h3>
        <p>You agree to defend and indemnify DoneWright Services from any claims or damages arising from your use of the Platform or your violation of these Terms.</p>
        
        <h3>10. Termination</h3>
        <p>DoneWright Services may terminate or suspend your access to the Platform at any time for any reason, including breach of these Terms.</p>

        <h3>11. Governing Law</h3>
        <p>These Terms shall be governed by the laws of the State of Washington, United States.</p>

        <h3>12. Changes to Terms</h3>
        <p>We reserve the right to modify these Terms at any time. By continuing to use the Platform after revisions become effective, you agree to be bound by the revised terms.</p>
        
        <h3>13. Contact Us</h3>
        <p>If you have any questions about these Terms, please <Link to="/contacts">Contact Us</Link>.</p>
      </div>
    </>
  );
}

export default TermsOfServicePage;