// src/utils/templateHelpers.js
export const getTemplateById = (templateId, templates) => {
  return templates.find(t => t.id === templateId);
};

export const getTemplatesByPrice = (templates, maxPrice) => {
  return templates.filter(t => t.setupPrice <= maxPrice);
};

export const getTemplateDemoUrl = (templateId) => {
  return `/demo/${templateId}`;
};

export const generateClientConfig = (clientData) => {
  return {
    businessName: clientData.businessName || 'Your Business',
    tagline: clientData.tagline || '',
    logo: clientData.logo || null,
    colors: {
      primary: clientData.primaryColor || '#0047ab',
      secondary: clientData.secondaryColor || '#0059c0',
      accent: clientData.accentColor || '#ffb300'
    },
    services: clientData.services || [],
    contact: {
      phone: clientData.phone || '',
      email: clientData.email || '',
      address: clientData.address || ''
    },
    about: clientData.about || '',
    categories: clientData.categories || [],
    products: clientData.products || []
  };
};