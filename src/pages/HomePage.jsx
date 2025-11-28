import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Services from '../components/Services';
import JoinNetwork from '../components/JoinNetwork';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>DoneWright Services | Vetted Contractor Network for Home & Business</title>
        <meta name="description" content="DoneWright Services connects homeowners and businesses with vetted, reliable contractors for any project, anywhere. Get stress-free coordination. Request a quote!" />
      </Helmet>
      <Hero />
      <HowItWorks />
      <Services />
      <JoinNetwork />
    </>
  );
}

export default HomePage;