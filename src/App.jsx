import React from 'react';
import { Outlet } from 'react-router-dom'; // 1. Import Outlet

// Import your components
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

// Import your CSS
import './styles.css';
import './chatbot.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* 2. Outlet is the placeholder for our page content */}
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}

export default App;