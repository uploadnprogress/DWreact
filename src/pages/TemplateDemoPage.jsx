// src/pages/TemplateDemoPage.jsx
import React, { useState } from 'react';
import { TemplateA, TemplateB, TemplateC, TemplateD } from '../templates';

// Sample config for testing
const sampleConfig = {
  businessName: "Seattle Test Pro",
  tagline: "Your Trusted Local Service",
  logo: null,
  colors: {
    primary: "#0047ab",
    secondary: "#0059c0",
    accent: "#ffb300"
  },
  services: [
    { id: 'clean', name: 'Standard Clean', price: 89, emoji: '🧹', description: 'Basic cleaning service' },
    { id: 'deep', name: 'Deep Clean', price: 149, emoji: '✨', description: 'Thorough deep clean' },
    { id: 'move', name: 'Move-In/Out', price: 399, emoji: '📦', description: 'Complete move cleaning' }
  ],
  contact: {
    phone: "(206) 555-0123",
    email: "test@seattlepro.com",
    address: "123 Main St, Seattle, WA"
  },
  about: "We are a trusted Seattle-based service provider with over 10 years of experience.",
  categories: [
    { id: 'tables', name: 'Tables', icon: '🪑' },
    { id: 'chairs', name: 'Chairs', icon: '🪑' }
  ],
  products: [
    { id: 'table-1', name: 'Round Table', category: 'tables', price: 15, description: '60" round table' },
    { id: 'chair-1', name: 'Folding Chair', category: 'chairs', price: 5, description: 'Standard folding chair' }
  ]
};

function TemplateDemoPage() {
  const [activeTemplate, setActiveTemplate] = useState('A');

  const renderTemplate = () => {
    switch(activeTemplate) {
      case 'A':
        return <TemplateA config={sampleConfig} />;
      case 'B':
        return <TemplateB config={sampleConfig} />;
      case 'C':
        return <TemplateC config={sampleConfig} />;
      case 'D':
        return <TemplateD config={sampleConfig} />;
      default:
        return <TemplateA config={sampleConfig} />;
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      {/* Template Switcher */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: 'white',
        padding: '15px 20px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        <div>
          <strong style={{ fontSize: '1.1rem' }}>🧪 Template Demo</strong>
          <span style={{ marginLeft: '10px', fontSize: '0.85rem', color: '#888' }}>
            Click a template below to preview
          </span>
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {['A', 'B', 'C', 'D'].map((letter) => (
            <button
              key={letter}
              onClick={() => setActiveTemplate(letter)}
              style={{
                padding: '8px 20px',
                background: activeTemplate === letter ? '#0047ab' : '#f0f0f0',
                color: activeTemplate === letter ? 'white' : '#333',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: activeTemplate === letter ? 'bold' : 'normal'
              }}
            >
              Template {letter}
            </button>
          ))}
        </div>
      </div>

      {/* Template Render */}
      <div style={{ border: '2px dashed #ddd', borderRadius: '8px', padding: '4px', minHeight: '400px' }}>
        {renderTemplate()}
      </div>

      {/* Quick Info */}
      <div style={{
        marginTop: '20px',
        padding: '15px 20px',
        background: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #eee'
      }}>
        <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>
          <strong>💡 Templates:</strong>
          <br />
          <strong>A</strong> – Booking Portal (Cleaners, Movers, Handymen) · 
          <strong>B</strong> – Full Service Site (Contractors, Home Pros) · 
          <strong>C</strong> – Product Catalog (Event Rentals, Vendors) · 
          <strong>D</strong> – Appointment Booking (Consultants, Coaches)
        </p>
      </div>
    </div>
  );
}

export default TemplateDemoPage;