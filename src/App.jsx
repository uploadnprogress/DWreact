import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  useEffect(() => {
    console.log("DoneWright App Loaded - Version 1.5");
  }, []);

  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;