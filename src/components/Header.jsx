import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isNavActive, setIsNavActive] = useState(false);
  const location = useLocation(); // Gets the current URL location

  // This effect runs every time the URL changes
  useEffect(() => {
    // Close the mobile menu on navigation
    if (isNavActive) {
      setIsNavActive(false);
      document.body.classList.remove('no-scroll');
    }
  }, [location]); // The effect depends on the location changing

  const toggleNav = () => {
    const newNavState = !isNavActive;
    setIsNavActive(newNavState);
    document.body.classList.toggle('no-scroll', newNavState);
  };

  return (
    <header className="main-header">
      <div className="header-content">
        <div className="logo-area">
          <Link to="/"><img src="/images/dws-logo.png" alt="DoneWright Services Logo" id="site-logo" /></Link>
        </div>

        <button
          className="mobile-nav-toggle"
          aria-label="Toggle Navigation Menu"
          aria-expanded={isNavActive}
          aria-controls="primary-navigation"
          onClick={toggleNav}
        >
          <span className="hamburger-icon"></span>
        </button>

        <nav className="primary-nav-container">
          <ul id="primary-navigation" className={isNavActive ? 'nav-active' : ''}>
            <li><Link to="/services">Services Network</Link></li>
            <li><Link to="/start-project">Start a Project</Link></li> {/* Consolidated Link */}
            <li><Link to="/faq">How It Works (FAQ)</Link></li>
            <li><Link to="/contacts">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;