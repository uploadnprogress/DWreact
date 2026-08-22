// src/templates/TemplateC/index.jsx
import React, { useState } from 'react';
import './styles.css';

const TemplateC = ({ config }) => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  if (!config) {
    return <div>Loading template configuration...</div>;
  }

  const { businessName, tagline, logo, colors, categories, products, contact } = config;

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev => prev.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="template-c" style={{ fontFamily: 'var(--font-main)' }}>
      {/* HEADER */}
      <header style={{
        background: colors?.primary || '#0047ab',
        color: 'white',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {logo && <img src={logo} alt={businessName} style={{ maxHeight: '50px' }} />}
          <div>
            <h1 style={{ fontSize: '1.5rem', margin: 0 }}>{businessName}</h1>
            {tagline && <p style={{ fontSize: '0.9rem', opacity: '0.8', margin: 0 }}>{tagline}</p>}
          </div>
        </div>
        <button
          onClick={() => setShowCart(true)}
          style={{
            background: 'white',
            color: colors?.primary || '#0047ab',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '8px',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          🛒 Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
        </button>
      </header>

      {/* CATEGORIES */}
      <section style={{ padding: '20px', background: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            onClick={() => setSelectedCategory('all')}
            style={{
              padding: '8px 20px',
              background: selectedCategory === 'all' ? (colors?.primary || '#0047ab') : 'white',
              color: selectedCategory === 'all' ? 'white' : '#333',
              border: `1px solid ${selectedCategory === 'all' ? (colors?.primary || '#0047ab') : '#ddd'}`,
              borderRadius: '20px',
              cursor: 'pointer'
            }}
          >
            All
          </button>
          {categories?.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: '8px 20px',
                background: selectedCategory === cat.id ? (colors?.primary || '#0047ab') : 'white',
                color: selectedCategory === cat.id ? 'white' : '#333',
                border: `1px solid ${selectedCategory === cat.id ? (colors?.primary || '#0047ab') : '#ddd'}`,
                borderRadius: '20px',
                cursor: 'pointer'
              }}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px' }}>
          {filteredProducts?.map(product => (
            <div key={product.id} style={{
              background: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {product.image && (
                <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              )}
              <div style={{ padding: '20px' }}>
                <h3 style={{ margin: '0 0 5px' }}>{product.name}</h3>
                {product.category && (
                  <span style={{ fontSize: '0.8rem', color: '#888' }}>{product.category}</span>
                )}
                <p style={{ fontSize: '0.9rem', color: '#666', margin: '10px 0' }}>{product.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.3rem', fontWeight: 'bold', color: colors?.primary || '#0047ab' }}>
                    ${product.price}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    style={{
                      padding: '8px 20px',
                      background: colors?.primary || '#0047ab',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer'
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredProducts?.length === 0 && (
          <p style={{ textAlign: 'center', color: '#888', padding: '40px 0' }}>
            No products found in this category.
          </p>
        )}
      </section>

      {/* CART SIDEBAR */}
      {showCart && (
        <div style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '400px',
          maxWidth: '90vw',
          height: '100%',
          background: 'white',
          boxShadow: '-4px 0 20px rgba(0,0,0,0.1)',
          zIndex: 1000,
          padding: '20px',
          overflow: 'auto',
          animation: 'slideIn 0.3s ease'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ margin: 0 }}>Your Cart</h2>
            <button
              onClick={() => setShowCart(false)}
              style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}
            >
              ✕
            </button>
          </div>

          {cart.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#888', padding: '40px 0' }}>
              Your cart is empty.
            </p>
          ) : (
            <>
              {cart.map(item => (
                <div key={item.id} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px 0',
                  borderBottom: '1px solid #eee'
                }}>
                  <div>
                    <p style={{ margin: 0, fontWeight: 'bold' }}>{item.name}</p>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>
                      ${item.price} x {item.quantity}
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={{ background: '#f0f0f0', border: 'none', borderRadius: '4px', padding: '4px 10px', cursor: 'pointer' }}
                    >
                      −
                    </button>
                    <span style={{ minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={{ background: '#f0f0f0', border: 'none', borderRadius: '4px', padding: '4px 10px', cursor: 'pointer' }}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: '20px', padding: '15px', background: '#f8f9fa', borderRadius: '8px' }}>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Total:</span>
                  <span style={{ color: colors?.primary || '#0047ab' }}>${getTotal()}</span>
                </p>
                <button
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: colors?.primary || '#0047ab',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    marginTop: '10px'
                  }}
                >
                  Checkout →
                </button>
                <p style={{ fontSize: '0.8rem', color: '#888', textAlign: 'center', marginTop: '8px' }}>
                  You'll be redirected to secure payment.
                </p>
              </div>
            </>
          )}
        </div>
      )}

      {/* FOOTER */}
      <footer style={{
        textAlign: 'center',
        padding: '30px 20px',
        background: '#1a1a2e',
        color: 'white',
        marginTop: '40px'
      }}>
        <p style={{ fontSize: '0.9rem', opacity: '0.8' }}>
          {businessName} • {contact?.phone && <a href={`tel:${contact.phone}`} style={{ color: 'white' }}>{contact.phone}</a>}
          {contact?.email && ` • `}
          {contact?.email && <a href={`mailto:${contact.email}`} style={{ color: 'white' }}>{contact.email}</a>}
        </p>
        <p style={{ fontSize: '0.8rem', opacity: '0.5', marginTop: '10px' }}>
          © {new Date().getFullYear()} {businessName}
        </p>
        <p style={{ fontSize: '0.7rem', opacity: '0.3' }}>
          Powered by DoneWright Services
        </p>
      </footer>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default TemplateC;