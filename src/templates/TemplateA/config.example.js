// src/templates/TemplateA/config.example.js
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
      name: 'Standard Clean', 
      price: 89, 
      emoji: '🧹',
      description: 'Basic cleaning for standard homes'
    },
    { 
      id: 'deep', 
      name: 'Deep Clean', 
      price: 149, 
      emoji: '✨',
      description: 'Deep cleaning including windows and baseboards'
    },
    { 
      id: 'move', 
      name: 'Move-In/Out Clean', 
      price: 399, 
      emoji: '📦',
      description: 'Complete move-in/move-out cleaning'
    }
  ],
  
  contact: {
    phone: "(206) 555-0123",
    email: "hello@yourbusiness.com",
    address: "123 Main St, Seattle, WA"
  }
};