import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot'; // Import the new component

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <Chatbot /> {/* Added here to persist across all pages */}
      <Footer />
    </div>
  );
}

export default App;