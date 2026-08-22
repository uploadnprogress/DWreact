import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import BrokerExclusive from './pages/BrokerExclusive.jsx';
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
import SecureTransitForm from './pages/SecureTransitForm.jsx';
import BrokerExclusiveForm from './pages/BrokerExclusiveForm.jsx';
import StandardMembershipForm from './pages/StandardMembershipForm.jsx';
import StandardMembership from './pages/StandardMembership.jsx';
import SecureTransit from './pages/SecureTransit.jsx';
import TemplateDemoPage from './pages/TemplateDemoPage.jsx'; // ← ADD THIS IMPORT
import './styles.css';

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
      { path: "standard", element: <StandardMembership /> },
      { path: "secure-transit", element: <SecureTransit /> },
      { path: "partner-gift", element: <BrokerExclusive /> },
      { path: "transit-request", element: <SecureTransitForm /> },
      { path: "partner-redemption", element: <BrokerExclusiveForm /> },
      { path: "membership-application", element: <StandardMembershipForm /> },
      // ADD THE DEMO ROUTE HERE
      { path: "demo-templates", element: <TemplateDemoPage /> },
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