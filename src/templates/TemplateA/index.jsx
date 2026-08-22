// src/templates/TemplateA/index.jsx
import React, { useState } from 'react';
import './styles.css';

const TemplateA = ({ config }) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  if (!config) {
    return <div>Loading template configuration...</div>;
  }

  const { businessName, tagline, logo, colors, services, contact, bookingForm } = config;

  const handleBookNow = (service) => {
    setSelectedService(service);
    setShowForm(true);
  };

  return (
    <div className="template-a" style={{ 
      fontFamily: 'var(--font-main)',
      maxWidth: '100%',
      margin: '0 auto',
      minHeight: '100vh',
      background: '#fafafa'
    }}>
      {/* HEADER */}
      <header className="ta-header" style={{ 
        textAlign: 'center', 
        padding: '40px 20px 20px',
        background: colors?.primary || '#0047ab',
        color: 'white'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {logo && (
            <img 
              src={logo} 
              alt={businessName} 
              style={{ maxHeight: '80px', marginBottom: '15px' }} 
            />
          )}
          <h1 style={{ 
            margin: '10px 0 0', 
            fontSize: '2.2rem',
            fontWeight: '700',
            color: 'white'
          }}>
            {businessName}
          </h1>
          {tagline && (
            <p style={{ 
              fontSize: '1.1rem', 
              opacity: '0.9',
              marginTop: '5px',
              color: 'white'
            }}>
              {tagline}
            </p>
          )}
        </div>
      </header>

      {/* HERO / CTA */}
      <section className="ta-hero" style={{
        textAlign: 'center',
        padding: '40px 20px',
        background: 'white',
        borderBottom: '1px solid #eee'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#333' }}>
            Book Your Service in 60 Seconds
          </h2>
          <p style={{ color: '#666' }}>
            Select a service below, choose your date, and we'll take care of the rest.
          </p>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="ta-services" style={{
        padding: '40px 20px',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px'
        }}>
          {services?.map((service, index) => (
            <div 
              key={index}
              onClick={() => handleBookNow(service)}
              className="ta-service-card"
              style={{
                background: 'white',
                padding: '30px 20px',
                borderRadius: '12px',
                textAlign: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                border: `2px solid ${selectedService?.id === service.id ? (colors?.primary || '#0047ab') : 'transparent'}`,
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
              }}
            >
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '10px' }}>
                {service.emoji || '📋'}
              </span>
              <h3 style={{ fontSize: '1.2rem', margin: '5px 0' }}>{service.name}</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: colors?.primary || '#0047ab' }}>
                ${service.price}
              </p>
              {service.description && (
                <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '5px' }}>
                  {service.description}
                </p>
              )}
              <button 
                className="ta-book-btn"
                style={{
                  marginTop: '15px',
                  padding: '10px 30px',
                  background: colors?.primary || '#0047ab',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                Book Now →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING FORM (Conditional) */}
      {showForm && selectedService && (
        <section className="ta-booking-form" style={{
          padding: '40px 20px',
          maxWidth: '700px',
          margin: '0 auto',
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          marginBottom: '40px',
          border: '1px solid #eee'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ margin: 0 }}>Book {selectedService.name}</h2>
            <button 
              onClick={() => setShowForm(false)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#999'
              }}
            >
              ✕
            </button>
          </div>

          {/* EMBED YOUR EXISTING BOOKING FORM HERE */}
          {/* This is where we inject the booking form component */}
          <div style={{ padding: '10px 0' }}>
            <p style={{ color: '#666', marginBottom: '20px' }}>
              You've selected: <strong>{selectedService.name}</strong> – ${selectedService.price}
            </p>
            
            {/* We'll dynamically use whichever form is needed (Home/Business) */}
            {bookingForm && bookingForm}
            
            {/* Simple fallback form if no bookingForm passed */}
            {!bookingForm && (
              <div style={{ textAlign: 'center', padding: '20px', background: '#f5f5f5', borderRadius: '8px' }}>
                <p>Booking form will appear here.</p>
                <p style={{ fontSize: '0.85rem', color: '#888' }}>Configure bookingForm in your template config.</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CONTACT / FOOTER */}
      <footer className="ta-footer" style={{
        textAlign: 'center',
        padding: '30px 20px',
        background: '#1a1a2e',
        color: 'white',
        marginTop: '40px'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.9rem', opacity: '0.8' }}>
            {businessName} • {contact?.phone && <a href={`tel:${contact.phone}`} style={{ color: 'white' }}>{contact.phone}</a>}
            {contact?.email && ` • `}
            {contact?.email && <a href={`mailto:${contact.email}`} style={{ color: 'white' }}>{contact.email}</a>}
          </p>
          <p style={{ fontSize: '0.8rem', opacity: '0.5', marginTop: '10px' }}>
            © {new Date().getFullYear()} {businessName}. All rights reserved.
          </p>
          <p style={{ fontSize: '0.7rem', opacity: '0.3', marginTop: '5px' }}>
            Powered by DoneWright Services
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TemplateA;