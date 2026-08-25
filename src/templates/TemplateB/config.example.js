// src/templates/TemplateB/config.example.js
export const config = {
  businessName: "Your Business Name",
  tagline: "Your tagline or slogan",
  logo: "/templates-client-logos/your-logo.png",
  
  colors: {
    primary: "#0047ab",
    secondary: "#0059c0",
    accent: "#ffb300"
  },
  
  services: [
    { 
      id: 'standard', 
      name: 'Standard Service', 
      price: 99, 
      emoji: '📋',
      description: 'Basic service description'
    },
    { 
      id: 'premium', 
      name: 'Premium Service', 
      price: 199, 
      emoji: '⭐',
      description: 'Premium service description'
    },
    { 
      id: 'deluxe', 
      name: 'Deluxe Service', 
      price: 299, 
      emoji: '🏆',
      description: 'Deluxe service description'
    }
  ],
  
  contact: {
    phone: "(206) 555-0123",
    email: "hello@yourbusiness.com",
    address: "123 Main St, Seattle, WA"
  },
  
  about: "We are a trusted provider of professional services in the Seattle area. Our team is dedicated to delivering quality work and exceptional customer service."
};