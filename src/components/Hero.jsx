import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Need Work Done? We Coordinate. They Deliver.</h1>
          <p>Seattle's most trusted network of vetted independent contractors for home and business.</p>
          <div className="hero-btns">
            {/* Point to the landing pages for better UX validation */}
            <Link to="/home-services" className="btn btn-primary">Home Services</Link>
            <Link to="/business-services" className="btn btn-secondary">Business Services</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;