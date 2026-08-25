// src/templates/TemplateB/index.jsx
import React, { useState } from 'react';
import './styles.css';

const TemplateB = ({ config }) => {
  const [currentPage, setCurrentPage] = useState('home');
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  if (!config) {
    return <div>Loading template configuration...</div>;
  }

  const { businessName, tagline, logo, colors, services, contact, about, bookingForm } = config;

  const Nav = () => (
    <nav className="tb-nav" style={{
      background: 'white',
      padding: '15px 20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {logo && <img src={logo} alt={businessName} style={{ maxHeight: '40px' }} />}
          <span style={{ fontWeight: 'bold', fontSize: '1.1rem', color: colors?.primary || '#0047ab' }}>
            {businessName}
          </span>
        </div>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {['Home', 'Services', 'About', 'Contact'].map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page.toLowerCase())}
              style={{
                background: 'none',
                border: 'none',
                color: currentPage === page.toLowerCase() ? (colors?.primary || '#0047ab') : '#555',
                fontWeight: currentPage === page.toLowerCase() ? '600' : '400',
                cursor: 'pointer',
                fontSize: '0.95rem',
                padding: '5px 0',
                borderBottom: currentPage === page.toLowerCase() ? `2px solid ${colors?.primary || '#0047ab'}` : '2px solid transparent'
              }}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );

  const Footer = () => (
    <footer style={{
      textAlign: 'center',
      padding: '40px 20px',
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
        <p style={{ fontSize: '0.7rem', opacity: '0.3' }}>
          Powered by DoneWright Services
        </p>
      </div>
    </footer>
  );

  const HomePage = () => (
    <>
      {/* Hero */}
      <section style={{
        textAlign: 'center',
        padding: '60px 20px',
        background: `linear-gradient(135deg, ${colors?.primary || '#0047ab'}, ${colors?.secondary || '#0059c0'})`,
        color: 'white'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.8rem', marginBottom: '15px' }}>
            {tagline || `Welcome to ${businessName}`}
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: '0.9', marginBottom: '30px' }}>
            Professional service you can trust. Book online in seconds.
          </p>
          <button
            onClick={() => setShowForm(true)}
            style={{
              padding: '15px 50px',
              fontSize: '1.1rem',
              background: 'white',
              color: colors?.primary || '#0047ab',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Book Now →
          </button>
        </div>
      </section>

      {/* Services Snapshot */}
      <section style={{ padding: '40px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Our Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {services?.map((service, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '25px',
              borderRadius: '8px',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}>
              <span style={{ fontSize: '2rem' }}>{service.emoji || '📋'}</span>
              <h3 style={{ margin: '10px 0 5px' }}>{service.name}</h3>
              <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: colors?.primary || '#0047ab' }}>
                ${service.price}
              </p>
              <button
                onClick={() => {
                  setSelectedService(service);
                  setShowForm(true);
                }}
                style={{
                  marginTop: '10px',
                  padding: '8px 25px',
                  background: colors?.primary || '#0047ab',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Book
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* About Snippet */}
      {about && (
        <section style={{ padding: '40px 20px', background: '#f8f9fa' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2>About {businessName}</h2>
            <p style={{ maxWidth: '600px', margin: '10px auto 0', color: '#555' }}>
              {about}
            </p>
          </div>
        </section>
      )}
    </>
  );

  const ServicesPage = () => (
    <section style={{ padding: '40px 20px', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Our Services</h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '40px' }}>
        Choose the service that fits your needs.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px' }}>
        {services?.map((service, index) => (
          <div key={index} style={{
            background: 'white',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            textAlign: 'center',
            borderTop: `4px solid ${colors?.primary || '#0047ab'}`
          }}>
            <span style={{ fontSize: '2.5rem' }}>{service.emoji || '📋'}</span>
            <h3 style={{ margin: '10px 0 5px' }}>{service.name}</h3>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: colors?.primary || '#0047ab' }}>
              ${service.price}
            </p>
            {service.description && (
              <p style={{ fontSize: '0.9rem', color: '#666' }}>{service.description}</p>
            )}
            <button
              onClick={() => {
                setSelectedService(service);
                setShowForm(true);
              }}
              style={{
                marginTop: '15px',
                padding: '10px 30px',
                background: colors?.primary || '#0047ab',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}
            >
              Book Now →
            </button>
          </div>
        ))}
      </div>
    </section>
  );

  const AboutPage = () => (
    <section style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>About {businessName}</h1>
      <div style={{ background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
        <p style={{ lineHeight: '1.8', color: '#444' }}>
          {about || `${businessName} is a trusted provider of professional services. We pride ourselves on quality work and customer satisfaction.`}
        </p>
        {contact?.address && (
          <p style={{ marginTop: '20px', color: '#666' }}>
            <strong>Location:</strong> {contact.address}
          </p>
        )}
      </div>
    </section>
  );

  const ContactPage = () => (
    <section style={{ padding: '40px 20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Contact Us</h1>
      <div style={{ background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
        {contact?.phone && (
          <p style={{ fontSize: '1.1rem' }}>
            📞 <a href={`tel:${contact.phone}`} style={{ color: colors?.primary || '#0047ab' }}>{contact.phone}</a>
          </p>
        )}
        {contact?.email && (
          <p style={{ fontSize: '1.1rem' }}>
            ✉️ <a href={`mailto:${contact.email}`} style={{ color: colors?.primary || '#0047ab' }}>{contact.email}</a>
          </p>
        )}
        {contact?.address && (
          <p style={{ fontSize: '1.1rem' }}>
            📍 {contact.address}
          </p>
        )}
        <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid #eee' }} />
        <p style={{ color: '#666', textAlign: 'center' }}>
          We'll respond within 24 hours.
        </p>
      </div>
    </section>
  );

  return (
    <div className="template-b" style={{ fontFamily: 'var(--font-main)' }}>
      <Nav />
      
      {/* MAIN CONTENT */}
      <main>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* BOOKING FORM OVERLAY */}
      {showForm && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 999,
          padding: '20px'
        }}>
          <div style={{
            background: 'white',
            maxWidth: '600px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            padding: '30px',
            borderRadius: '12px',
            position: 'relative'
          }}>
            <button
              onClick={() => setShowForm(false)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '20px',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#999'
              }}
            >
              ✕
            </button>
            <h2 style={{ marginTop: 0 }}>
              {selectedService ? `Book ${selectedService.name}` : 'Book a Service'}
            </h2>
            {selectedService && (
              <p style={{ color: '#666', marginBottom: '20px' }}>
                You've selected: <strong>{selectedService.name}</strong> – ${selectedService.price}
              </p>
            )}
            <div>
              {bookingForm && bookingForm}
              {!bookingForm && (
                <div style={{ textAlign: 'center', padding: '20px', background: '#f5f5f5', borderRadius: '8px' }}>
                  <p>Booking form will appear here.</p>
                  <p style={{ fontSize: '0.85rem', color: '#888' }}>Configure bookingForm in your template config.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default TemplateB;