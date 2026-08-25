import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="app-wrapper">
      {/* SKIP LINK - For keyboard users */}
      <a 
        href="#main-content" 
        className="skip-link"
        style={{
          position: 'absolute',
          top: '-999px',
          left: '-999px',
          zIndex: 9999,
          background: 'white',
          color: '#0047ab',
          padding: '10px 20px',
          fontWeight: 'bold',
          borderRadius: '4px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
        }}
        onFocus={(e) => {
          e.target.style.top = '10px';
          e.target.style.left = '10px';
        }}
        onBlur={(e) => {
          e.target.style.top = '-999px';
          e.target.style.left = '-999px';
        }}
      >
        Skip to main content
      </a>
      
      <Header />
      
      <main id="main-content">
        <Outlet />
      </main>
      
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;