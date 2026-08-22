// src/templates/TemplateD/config.example.js
export const config = {
  businessName: "Your Consulting Business",
  tagline: "Expert Guidance for Your Success",
  logo: "/templates-client-logos/your-logo.png",
  
  colors: {
    primary: "#0047ab",
    secondary: "#0059c0",
    accent: "#ffb300"
  },
  
  services: [
    { 
      id: 'consultation', 
      name: '60-Min Session', 
      price: 150, 
      emoji: '💼',
      duration: '60 minutes'
    },
    { 
      id: 'deep-dive', 
      name: '90-Min Deep Dive', 
      price: 220, 
      emoji: '🔍',
      duration: '90 minutes'
    },
    { 
      id: 'package', 
      name: 'Monthly Package (4 sessions)', 
      price: 500, 
      emoji: '📋',
      duration: '4 x 60 minutes'
    }
  ],
  
  contact: {
    phone: "(206) 555-0123",
    email: "hello@yourbusiness.com",
    address: "123 Main St, Seattle, WA"
  },
  
  about: "I provide expert guidance to help you achieve your goals. Book a session and let's get started."
};