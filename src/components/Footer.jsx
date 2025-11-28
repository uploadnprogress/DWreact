import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/services">Services Network</Link></li>
            <li><Link to="/faq">How It Works (FAQ)</Link></li>
            {/* CORRECTED: Ensure this is a Link component */}
            <li><Link to="/ju">Become a Provider</Link></li>
            <li><Link to="/contacts">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Start a Project</h3>
          <ul>
            <li><Link to="/start-project">Home Project</Link></li>
            <li><Link to="/start-project">Business Project</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-disclaimer">
        <p>DoneWright Services is a service coordinator and does not directly perform contracting work. We connect you with vetted, independent professionals from our trusted network.</p>
      </div>
      <p className="copyright">&copy; {currentYear} DoneWright Services. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;