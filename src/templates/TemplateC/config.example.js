// src/templates/TemplateC/config.example.js
export const config = {
  businessName: "Your Rental Business",
  tagline: "Event Rentals Made Easy",
  logo: "/templates-client-logos/your-logo.png",
  
  colors: {
    primary: "#0047ab",
    secondary: "#0059c0",
    accent: "#ffb300"
  },
  
  categories: [
    { id: 'tables', name: 'Tables', icon: '🪑' },
    { id: 'chairs', name: 'Chairs', icon: '🪑' },
    { id: 'tents', name: 'Tents', icon: '🏕️' }
  ],
  
  products: [
    { 
      id: 'table-1', 
      name: 'Round Table', 
      category: 'tables',
      price: 15, 
      image: '/templates/images/table.jpg',
      description: '60" round table, seats 8'
    },
    { 
      id: 'chair-1', 
      name: 'Folding Chair', 
      category: 'chairs',
      price: 5, 
      image: '/templates/images/chair.jpg',
      description: 'Standard folding chair'
    },
    { 
      id: 'tent-1', 
      name: '10x10 Canopy Tent', 
      category: 'tents',
      price: 200, 
      image: '/templates/images/tent.jpg',
      description: 'Commercial grade canopy tent'
    }
  ],
  
  contact: {
    phone: "(206) 555-0123",
    email: "hello@yourbusiness.com",
    address: "123 Main St, Seattle, WA"
  }
};