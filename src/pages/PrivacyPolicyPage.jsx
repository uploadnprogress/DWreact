import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | DoneWright Services</title>
      </Helmet>
      <div className="content-page-section">
        <h1 className="section-title">Privacy Policy</h1>
        <p><strong>Last Updated: October 11, 2025</strong></p>

        <h3>1. Information We Collect</h3>
        <p>We collect personal information from users, including:</p>
        <ul>
          <li>Contact details (name, email, phone number)</li>
          {/* REMOVED: Item about collecting payment information */}
          <li>Account details (username, password, profile data)</li>
          <li>Project details (services requested, contractor interactions, job status)</li>
          <li>Usage data (IP address, browser type, interactions on our platform)</li>
        </ul>

        <h3>2. How We Use Your Information</h3>
        <p>We use your data for the following purposes:</p>
        <ul>
          <li>To create and manage accounts</li>
          {/* REMOVED: Item about processing payments */}
          <li>To match clients with contractors and service providers</li>
          <li>To send service updates, confirmations, and support responses</li>
          <li>To enhance our platform, detect fraud, and improve user experience</li>
          <li>To comply with legal and regulatory requirements</li>
        </ul>
        
        <h3>3. How We Share Your Information</h3>
        <p>We do not sell your personal data. However, we may share your information with:</p>
        <ul>
          <li>Contractors and service providers for project execution</li>
          {/* REMOVED: Item about payment partners */}
          <li>Regulatory authorities if legally required</li>
          <li>Security providers for fraud detection and risk mitigation</li>
        </ul>

        <h3>4. Data Protection and Security</h3>
        <p>We implement strict security measures to protect your personal data, including encryption, secure storage, and limited access protocols. However, no system is 100% secure, and we encourage users to take steps in protecting their accounts.</p>
        
        <h3>5. Your Privacy Rights</h3>
        <p>You have the right to:</p>
        <ul>
          <li>Request access to your personal data</li>
          <li>Correct inaccurate or outdated information</li>
          <li>Request deletion of your account and associated data</li>
          <li>Opt out of marketing communications</li>
        </ul>

        <h3>6. Cookies and Tracking</h3>
        <p>We use cookies to enhance user experience, track analytics, and remember preferences. Users can manage cookie settings through their browser preferences.</p>
        
        <h3>7. Updates to This Policy</h3>
        <p>We may update this Privacy Policy periodically. Users will be notified of major changes through email or platform notifications.</p>

        <h3>8. Contact Us</h3>
        <p>If you have any questions or concerns about our Privacy Policy, please <Link to="/contacts">contact us</Link>.</p>
      </div>
    </>
  );
}

export default PrivacyPolicyPage;