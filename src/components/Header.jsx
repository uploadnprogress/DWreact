import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          DoneWright<span>Services</span>
        </Link>

        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            {/* Fixed Links: Pointing to React Routes instead of .html files */}
            <li><Link to="/home-services">Home Services</Link></li>
            <li><Link to="/business-services">Business Services</Link></li>
            <li><Link to="/faq">How It Works</Link></li>
            <li><Link to="/contacts">Contact</Link></li>
            <li>
              <Link to="/start-project" className="nav-btn">Start a Project</Link>
            </li>
          </ul>
        </nav>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;