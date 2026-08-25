import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function HomeServicesPage() {
  return (
    <>
      <Helmet>
        <title>Residential Services | DoneWright Services Seattle</title>
        <meta name="description" content="Seattle's direct-book handyman for TV mounting, furniture assembly, and drywall repair. Flat-rate pricing, no hidden fees. Book online." />
      </Helmet>
      
      <div className="content-page-section" style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
        <h1 className="section-title" style={{ textAlign: 'center' }}>Residential Services</h1>
        <p style={{ textAlign: 'center', marginBottom: '30px' }}>Flat-rate pricing. No surprises. Serving Seattle and surrounding areas.</p>

        {/* TV MOUNTING */}
        <section aria-labelledby="tv-mounting-title" style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px', marginBottom: '20px' }}>
          <h2 id="tv-mounting-title" style={{ color: '#0f3460' }}>📺 TV Mounting</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }} aria-label="TV Mounting pricing">
            <thead>
              <tr style={{ display: 'none' }}>
                <th>Service</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ padding: '8px 0' }}>Standard TV Mounting (up to 65")</td><td style={{ fontWeight: 'bold' }}>$149</td></tr>
              <tr><td style={{ padding: '8px 0' }}>+ In-Wall Cable Hiding</td><td style={{ fontWeight: 'bold' }}>+$100</td></tr>
              <tr><td style={{ padding: '8px 0' }}>+ Soundbar Mounting</td><td style={{ fontWeight: 'bold' }}>+$50</td></tr>
              <tr><td style={{ padding: '8px 0', fontWeight: 'bold' }}>📦 Bundle (TV + In-Wall + Soundbar)</td><td style={{ fontWeight: 'bold', color: '#0f3460' }}>$299</td></tr>
            </tbody>
          </table>
          <div style={{ marginTop: '10px', fontSize: '0.9rem', color: '#666' }}>
            <span>⚠️ Over 6ft Ladder: +$50 | Non-Standard Wall (Brick/Concrete): +$100</span>
          </div>
        </section>

        {/* FURNITURE ASSEMBLY */}
        <section aria-labelledby="furniture-title" style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px', marginBottom: '20px' }}>
          <h2 id="furniture-title" style={{ color: '#0f3460' }}>🛋️ Furniture Assembly</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }} aria-label="Furniture Assembly pricing">
            <thead>
              <tr style={{ display: 'none' }}>
                <th>Service</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ padding: '8px 0' }}>Standard Assembly (Tables, Chairs, Shelves)</td><td style={{ fontWeight: 'bold' }}>$89/hr (1hr min)</td></tr>
              <tr><td style={{ padding: '8px 0' }}>Complex Assembly (Drawers, Doors, Hinges)</td><td style={{ fontWeight: 'bold' }}>$110/hr (10hr cap / $1,100 max)</td></tr>
              <tr><td style={{ padding: '8px 0' }}>Heavy Structure (Playsets, Gazebos, Outdoor Bars)</td><td style={{ fontWeight: 'bold' }}>$130/hr (20hr cap / $2,600 max)</td></tr>
            </tbody>
          </table>
          <div style={{ marginTop: '10px', fontSize: '0.9rem', color: '#666' }}>
            <span>👷 With Helper: +$50/hr | 🛠️ Complex covers up to 8 moving parts. +$50 per extra 4 parts.</span>
          </div>
        </section>

        {/* DRYWALL */}
        <section aria-labelledby="drywall-title" style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px', marginBottom: '20px' }}>
          <h2 id="drywall-title" style={{ color: '#0f3460' }}>🩹 Drywall Repair</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }} aria-label="Drywall Repair pricing">
            <thead>
              <tr style={{ display: 'none' }}>
                <th>Service</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ padding: '8px 0' }}>Standard Patch (up to 6" x 6")</td><td style={{ fontWeight: 'bold' }}>$199</td></tr>
              <tr><td style={{ padding: '8px 0' }}>Large Patch (up to 12" x 12")</td><td style={{ fontWeight: 'bold' }}>$299</td></tr>
              <tr><td style={{ padding: '8px 0' }}>Structural Backing / Stud Add-on</td><td style={{ fontWeight: 'bold' }}>+$100</td></tr>
            </tbody>
          </table>
          <div style={{ marginTop: '10px', fontSize: '0.9rem', color: '#666' }}>
            <span>Includes: Patch, mud, sand, texture, and paint touch-up.</span>
          </div>
        </section>

        {/* HAZARD ADD-ONS */}
        <section aria-labelledby="hazards-title" style={{ background: '#fff3e0', padding: '25px', borderRadius: '10px', border: '1px solid #ffcc80', marginBottom: '20px' }}>
          <h2 id="hazards-title" style={{ color: '#e65100' }}>⚠️ Difficulty / Hazard Add-Ons</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }} aria-label="Hazard add-on pricing">
            <thead>
              <tr style={{ display: 'none' }}>
                <th>Condition</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ padding: '8px 0' }}>Over 6ft Ladder Work</td><td style={{ fontWeight: 'bold' }}>+$50</td></tr>
              <tr><td style={{ padding: '8px 0' }}>Heavy Lifting (&gt;50lbs)</td><td style={{ fontWeight: 'bold' }}>+$50</td></tr>
              <tr><td style={{ padding: '8px 0' }}>Biohazard / Waste Area</td><td style={{ fontWeight: 'bold' }}>+$100</td></tr>
              <tr><td style={{ padding: '8px 0' }}>Non-Standard Wall (Brick/Concrete)</td><td style={{ fontWeight: 'bold' }}>+$100</td></tr>
            </tbody>
          </table>
        </section>

        <div className="form-button-wrapper" style={{ textAlign: 'center', marginTop: '30px' }}>
          <Link to="/start-project" state={{ type: 'home' }} className="btn" aria-label="Book residential service">
            Book Residential Service
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomeServicesPage;