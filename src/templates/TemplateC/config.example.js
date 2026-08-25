// src/templates/TemplateC/config.example.js
export const config = {
  businessName: "Sweet Treats Bakery",
  tagline: "Artisanal Desserts Made Fresh Daily",
  logo: "/templates-client-logos/your-logo.png",
  
  colors: {
    primary: "#8B4513",      // Warm brown
    secondary: "#D2691E",    // Lighter brown
    accent: "#FFD700"        // Gold accent
  },
  
  // Pre-order settings (NEW)
  preorder: {
    cutoff: "5:00 PM",
    leadTime: "24 hours",
    maxItemsPerOrder: 50
  },
  
  categories: [
    { id: 'cakes', name: 'Cakes', icon: '🍰' },
    { id: 'cookies', name: 'Cookies', icon: '🍪' },
    { id: 'pastries', name: 'Pastries', icon: '🥐' },
    { id: 'specials', name: 'Weekly Specials', icon: '⭐' }
  ],
  
  products: [
    { 
      id: 'cake-1', 
      name: 'Chocolate Fudge Cake', 
      category: 'cakes',
      price: 45, 
      maxQuantity: 20,
      image: '/templates/images/chocolate-cake.jpg',
      description: 'Decadent 8" chocolate cake with fudge frosting'
    },
    { 
      id: 'cake-2', 
      name: 'Custom Wedding Cake', 
      category: 'cakes',
      price: 150, 
      maxQuantity: 5,
      image: '/templates/images/wedding-cake.jpg',
      description: 'Custom design – contact for details'
    },
    { 
      id: 'cookie-1', 
      name: 'Assorted Cookie Box', 
      category: 'cookies',
      price: 25, 
      maxQuantity: 50,
      image: '/templates/images/cookies.jpg',
      description: '12 assorted gourmet cookies'
    },
    { 
      id: 'special-1', 
      name: 'Strawberry Tart', 
      category: 'specials',
      price: 12, 
      maxQuantity: 15,
      image: '/templates/images/tart.jpg',
      description: 'Seasonal strawberry tart (limited time!)'
    }
  ],
  
  contact: {
    phone: "(206) 555-0123",
    email: "hello@sweettreats.com",
    address: "123 Main St, Seattle, WA"
  }
};