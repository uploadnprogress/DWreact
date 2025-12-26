import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ProjectStartPage from './pages/ProjectStartPage.jsx';
import FAQPage from './pages/FAQPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import JoinUsPage from './pages/JoinUsPage.jsx';
import HomeServicesPage from './pages/HomeServicesPage.jsx';
import BusinessServicesPage from './pages/BusinessServicesPage.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';
import TermsOfServicePage from './pages/TermsOfServicePage.jsx';

import './styles.css'; // This is the ONLY css file you need now

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "start-project", element: <ProjectStartPage /> },
      { path: "faq", element: <FAQPage /> },
      { path: "contacts", element: <ContactPage /> },
      { path: "ju", element: <JoinUsPage /> },
      { path: "home-services", element: <HomeServicesPage /> },
      { path: "business-services", element: <BusinessServicesPage /> },
      { path: "privacy", element: <PrivacyPolicyPage /> },
      { path: "terms", element: <TermsOfServicePage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);