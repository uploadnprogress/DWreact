// scripts/new-client.js
import fs from 'fs';
import path from 'path';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise(resolve => rl.question(query, resolve));

const createClient = async () => {
  console.log('\n🚀 Create a new client template');
  console.log('================================\n');

  const clientName = await question('Client name (slug): ');
  const businessName = await question('Business name: ');
  const templateType = await question('Template type (A|B|C|D): ');
  const primaryColor = await question('Primary color (hex): ');
  const phone = await question('Phone number: ');
  const email = await question('Email: ');

  const clientDir = path.join(process.cwd(), 'src', 'templates-clients', clientName);
  
  if (fs.existsSync(clientDir)) {
    console.log(`❌ Client "${clientName}" already exists.`);
    process.exit(1);
  }

  fs.mkdirSync(clientDir, { recursive: true });
  fs.mkdirSync(path.join(clientDir, 'images'), { recursive: true });

  const configContent = `// src/templates-clients/${clientName}/config.js
export const config = {
  businessName: "${businessName}",
  tagline: "",
  logo: "/templates-client-logos/${clientName}/logo.png",
  colors: {
    primary: "${primaryColor || '#0047ab'}",
    secondary: "${primaryColor ? `${primaryColor}cc` : '#0059c0'}",
    accent: "#ffb300"
  },
  services: [
    { id: 'service-1', name: 'Service 1', price: 99, emoji: '📋' },
    { id: 'service-2', name: 'Service 2', price: 149, emoji: '✨' },
    { id: 'service-3', name: 'Service 3', price: 249, emoji: '⭐' }
  ],
  contact: {
    phone: "${phone}",
    email: "${email}",
    address: ""
  },
  about: ""
};
`;

  fs.writeFileSync(path.join(clientDir, 'config.js'), configContent);

  console.log(`\n✅ Client "${clientName}" created successfully!`);
  console.log(`\n📁 Location: src/templates-clients/${clientName}/`);
  console.log(`\n📝 Next steps:`);
  console.log(`  1. Add logo: src/templates-clients/${clientName}/images/logo.png`);
  console.log(`  2. Update config.js with services and pricing`);
  console.log(`  3. Deploy: npm run build-client ${clientName}`);

  rl.close();
};

createClient();