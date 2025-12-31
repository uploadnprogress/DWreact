import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot'; // Make sure the file name matches (Chatbot vs ChatBot)

function App() {
  useEffect(() => {
    console.log("DoneWright App Loaded - Version 1.5");
  }, []);

  return (
    <div className="app-wrapper">
      <Header />
      <main>
        {/* This Outlet renders your Home, Join Us, or Project pages */}
        <Outlet />
      </main>
      
      {/* The floating chat bubble sits here, on top of everything */}
      <Chatbot />
      
      <Footer />
    </div>
  );
}

export default App;