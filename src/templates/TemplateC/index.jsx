// src/templates/TemplateC/index.jsx
import React, { useState } from 'react';
import './styles.css';

const TemplateC = ({ config }) => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('pickup');
  const [specialInstructions, setSpecialInstructions] = useState('');

  if (!config) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>Loading template configuration...</div>;
  }

  const { businessName, tagline, logo, colors, categories, products, contact, preorder } = config;

  // Pre-order settings
  const preorderCutoff = preorder?.cutoff || '5:00 PM';
  const preorderLeadTime = preorder?.leadTime || '24 hours';
  const maxItemsPerOrder = preorder?.maxItemsPerOrder || 50;

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    // Check if max items per order would be exceeded
    const currentTotal = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (currentTotal >= maxItemsPerOrder) {
      alert(`Maximum order limit is ${maxItemsPerOrder} items. Please reduce your order.`);
      return;
    }
    if (existing) {
      setCart(prev => prev.map(item => 
        item.id === product.id 
          ? { ...item, quantity: Math.min(item.quantity + 1, product.maxQuantity || 99) }
          : item
      ));
    } else {
      setCart(prev => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    const product = cart.find(item => item.id === productId);
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    if (product && product.maxQuantity && newQuantity > product.maxQuantity) {
      alert(`Only ${product.maxQuantity} available.`);
      return;
    }
    setCart(prev => prev.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const getItemCount = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  const handleCheckout = () => {
    if (!pickupDate) {
      alert('Please select a pickup date.');
      return;
    }
    if (!pickupTime) {
      alert('Please select a pickup time.');
      return;
    }
    const orderSummary = cart.map(item => `${item.name} x${item.quantity} ($${item.price * item.quantity})`).join('\n');
    const orderTotal = getTotal();
    alert(
      `🛒 Order Summary\n\n` +
      `Business: ${businessName}\n` +
      `Items:\n${orderSummary}\n\n` +
      `Total: $${orderTotal}\n` +
      `Pickup: ${pickupDate} at ${pickupTime}\n` +
      `Delivery: ${deliveryOption === 'pickup' ? 'Pickup' : 'Delivery'}\n` +
      `${specialInstructions ? `Notes: ${specialInstructions}` : ''}\n\n` +
      `Pre-order cutoff: ${preorderCutoff} (${preorderLeadTime} advance notice required)\n\n` +
      `✅ Order sent! You will receive a confirmation shortly.`
    );
    setCart([]);
    setShowCart(false);
    setSpecialInstructions('');
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products?.filter(p => p.category === selectedCategory);

  // Generate time slots (e.g., 10:00 AM - 6:00 PM in 30-min increments)
  const timeSlots = [];
  for (let h = 10; h <= 18; h++) {
    for (let m = 0; m < 60; m += 30) {
      const hour12 = h > 12 ? h - 12 : h;
      const ampm = h >= 12 ? 'PM' : 'AM';
      const minStr = m === 0 ? '00' : m;
      timeSlots.push(`${hour12}:${minStr} ${ampm}`);
    }
  }

  return (
    <div className="template-c" style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {preorderCutoff && (
            <span style={{ fontSize: '0.8rem', opacity: '0.8', background: 'rgba(255,255,255,0.2)', padding: '5px 12px', borderRadius: '20px' }}>
              ⏰ Order by {preorderCutoff}
            </span>
          )}
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
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            🛒 Cart ({getItemCount()})
          </button>
        </div>
      </header>

      {/* PRE-ORDER NOTICE */}
      <div style={{
        background: '#fff8e1',
        padding: '12px 20px',
        textAlign: 'center',
        borderBottom: '2px solid #ffb300',
        fontSize: '0.9rem'
      }}>
        📋 <strong>Pre-order only</strong> – Orders require {preorderLeadTime} advance notice. Cutoff time is {preorderCutoff}.
      </div>

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
      <section style={{ padding: '40px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px' }}>
          {filteredProducts?.map(product => {
            const isSoldOut = product.maxQuantity !== undefined && product.maxQuantity <= 0;
            return (
              <div key={product.id} style={{
                background: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                transition: 'transform 0.2s',
                opacity: isSoldOut ? 0.6 : 1
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
                  {product.maxQuantity !== undefined && (
                    <span style={{ 
                      fontSize: '0.8rem', 
                      color: product.maxQuantity <= 5 ? '#e65100' : '#888',
                      display: 'block',
                      marginTop: '2px'
                    }}>
                      {product.maxQuantity <= 0 ? '❌ Sold Out' : `${product.maxQuantity} available`}
                    </span>
                  )}
                  <p style={{ fontSize: '0.9rem', color: '#666', margin: '10px 0' }}>{product.description}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.3rem', fontWeight: 'bold', color: colors?.primary || '#0047ab' }}>
                      ${product.price}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      disabled={isSoldOut}
                      style={{
                        padding: '8px 20px',
                        background: isSoldOut ? '#ccc' : (colors?.primary || '#0047ab'),
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: isSoldOut ? 'not-allowed' : 'pointer'
                      }}
                    >
                      {isSoldOut ? 'Sold Out' : 'Add to Order'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {filteredProducts?.length === 0 && (
          <p style={{ textAlign: 'center', color: '#888', padding: '40px 0' }}>
            No items in this category.
          </p>
        )}
      </section>

      {/* CART SIDEBAR */}
      {showCart && (
        <div style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '450px',
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
            <h2 style={{ margin: 0 }}>Your Order</h2>
            <button
              onClick={() => setShowCart(false)}
              style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}
            >
              ✕
            </button>
          </div>

          {cart.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#888', padding: '40px 0' }}>
              Your order is empty.
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
                      ${item.price} x {item.quantity} = ${item.price * item.quantity}
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

              {/* PICKUP DATE & TIME */}
              <div style={{ marginTop: '20px', padding: '15px', background: '#f8f9fa', borderRadius: '8px' }}>
                <h4 style={{ margin: '0 0 10px' }}>📅 Pickup Details</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div>
                    <label style={{ fontSize: '0.9rem', fontWeight: 'bold', display: 'block', marginBottom: '3px' }}>Date</label>
                    <input
                      type="date"
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.9rem', fontWeight: 'bold', display: 'block', marginBottom: '3px' }}>Time</label>
                    <select
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
                    >
                      <option value="">Select time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Delivery Option */}
                <div style={{ marginTop: '10px' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 'bold', display: 'block', marginBottom: '3px' }}>Option</label>
                  <div style={{ display: 'flex', gap: '15px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <input
                        type="radio"
                        name="deliveryOption"
                        value="pickup"
                        checked={deliveryOption === 'pickup'}
                        onChange={() => setDeliveryOption('pickup')}
                      />
                      Pickup
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <input
                        type="radio"
                        name="deliveryOption"
                        value="delivery"
                        checked={deliveryOption === 'delivery'}
                        onChange={() => setDeliveryOption('delivery')}
                      />
                      Delivery
                    </label>
                  </div>
                </div>

                {/* Special Instructions */}
                <div style={{ marginTop: '10px' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 'bold', display: 'block', marginBottom: '3px' }}>Special Instructions</label>
                  <textarea
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    placeholder="Any dietary restrictions, allergies, or special requests?"
                    rows="2"
                    style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '0.9rem' }}
                  />
                </div>

                {/* Pre-order Cutoff Notice */}
                <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '10px', textAlign: 'center' }}>
                  ⏰ Order by {preorderCutoff} ({preorderLeadTime} advance notice required)
                </p>
              </div>

              {/* Total */}
              <div style={{ marginTop: '15px', padding: '15px', background: colors?.primary || '#0047ab', borderRadius: '8px', color: 'white' }}>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', margin: 0 }}>
                  <span>Total:</span>
                  <span>${getTotal()}</span>
                </p>
              </div>

              <button
                onClick={handleCheckout}
                style={{
                  width: '100%',
                  padding: '14px',
                  background: colors?.secondary || '#0059c0',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  marginTop: '10px'
                }}
              >
                Confirm Order →
              </button>
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