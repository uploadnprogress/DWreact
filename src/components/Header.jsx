import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  return (
    <header className="main-header">
      <div className="header-content">
        <div className="logo-area">
          <Link to="/" onClick={() => setIsNavActive(false)}>
            {/* Path updated to match your public/images folder */}
            <img 
              src="/images/dws-logo.png" 
              alt="DoneWright Services Logo" 
              id="site-logo"
              style={{ maxHeight: '50px', cursor: 'pointer', display: 'block' }} 
            />
          </Link>
        </div>

        <button 
          className="mobile-nav-toggle" 
          aria-expanded={isNavActive}
          onClick={() => setIsNavActive(!isNavActive)}
        >
          <span className="hamburger-icon"></span>
        </button>

        <nav className="primary-nav-container">
          <ul id="primary-navigation" className={isNavActive ? 'nav-active' : ''}>
            <li><Link to="/home-services" onClick={() => setIsNavActive(false)}>Home Services</Link></li>
            <li><Link to="/business-services" onClick={() => setIsNavActive(false)}>Business Services</Link></li>
            <li><Link to="/services" onClick={() => setIsNavActive(false)}>Service Network</Link></li>
            <li><Link to="/faq" onClick={() => setIsNavActive(false)}>How It Works</Link></li>
            <li><Link to="/contacts" onClick={() => setIsNavActive(false)}>Contact</Link></li>
            <li>
              <Link to="/start-project" className="btn" onClick={() => setIsNavActive(false)}>
                Start Project
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;