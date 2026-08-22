// src/templates/TemplateD/index.jsx
import React, { useState } from 'react';
import './styles.css';

const TemplateD = ({ config }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [showForm, setShowForm] = useState(false);

  if (!config) {
    return <div>Loading template configuration...</div>;
  }

  const { businessName, tagline, logo, colors, services, contact, about } = config;

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const times = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];

  const handleBook = () => {
    alert(`Booking confirmed for ${selectedService?.name} on ${selectedDate} at ${selectedTime}`);
    setShowForm(false);
    setSelectedDate('');
    setSelectedTime('');
  };

  return (
    <div className="template-d" style={{ fontFamily: 'var(--font-main)' }}>
      {/* HEADER */}
      <header style={{
        textAlign: 'center',
        padding: '40px 20px',
        background: `linear-gradient(135deg, ${colors?.primary || '#0047ab'}, ${colors?.secondary || '#0059c0'})`,
        color: 'white'
      }}>
        {logo && <img src={logo} alt={businessName} style={{ maxHeight: '80px', marginBottom: '15px' }} />}
        <h1 style={{ fontSize: '2.5rem', margin: '10px 0 5px' }}>{businessName}</h1>
        {tagline && <p style={{ fontSize: '1.2rem', opacity: '0.9' }}>{tagline}</p>}
      </header>

      {/* ABOUT / INTRO */}
      <section style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2>Book a Session</h2>
        <p style={{ color: '#666', maxWidth: '600px', margin: '10px auto 30px' }}>
          {about || `Schedule a session with ${businessName}. Select your service, date, and time.`}
        </p>
      </section>

      {/* SERVICES */}
      <section style={{ padding: '0 20px 40px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {services?.map((service, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '25px',
              borderRadius: '12px',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              border: selectedService?.id === service.id ? `2px solid ${colors?.primary || '#0047ab'}` : '2px solid transparent',
              transition: 'border 0.2s',
              cursor: 'pointer'
            }}
            onClick={() => {
              setSelectedService(service);
              setShowForm(true);
            }}
            >
              <span style={{ fontSize: '2rem' }}>{service.emoji || '📋'}</span>
              <h3 style={{ margin: '10px 0 5px' }}>{service.name}</h3>
              <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: colors?.primary || '#0047ab' }}>
                ${service.price}
              </p>
              <p style={{ fontSize: '0.85rem', color: '#666' }}>
                {service.duration || '~1 hour'}
              </p>
              <button
                style={{
                  marginTop: '15px',
                  padding: '8px 25px',
                  background: colors?.primary || '#0047ab',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}
              >
                Select
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING FORM */}
      {showForm && selectedService && (
        <div style={{
          padding: '20px',
          maxWidth: '600px',
          margin: '0 auto 40px',
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          border: '1px solid #eee'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ margin: 0 }}>Book {selectedService.name}</h2>
            <button
              onClick={() => setShowForm(false)}
              style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#999' }}
            >
              ✕
            </button>
          </div>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            {selectedService.name} – ${selectedService.price} | {selectedService.duration || '~1 hour'}
          </p>

          {/* DATE SELECTION */}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Select Date</label>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {days.map(day => (
                <button
                  key={day}
                  onClick={() => setSelectedDate(day)}
                  style={{
                    padding: '10px 15px',
                    background: selectedDate === day ? (colors?.primary || '#0047ab') : '#f0f0f0',
                    color: selectedDate === day ? 'white' : '#333',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: selectedDate === day ? 'bold' : 'normal'
                  }}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* TIME SELECTION */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Select Time</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
              {times.map(time => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  style={{
                    padding: '8px 10px',
                    background: selectedTime === time ? (colors?.primary || '#0047ab') : '#f0f0f0',
                    color: selectedTime === time ? 'white' : '#333',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.85rem'
                  }}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleBook}
            disabled={!selectedDate || !selectedTime}
            style={{
              width: '100%',
              padding: '14px',
              background: (selectedDate && selectedTime) ? (colors?.primary || '#0047ab') : '#ccc',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: (selectedDate && selectedTime) ? 'pointer' : 'not-allowed'
            }}
          >
            {selectedDate && selectedTime ? 'Confirm Booking →' : 'Select Date & Time'}
          </button>
          <p style={{ fontSize: '0.8rem', color: '#888', textAlign: 'center', marginTop: '10px' }}>
            You'll be redirected to secure payment.
          </p>
        </div>
      )}

      {/* CONTACT */}
      <footer style={{
        textAlign: 'center',
        padding: '30px 20px',
        background: '#1a1a2e',
        color: 'white'
      }}>
        <p style={{ fontSize: '0.9rem', opacity: '0.8' }}>
          {businessName} • {contact?.phone && <a href={`tel:${contact.phone}`} style={{ color: 'white' }}>{contact.phone}</a>}
          {contact?.email && ` • `}
          {contact?.email && <a href={`mailto:${contact.email}`} style={{ color: 'white' }}>{contact.email}</a>}
        </p>
        <p style={{ fontSize: '0.7rem', opacity: '0.3', marginTop: '10px' }}>
          Powered by DoneWright Services
        </p>
      </footer>
    </div>
  );
};

export default TemplateD;