const prisma = require('../models/prismaClient');

async function main() {
  // Step 1: Add 5 countries
  const countries = [
    { id: 1, name: 'India', shortname: 'IN', phonecode: 91, flag: '🇮🇳' },
    { id: 2, name: 'United States', shortname: 'US', phonecode: 1, flag: '🇺🇸' },
    {
      id: 3,
      name: 'United Kingdom',
      shortname: 'UK',
      phonecode: 44,
      flag: '🇬🇧',
    },
    { id: 4, name: 'Australia', shortname: 'AU', phonecode: 61, flag: '🇦🇺' },
    { id: 5, name: 'Canada', shortname: 'CA', phonecode: 1, flag: '🇨🇦' },
  ];

  for (const country of countries) {
    await prisma.countriesData.upsert({
      where: { id: country.id },
      update: {},
      create: {
        id: country.id,
        name: country.name,
        shortname: country.shortname,
        phonecode: country.phonecode,
        flag: country.flag,
      },
    });
  }

  // Step 2: Add Indian States (28)
  const indianStates = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
  ];

  for (const [index, stateName] of indianStates.entries()) {
    await prisma.statesData.upsert({
      where: { id: index + 1 },
      update: {},
      create: {
        id: index + 1,
        name: stateName,
        country_id: 1, // India
      },
    });
  }

  // Step 3: Add Indian Union Territories (8)
  const unionTerritories = [
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu',
    'Delhi',
    'Jammu and Kashmir',
    'Ladakh',
    'Lakshadweep',
    'Puducherry',
  ];

  for (const [index, utName] of unionTerritories.entries()) {
    await prisma.statesData.upsert({
      where: { id: indianStates.length + index + 1 },
      update: {},
      create: {
        id: indianStates.length + index + 1,
        name: utName,
        country_id: 1, // India
      },
    });
  }

  console.log('✅ Seeded 5 countries, all Indian states and UTs.');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
