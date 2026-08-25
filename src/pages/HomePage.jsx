import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import JoinNetwork from '../components/JoinNetwork';

function HomePage() {
  const navigate = useNavigate();
  
  // Rotating Specials
// In HomePage.jsx, update your specials array to include the special price:

const specials = [
  { 
    id: 1, 
    emoji: '🩹', 
    title: 'Drywall Hole Package', 
    desc: 'Up to 3 holes (6"x6" each) + texture match', 
    price: '$299', 
    original: '$450', 
    link: '/start-project', 
    state: { 
      type: 'home', 
      service: 'drywall-patch',
      specialPrice: 299,        // ← ADD THIS
      specialTitle: 'Drywall Hole Package'  // ← ADD THIS
    } 
  },
  { 
    id: 2, 
    emoji: '🛋️', 
    title: 'Furniture Assembly Bundle', 
    desc: '3+ complex items (dressers, desks, cabinets)', 
    price: '$79/ea', 
    original: '$99/ea', 
    link: '/start-project', 
    state: { 
      type: 'home', 
      service: 'assembly',
      specialPrice: 79,         // ← ADD THIS
      specialTitle: 'Assembly Bundle'  // ← ADD THIS
    } 
  },
  { 
    id: 3, 
    emoji: '📺', 
    title: 'TV + Soundbar Bundle', 
    desc: 'Mounting + in-wall cable hide + soundbar', 
    price: '$299', 
    original: '$349', 
    link: '/start-project', 
    state: { 
      type: 'home', 
      service: 'tv-mounting',
      specialPrice: 299,        // ← ADD THIS
      specialTitle: 'TV + Soundbar Bundle'  // ← ADD THIS
    } 
  },
  { 
    id: 4, 
    emoji: '📦', 
    title: '1BR Move-In Special', 
    desc: 'Studio/1BR move-in package', 
    price: '$349', 
    original: '$399', 
    link: '/start-project', 
    state: { 
      type: 'business', 
      service: 'commercial-move',
      specialPrice: 349,        // ← ADD THIS
      specialTitle: '1BR Move-In Special'  // ← ADD THIS
    } 
  },
];  const [currentSpecial, setCurrentSpecial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpecial((prev) => (prev + 1) % specials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [specials.length]);

  const special = specials[currentSpecial];

  // Helper for keyboard navigation on clickable elements
  const handleKeyDown = (callback) => (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      callback();
    }
  };

  return (
    <>
      <Helmet>
        <title>DoneWright Services | Seattle's Direct-Book Handyman</title>
        <meta name="description" content="Seattle's premier handyman for TV mounting, furniture assembly, and drywall repair. Direct booking with no hidden fees. Residential & commercial." />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      {/* HERO SECTION */}
      <section className="hero" style={{ 
        padding: '80px 20px',
        textAlign: 'center',
        color: 'white'
      }} aria-labelledby="hero-title">
        <div className="container">
          <h1 id="hero-title" style={{ fontSize: '3rem', marginBottom: '10px' }}>Seattle's Direct-Book Handyman</h1>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '400', marginBottom: '20px', opacity: '0.9' }}>
            Flat-Rate Pricing • No Hidden Fees • 2-Hour Arrival
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: '0.8' }}>
            TV Mounting • Furniture Assembly • Drywall Repair • Commercial Move-In/Out
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => navigate('/start-project', { state: { type: 'home' } })} 
              className="btn" 
              style={{ padding: '15px 40px', fontSize: '1.1rem' }}
              aria-label="Book residential services"
            >
              Book Residential
            </button>
            <button 
              onClick={() => navigate('/start-project', { state: { type: 'business' } })} 
              className="btn" 
              style={{ padding: '15px 40px', fontSize: '1.1rem', background: 'transparent', border: '2px solid white' }}
              aria-label="Book commercial services"
            >
              Book Commercial
            </button>
          </div>
        </div>
      </section>

      {/* ROTATING SPECIALS */}
      <section style={{ padding: '30px 20px', background: '#fff8e1' }} aria-labelledby="specials-title">
        <div className="container" style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 id="specials-title" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
            Special Offers
          </h2>
          <div 
            onClick={() => navigate(special.link, { state: special.state })}
            onKeyDown={handleKeyDown(() => navigate(special.link, { state: special.state }))}
            role="button"
            tabIndex={0}
            aria-label={`Special offer: ${special.title} - ${special.desc} - ${special.price} (was ${special.original})`}
            aria-live="polite"
            aria-atomic="true"
            style={{
              cursor: 'pointer',
              background: 'white',
              padding: '20px 30px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              border: '2px solid #ffb300',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              animation: 'fadeIn 0.5s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '2.5rem' }} aria-hidden="true">{special.emoji}</span>
              <div>
                <h3 style={{ margin: 0, color: '#e65100' }}>🔥 Special Offer</h3>
                <p style={{ margin: '5px 0 0', fontSize: '1.1rem', fontWeight: 'bold', color: '#333' }}>
                  {special.title}
                </p>
                <p style={{ margin: '2px 0', fontSize: '0.9rem', color: '#555' }}>{special.desc}</p>
              </div>
              <div>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2e7d32' }}>{special.price}</span>
                <span style={{ fontSize: '0.9rem', color: '#999', textDecoration: 'line-through', marginLeft: '8px' }}>{special.original}</span>
                <div style={{ fontSize: '0.8rem', color: '#0047ab', marginTop: '4px' }}>Click to Book →</div>
              </div>
            </div>
          </div>
          {/* Dots Indicator */}
          <div 
            style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '12px' }}
            role="tablist"
            aria-label="Special offers navigation"
          >
            {specials.map((_, index) => (
              <span
                key={index}
                role="tab"
                tabIndex={index === currentSpecial ? 0 : -1}
                aria-selected={index === currentSpecial}
                aria-label={`Special offer ${index + 1} of ${specials.length}`}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: index === currentSpecial ? '#ffb300' : '#ddd',
                  transition: 'background 0.3s ease',
                  cursor: 'pointer'
                }}
                onClick={() => setCurrentSpecial(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setCurrentSpecial(index);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SNAPSHOT */}
      <section className="content-section" style={{ padding: '40px 20px' }} aria-labelledby="pricing-title">
        <div className="container">
          <h2 id="pricing-title" className="section-title" style={{ textAlign: 'center' }}>Flat-Rate Pricing. No Surprises.</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '20px',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {/* TV MOUNTING */}
            <div 
              onClick={() => navigate('/start-project', { state: { type: 'home', service: 'tv-mounting' } })} 
              onKeyDown={handleKeyDown(() => navigate('/start-project', { state: { type: 'home', service: 'tv-mounting' } }))}
              role="button"
              tabIndex={0}
              aria-label="TV Mounting: starting at $149, up to 65 inches. Click to book."
              style={{ 
                background: '#f8f9fa', 
                padding: '20px', 
                borderRadius: '8px', 
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
              }}
            >
              <h3 style={{ fontSize: '1.8rem', marginBottom: '5px' }} aria-hidden="true">📺</h3>
              <h4 style={{ margin: 0 }}>TV Mounting</h4>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f3460' }}>$149</p>
              <small>Up to 65"</small>
              <div style={{ marginTop: '10px', fontSize: '0.8rem', color: '#0047ab', fontWeight: 'bold' }}>Click to Book →</div>
            </div>

            {/* FURNITURE ASSEMBLY */}
            <div 
              onClick={() => navigate('/start-project', { state: { type: 'home', service: 'assembly' } })} 
              onKeyDown={handleKeyDown(() => navigate('/start-project', { state: { type: 'home', service: 'assembly' } }))}
              role="button"
              tabIndex={0}
              aria-label="Furniture Assembly: starting at $89 per hour, 1 hour minimum. Click to book."
              style={{ 
                background: '#f8f9fa', 
                padding: '20px', 
                borderRadius: '8px', 
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
              }}
            >
              <h3 style={{ fontSize: '1.8rem', marginBottom: '5px' }} aria-hidden="true">🛋️</h3>
              <h4 style={{ margin: 0 }}>Furniture Assembly</h4>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f3460' }}>$89<small style={{ fontSize: '0.8rem' }}>/hr</small></p>
              <small>1-hour minimum</small>
              <div style={{ marginTop: '10px', fontSize: '0.8rem', color: '#0047ab', fontWeight: 'bold' }}>Click to Book →</div>
            </div>

            {/* DRYWALL REPAIR */}
            <div 
              onClick={() => navigate('/start-project', { state: { type: 'home', service: 'drywall-patch' } })} 
              onKeyDown={handleKeyDown(() => navigate('/start-project', { state: { type: 'home', service: 'drywall-patch' } }))}
              role="button"
              tabIndex={0}
              aria-label="Drywall Repair: starting at $199 for up to 6 by 6 inch patch. Click to book."
              style={{ 
                background: '#f8f9fa', 
                padding: '20px', 
                borderRadius: '8px', 
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
              }}
            >
              <h3 style={{ fontSize: '1.8rem', marginBottom: '5px' }} aria-hidden="true">🩹</h3>
              <h4 style={{ margin: 0 }}>Drywall Repair</h4>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f3460' }}>$199</p>
              <small>Up to 6" x 6" patch</small>
              <div style={{ marginTop: '10px', fontSize: '0.8rem', color: '#0047ab', fontWeight: 'bold' }}>Click to Book →</div>
            </div>

            {/* COMMERCIAL MOVE-IN/OUT */}
            <div 
              onClick={() => navigate('/start-project', { state: { type: 'business', service: 'commercial-move' } })} 
              onKeyDown={handleKeyDown(() => navigate('/start-project', { state: { type: 'business', service: 'commercial-move' } }))}
              role="button"
              tabIndex={0}
              aria-label="Commercial Move In and Out: starting at $399 for studio or 1 bedroom package. Click to book."
              style={{ 
                background: '#f8f9fa', 
                padding: '20px', 
                borderRadius: '8px', 
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
              }}
            >
              <h3 style={{ fontSize: '1.8rem', marginBottom: '5px' }} aria-hidden="true">📦</h3>
              <h4 style={{ margin: 0 }}>Commercial Move-In/Out</h4>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f3460' }}>$399<small style={{ fontSize: '0.8rem' }}>+</small></p>
              <small>Studio / 1BR package</small>
              <div style={{ marginTop: '10px', fontSize: '0.8rem', color: '#0047ab', fontWeight: 'bold' }}>Click to Book →</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="content-section" style={{ padding: '40px 20px', background: '#f0f4f8' }} aria-labelledby="categories-title">
        <div className="container">
          <h2 id="categories-title" className="section-title" style={{ textAlign: 'center' }}>Professional Services for Every Need</h2>
          <p className="intro" style={{ textAlign: 'center' }}>Select a service category to begin.</p>
          
          <div className="service-cards">
            {/* RESIDENTIAL CARD */}
            <div 
              className="card" 
              onClick={() => navigate('/start-project', { state: { type: 'home' } })} 
              onKeyDown={handleKeyDown(() => navigate('/start-project', { state: { type: 'home' } }))}
              role="button"
              tabIndex={0}
              aria-label="Residential services: TV mounting, furniture assembly, drywall repair. Starting at $89. Click to book."
              style={{
                cursor: 'pointer',
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/images/home-services.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '300px',
                height: '300px',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div className="card-content" style={{ position: 'relative', zIndex: 2, padding: '20px' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', fontWeight: 'bold' }}>Residential</h3>
                <p style={{ fontSize: '1rem', opacity: '0.9' }}>TV Mounting • Assembly • Drywall</p>
                <p style={{ fontSize: '0.9rem', opacity: '0.8', marginTop: '10px' }}>Starting at $89</p>
                <span className="btn" style={{ 
                  display: 'inline-block', 
                  marginTop: '15px', 
                  padding: '8px 20px',
                  background: 'white',
                  color: '#0047ab',
                  borderRadius: '5px',
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}>Book Now →</span>
              </div>
            </div>

            {/* COMMERCIAL CARD */}
            <div 
              className="card" 
              onClick={() => navigate('/start-project', { state: { type: 'business' } })} 
              onKeyDown={handleKeyDown(() => navigate('/start-project', { state: { type: 'business' } }))}
              role="button"
              tabIndex={0}
              aria-label="Commercial services: move in and out, office setup, consulting. Packages starting at $399. Click to book."
              style={{
                cursor: 'pointer',
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '300px',
                height: '300px',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div className="card-content" style={{ position: 'relative', zIndex: 2, padding: '20px' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', fontWeight: 'bold' }}>Commercial</h3>
                <p style={{ fontSize: '1rem', opacity: '0.9' }}>Move-In/Out • Office Setup • Consulting</p>
                <p style={{ fontSize: '0.9rem', opacity: '0.8', marginTop: '10px' }}>Packages from $399</p>
                <span className="btn" style={{ 
                  display: 'inline-block', 
                  marginTop: '15px', 
                  padding: '8px 20px',
                  background: 'white',
                  color: '#0047ab',
                  borderRadius: '5px',
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}>Book Now →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTING QUOTE */}
      <section style={{ padding: '50px 20px', background: 'linear-gradient(135deg, #e3f2fd, #bbdefb)' }} aria-labelledby="consulting-title">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 id="consulting-title" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
            Consulting for Service Pros
          </h2>
          <p style={{ fontSize: '1.5rem', fontWeight: '300', marginBottom: '10px' }}>
            "Stop paying platform fees. I build custom booking portals for contractors, cleaners, and vendors."
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
            <strong>$497 setup</strong> + <strong>$147/month</strong>
            <span style={{ display: 'block', fontSize: '0.9rem', color: '#555' }}>
              No transaction fees. You keep 100% of your revenue.
            </span>
          </p>
          <Link 
            to="/join-us" 
            className="btn" 
            style={{ padding: '14px 40px', fontSize: '1.1rem' }}
            aria-label="Apply to become a partner and get your custom booking portal"
          >
            Apply to Partner →
          </Link>
        </div>
      </section>

      <JoinNetwork />
    </>
  );
}

export default HomePage;